import { NextRequest, NextResponse } from "next/server";
import userData from "../../data/userData.json";

export function GET() {
  return NextResponse.json(userData);
}

export async function POST(request: NextRequest) {
  const response = await request.json();
  return NextResponse.json({ response });
}
