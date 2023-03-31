import { NextRequest, NextResponse } from "next/server";
import userData from "../../data/userData.json";

export async function GET() {
  return NextResponse.json(userData);
}

export async function POST(request: NextRequest) {
  const { body } = request;
  console.log(body);
  return NextResponse.json(userData);
}
