import Image from "next/image";
import styles from "./page.module.css";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

export default function Home({ data }: { data: any }) {
  return <NotionRenderer recordMap={data} fullPage={true} darkMode={false} />;
}

export async function getStaticProps() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(
    "Suppachai-a801d85fcc9e4c76bd7a4c60ad234952"
  );

  return { props: { data: recordMap } };
}
