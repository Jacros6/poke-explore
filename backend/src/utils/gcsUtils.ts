import { bucket } from "../config/gcs";

export async function getSignedUrl(fileName: string, expiresSeconds = Number(process.env.SIGNED_URL_EXPIRES_SECONDS ?? 900)) {
  const file = bucket.file(fileName);
  const options = {
    version: "v4" as const,
    action: "read" as const,
    expires: Date.now() + expiresSeconds * 1000,
  };

  // returns [url]
  const [url] = await file.getSignedUrl(options);
  return url;
}
