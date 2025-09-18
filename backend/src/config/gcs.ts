import { Storage } from "@google-cloud/storage";
import path from "path";

const projectId = process.env.GCLOUD_PROJECT_ID;
const keyFile = process.env.GCLOUD_KEY_FILE; 
export const BUCKET_NAME = process.env.GCLOUD_BUCKET_NAME!;

export const storage = keyFile
  ? new Storage({ projectId, keyFilename: path.resolve(keyFile) })
  : new Storage({ projectId });

export const bucket = storage.bucket(BUCKET_NAME);
