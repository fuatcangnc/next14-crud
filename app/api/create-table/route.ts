import { NextRequest,NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
    const result = await sql`CREATE TABLE Grundes (NAME varchar(255))`;
    return NextResponse.json({result})
  }