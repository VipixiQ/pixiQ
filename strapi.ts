const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getJobBySlug(slug: string) {
  if (!STRAPI_URL) {
    return null
  }

  const res = await fetch(
    `${STRAPI_URL}/api/jobs?filters[slug][$eq]=${slug}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    return null
  }

  const json = await res.json()
  return json.data?.[0] || null
}