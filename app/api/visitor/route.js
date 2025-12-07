import { get } from "@vercel/edge-config";

export const runtime = "nodejs"; // ensures it runs on Node environment

export async function GET() {
  try {
    // 1. Read current value
    const current = (await get("visitor_count")) ?? 0;
    const newCount = current + 1;

    // 2. Update using Vercel REST API (Edge Config editing)
    const edgeConfigId = process.env.EDGE_CONFIG_ID;
    const apiToken = process.env.VERCEL_API_TOKEN;

    const updateRes = await fetch(
      `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              op: "update",
              key: "visitor_count",
              value: newCount,
            },
          ],
        }),
      }
    );

    if (!updateRes.ok) {
      console.error("Failed to update Edge Config:", await updateRes.text());
      return Response.json({ count: current });
    }

    return Response.json({ count: newCount });
  } catch (err) {
    console.error("Visitor Endpoint Error:", err);
    return Response.json({ count: null });
  }
}
