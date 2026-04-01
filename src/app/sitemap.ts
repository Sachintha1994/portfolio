export const dynamic = "force-static";
export const revalidate = false;

export default async function sitemap() {
  const baseUrl = "https://thilina-weerasinghe.vercel.app"; // Update with your actual domain later
  const buildDate = new Date().toISOString();

  const staticUrls = [
    { url: baseUrl, lastModified: buildDate },
    { url: `${baseUrl}/about`, lastModified: buildDate },
    { url: `${baseUrl}/skills`, lastModified: buildDate },
    { url: `${baseUrl}/education`, lastModified: buildDate },
    { url: `${baseUrl}/experience`, lastModified: buildDate },
    { url: `${baseUrl}/projects`, lastModified: buildDate },
    { url: `${baseUrl}/achievements`, lastModified: buildDate },
    { url: `${baseUrl}/contact`, lastModified: buildDate },
  ];

  return staticUrls;
}
