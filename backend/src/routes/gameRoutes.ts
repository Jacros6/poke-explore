// src/routes/gameRoutes.ts
import { Router } from "express";
import { randomUUID } from "crypto";
import { createGameToken, decodeGameToken } from "../utils/tokenUtils";
import { tokenMiddleware } from "../middleware/tokenMiddleware";
import { getAllLocationIds, getLocationById, getRandomLocation } from "../models/pokemonModel";
import { gridDistance } from "../utils/locationUtils";

const router = Router();
const TOLERANCE_DISTANCE = 1;
/**
 * Start a new game
 */
router.post("/start-game", async (req, res) => {


  const { oldToken } = req.body || {};

  let usedIds: number[] = [];
  if (oldToken) {
    try {
      const payload = decodeGameToken(oldToken);
      usedIds = payload.usedIds || [];
    } catch {
      // Invalid token, ignore and start fresh
      usedIds = [];
    }
  }

  const locations = await getRandomLocation(usedIds);
  if (!locations.length) {
    return res.status(404).send("No locations left");
  }

  const randomLoc = locations[Math.floor(Math.random() * locations.length)];

  // Initial game token payload
  const payload = {
    userId:oldToken ? decodeGameToken(oldToken).userId : randomUUID(),
    usedIds: [...usedIds, randomLoc.id],
    score: oldToken ? decodeGameToken(oldToken).score : 0,
    lives: oldToken ? decodeGameToken(oldToken).lives : 3,
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
    if(!token){
        return res.status(400).send("Token required");
    }

    const payload = decodeGameToken(token);
    if(!payload.currentRoundId){
        return res.status(400).send("Something went wrong")
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

    const updatedToken = createGameToken(payload);

    return res.json({
        result: isCorrect ? "correct" : "wrong",
        distance,
        updatedToken,
        actualLocation: {
            coordinates: result_location.coordinates,
            name: result_location.name
        }
    })
})

/**
 * Get next Pokémon / location
 */
// router.post("/next-pokemon", tokenMiddleware, (req, res) => {
//   const { token } = req.body;

//   if (!token) return res.status(400).send("Token required");

//   const payload = decodeGameToken(token);

//   // Filter out already used locations
//   const unusedLocations = locations.filter(l => !payload.usedIds.includes(l.id));

//   if (unusedLocations.length === 0) {
//     return res.status(404).send("No Pokémon left");
//   }

//   // Pick a random unused location
//   const nextLoc = unusedLocations[Math.floor(Math.random() * unusedLocations.length)];

//   // Update payload
//   payload.usedIds.push(nextLoc.id);
//   payload.currentRoundId = nextLoc.id;

//   const updatedToken = createGameToken(payload);

//   res.json({
//     updatedToken,
//     imageUrl: nextLoc.imageUrl
//   });
// });

export default router;
