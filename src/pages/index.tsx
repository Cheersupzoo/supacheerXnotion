import Image from "next/image";
import styles from "./page.module.css";
import { NotionAPI } from "notion-client";
import { NotionRenderer, defaultMapImageUrl } from "react-notion-x";
import Link from "next/link";
import fs from "fs/promises";
import { existsSync } from "fs";

import pLimit from "p-limit";
import { NotionPageHeader } from "@/components/NotionPageHeader";

export default function Home({ data }: { data: any }) {
  return (
    <NotionRenderer
      recordMap={data}
      fullPage={true}
      darkMode={false}
      previewImages={true}
      mapImageUrl={(url, block) => {
        if (url.includes("picture_cache")) {
          return url;
        }
        const defaultUrl = defaultMapImageUrl(url, block);

        return defaultUrl ?? "";
      }}
      components={{ nextImage: Image, Header: NotionPageHeader }}
    />
  );
}

export async function getStaticProps() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(
    "Suppachai-a801d85fcc9e4c76bd7a4c60ad234952"
  );

  if (!existsSync("./public/picture_cache")) {
    await fs.mkdir("./public/picture_cache");
  }

  function extractKeyFromUrl(url: string) {
    const regex =
      /https:\/\/s3.us-west-2.amazonaws.com\/secure.notion-static.com\/(.*)\/.*\.(.*)\?.*/;
    const result = regex.exec(url);
    return [result?.[1] ?? "", result?.[2]];
  }

  async function imageUrlToFile(url: string) {
    const [key, contentType] = extractKeyFromUrl(url);
    const fileName = `/picture_cache/${key}.${contentType}`;
    if (!existsSync(`./public${fileName}`)) {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      await fs.writeFile(`./public${fileName}`, buffer);
    }

    return fileName;
  }

  const limit = pLimit(4);

  const promises = Object.entries(recordMap.signed_urls).map(
    async ([key, url]) =>
      limit(async () => {
        const image = await imageUrlToFile(url);

        return {
          [key]: image,
        };
      })
  );

  const arrayKeyUrl = await Promise.all(promises);

  const base64Signed_url = arrayKeyUrl.reduce(
    (acc, val) => ({ ...acc, ...val }),
    {}
  );

  const base64ImageRecordMap = {
    ...recordMap,
    signed_urls: base64Signed_url,
  };

  return { props: { data: base64ImageRecordMap } };
}
