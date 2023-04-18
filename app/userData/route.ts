import { NextRequest, NextResponse } from "next/server";

export const data = {
  tobi: {
    ids: ["bitcoin", "solana", "ethereum", "tether"],
  },
  dani: {},
};

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  console.log(data);
  const { body } = request;
  data.tobi.ids.push(JSON.stringify(body));
  console.log(data);
}
