import uploadFileFeature from "@adminjs/upload";
import { ResourceOptions, FeatureType } from "adminjs";

export const episodeResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["name", "synopsis", "courseId", "order", "uploadVideo", "secondsLong"],
  filterProperties: ["name", "synopsis", "courseId", "secondsLong", "createdAt", "updatedAt"],
  listProperties: ["id", "name", "courseId", "order", "secondsLong"],
  showProperties: ["id", "name", "synopsis", "courseId", "order", "videoUrl", "secondsLong", "createdAt", "updatedAt"],
};

export const episodeResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      aws: {
        bucket: process.env.SUPABASE_BUCKET_NAME || "",
        region: process.env.SUPABASE_REGION || "",
        accessKeyId: process.env.SUPABASE_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.SUPABASE_SECRET_ACCESS_KEY || "",
        endpoint: process.env.SUPABASE_S3_ENDPOINT || "",
      } as unknown as any,
    },
    properties: {
      key: "videoUrl",
      file: "uploadVideo",
    },
    uploadPath: (record, filename) => `videos/course-${record.get("courseId")}/${filename}`,
  }),
];
