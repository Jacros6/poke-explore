// src/routes/gameRoutes.ts
import { Router } from "express";
import { randomUUID } from "crypto";
import { createGameToken, decodeGameToken } from "../utils/tokenUtils";
import { tokenMiddleware } from "../middleware/tokenMiddleware";
import { allLocationsUsed, getLocationById, getRandomLocation } from "../models/pokemonModel";
import { gridDistance } from "../utils/locationUtils";
import { MakeGuessPayload } from "../../../shared/interfaces"

const router = Router();
const TOLERANCE_DISTANCE = 1;

router.post("/start-game", async (req, res) => {
  const { oldToken } = req.body || {};

  let usedIds: number[] = [];
  if (oldToken) {
    try {
      const payload = decodeGameToken(oldToken);
      usedIds = payload.usedIds || [];
    } catch {
      usedIds = [];
    }
  }

  const locations = await getRandomLocation(usedIds);
  if (!locations.length) {
    return res.status(404).send("No locations left");
  }

  const randomLoc = locations[Math.floor(Math.random() * locations.length)];
  const decodedToken = decodeGameToken(oldToken);

  const payload = {
    userId:oldToken ? decodedToken.userId : randomUUID(),
    usedIds: [...usedIds, randomLoc.id],
    score: oldToken ? decodedToken.score : 0,
    lives: oldToken ? decodedToken.lives : 3,
    currentRoundId: randomLoc.id
  };

  const token = createGameToken(payload);
  console.log(randomLoc)
  res.json({
    token: token,
    image_url: randomLoc.image_url
  });
});


router.post("/make-guess", tokenMiddleware, async(req, res) => {
    const {token, guessed_location} = req.body;
    console.log("Make a guess")
    if(!token){
        return res.status(400).send("Token required");
    }

    const payload = decodeGameToken(token);
    if(!payload.currentRoundId){
        return res.status(400).send("Something went wrong")
    }
    if(payload.lives < 0){
      return res.status(400).send("No more lives remaining");
    }

    const result_location = await getLocationById(payload.currentRoundId);

    const distance = gridDistance(
        result_location.coordinates.row,
        result_location.coordinates.col,
        guessed_location.row,
        guessed_location.col
    )

    const isCorrect = distance <= TOLERANCE_DISTANCE;
    if(isCorrect){
        if(distance == 0){
            payload.score += 2;
        }
        else{
            payload.score += 1;
        }
    }
    else {
        payload.lives -= 1;
    }

    let gameStatus: "won" | "lost" | null = null;
    if (payload.lives <= 0){
      gameStatus = "lost";
    }
    else if (await allLocationsUsed(payload.usedIds)){
      gameStatus = "won";
    }

    console.log("Show me my payload", payload)

    const updatedToken = createGameToken(payload);

    const result: MakeGuessPayload ={
        result: isCorrect ? "correct" : "wrong",
        distance: distance,
        updatedToken: updatedToken,
        status: gameStatus,
        actualLocation: {
            coordinates: result_location.coordinates,
            name: result_location.name
        },
        score: payload.score,
        lives: payload.lives
    }

    return res.json(result)
})

router.post("/next-location", tokenMiddleware, async (req, res) => {
  const { token } = req.body;
  
  if (!token) return res.status(400).send("Token required");

  let usedIds: number[] = [];
  let payload = decodeGameToken(token);
  usedIds = payload.usedIds;

  if(payload.lives <= 0){
    return res.status(404).send("No more lives remaining");
  }

  const locations = await getRandomLocation(usedIds);
  if (!locations.length) {
    return res.status(404).send("No locations left");
  }

  const randomLoc = locations[Math.floor(Math.random() * locations.length)];

  payload = {
    userId: payload.userId,
    usedIds: [...usedIds, randomLoc.id],
    score: payload.score,
    lives: payload.lives,
    currentRoundId: randomLoc.id
  };

  const updatedToken = createGameToken(payload);
  res.json({
    token: updatedToken,
    image_url: randomLoc.image_url
  })

});

export default router;
