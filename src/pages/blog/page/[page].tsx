import { GetStaticProps } from "next";
import config from "../../../../blog.config";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "@/components/Layout";
import PostCard from "@/components/Mdx/postCard";
import PageSelector from "@/components/Mdx/pageSelector";
import { getAllPosts } from "@/lib/Mdx/api";
interface MyProp {
  posts: {
    [key: string]: any;
  };
  prevPosts: any;
  nextPosts: any;
  numOfPage: number;
}
export default function Home({
  posts,
  prevPosts,
  nextPosts,
  numOfPage,
}: MyProp) {
  const isLocal = process.env.NODE_ENV === "development";
  const router = useRouter();
  const curPage = parseInt(router.query.page?.toString() ?? "1");

  return (
    <Layout>
      <div className="mx-auto w-5/6 sm:w-2/3 md:max-w-xl  sm:px-4 mt-12 mb-4">
        {posts
          .filter((post: any) => {
            return isLocal || !post.draft;
          })
          .map((post: any) => (
            <PostCard key={post.slug} post={post} />
          ))}
      </div>

      <PageSelector numOfPage={numOfPage} curPage={curPage} />
    </Layout>
  );
}

type Params = {
  params: {
    page: number;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "description",
    "author",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "type",
    "draft",
  ]);

  const curPage = parseInt(params?.page?.toString() ?? "1");

  const startIndex = 0 + (curPage - 1) * config.postsPerPage;
  const endIndex = config.postsPerPage + (curPage - 1) * config.postsPerPage;
  const prevPosts = null;
  const nextPosts = endIndex >= posts.length ? null : 2;
  const numOfPage = Math.ceil(posts.length / config.postsPerPage);

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPosts,
      nextPosts,
      numOfPage,
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  const numOfPage = Math.ceil(posts.length / config.postsPerPage);
  return {
    paths: Array.from({ length: numOfPage }, (_, i) => i + 1).map((num) => {
      return {
        params: {
          page: `${num}`,
        },
      };
    }),
    fallback: false,
  };
}
