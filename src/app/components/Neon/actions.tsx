"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function isValidSlug(slug: string) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`SELECT COUNT(*) FROM startups WHERE slug = ${slug}`;
  console.log(result[0].count > 0);
  return result[0].count > 0;
}

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

export async function getPrizePool() {
  try {
    const response = await sql`SELECT SUM(investment_amount) FROM prize_pool`;
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

export async function boost(slug: string, addedVotes = 1) {
  try {
    const response =
      await sql`UPDATE startups SET votes = votes + ${addedVotes} WHERE slug=${slug} RETURNING *`;
    return response[0]?.votes;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePool(tier: string, amount: number) {
  try {
    const response =
      await sql`INSERT INTO prize_pool (investment_type, investment_amount) VALUES (${tier}, ${amount})`;
    return response[0]?.votes;
  } catch (error) {
    console.log(error);
  }
}
