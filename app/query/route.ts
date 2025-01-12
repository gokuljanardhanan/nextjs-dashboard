import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666
    `;

    return NextResponse.json({ data: result.rows });
  } catch (error: any) {
    console.error("Query failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
