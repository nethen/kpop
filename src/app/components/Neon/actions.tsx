"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function getStartups() {
  try {
    const response = await sql`SELECT * FROM startups`;
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getTotalVotes() {
  try {
    const response = await sql`SELECT SUM(votes) FROM startups`;
    return response[0]?.sum || 0;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchValueFromDatabase(id: string) {
  try {
    const result = await sql`
      SELECT votes FROM startup WHERE id = ${id}`;
    return result[0]?.your_column || 0; // Return the current value, default to 0 if not found
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch value");
  }
}

export async function boost(id: string, addedVotes = 1) {
  try {
    const response =
      await sql`UPDATE startups SET votes = votes + ${addedVotes} WHERE id=${id} RETURNING *`;
    return response[0]?.votes;
  } catch (error) {
    console.log(error);
  }
}
