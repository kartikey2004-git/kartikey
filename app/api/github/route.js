import { getCachedContributions } from "@/utils/githubUtils";

export async function GET() {
  const data = await getCachedContributions();
  return Response.json(data);
}
