import { NextRequest, NextResponse } from "next/server";

const users = {
  daniel: { ids: ["solana", "ethereum"] },
  tobi: { ids: ["bitcoin", "ethereum"] },
};

export async function GET() {
  return NextResponse.json({ users });
}

export function POST() {
  users.daniel.ids.push("Hallo");
  return NextResponse.json({ ids: users.daniel.ids });
}

export function DELETE() {
  users.daniel.ids.pop();
  return NextResponse.json({ ids: users.daniel.ids });
}
