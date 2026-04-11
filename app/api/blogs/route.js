export async function GET() {
  try {
    const res = await fetch(
      "https://markstack-app.vercel.app/api/public/blogs",
      {
        next: { revalidate: 3600 },
      },
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json([], { status: 200 });
  }
}
