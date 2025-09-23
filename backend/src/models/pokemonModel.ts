import { pool } from "../config/db";

export async function getAllLocationIds(): Promise<number[]> {
  const [rows] = await pool.query("SELECT id FROM hg_ss_locations");
  return (rows as { id: number }[]).map(p => p.id);
}

export async function getRandomLocation(usedIds: number[]): Promise<any>{

  if (!usedIds || usedIds.length === 0) {
    const [rows]: any = await pool.query(
      "SELECT id, image_url FROM hg_ss_locations ORDER BY RAND() LIMIT 1"
    );
    return rows;
  }

  const placeholders = usedIds.map(() => "?").join(",");
  const [rows]: any = await pool.query(
    `SELECT id, image_url 
     FROM hg_ss_locations 
     WHERE id NOT IN (${placeholders}) 
     ORDER BY RAND() 
     LIMIT 1`,
    usedIds
  );

  return rows;

}

export async function allLocationsUsed(usedIds: number[]): Promise<any>{
  const [rows] = await pool.query("SELECT COUNT(*) AS total FROM hg_ss_locations");
  const totalLocations = (rows as any)[0].total;

  const uniqueUsed = new Set(usedIds);

  return uniqueUsed.size >= totalLocations;
}

export async function getLocationById(id: number) {
  const [rows] = await pool.query("SELECT * FROM hg_ss_locations WHERE id = ?", [id]);
  return (rows as any[])[0];
}
