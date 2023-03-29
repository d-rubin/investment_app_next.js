export const data = {
  tobi: {
    ids: ["bitcoin", "ethereum", "solana", "tether"],
  },
};

export async function GET(request: Request) {
  return new Response(JSON.stringify(data));
}
