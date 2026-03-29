const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getJobBySlug(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/jobs?filters[slug][$eq]=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch job");
  }

  const json = await res.json();
  return json.data?.[0] || null;
}
