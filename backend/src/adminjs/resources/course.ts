import path from "path";
import uploadFileFeature from "@adminjs/upload";
import { ResourceOptions, FeatureType } from "adminjs";

export const courseResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["name", "synopsis", "uploadThumbnail", "categoryId", "featured"],
  filterProperties: ["name",  "categoryId", "createdAt", "updatedAt"],
  listProperties: ["id", "name",  "categoryId", "featured"],
  showProperties: ["id", "name", "synopsis",  "thumbnailUrl", "categoryId", "featured","createdAt", "updatedAt"],
};

export const courseResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, "../../../public"),
      },
    },
    properties: {
      key: "thumbnailUrl",
      file: "uploadThumbnail",
    },
    uploadPath: (record, filename) => `thumbnails/course-${record.get("id")}/${filename}`,
  }),
];
