import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import userData from "../../data/userData.json";

export async function GET() {
  return NextResponse.json(userData);
}

export async function POST(request: NextRequest) {
  const { body } = request;
  const newIDs = userData.tobi.ids.push(JSON.stringify(body));
  fs.writeFileSync("data/userData.json", JSON.stringify(newIDs));

  return NextResponse.json(userData);
}
