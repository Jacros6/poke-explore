import mysql from "mysql2/promise";
import fs from "fs";

async function main(){
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    const data = JSON.parse(fs.readFileSync("data/hg_ss_locations.json", "utf-8"));

    console.log("Connected to DB");

    await connection.execute("DELETE FROM hg_ss_locations");

    for (const loc of data.locations){
        await connection.execute(
            "INSERT INTO locations (id, name, image_url, coordinates) VALUES (?, ?, ?, ?)",
            [loc.name, loc.image_url, loc.coordinates]
        );
    }

    console.log("Seeding complete!");
    await connection.end();
}
main().catch(err => {
  console.error("Error seeding:", err);
  process.exit(1);
});