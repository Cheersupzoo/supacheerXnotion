import Link from "next/link";

interface MyProp {
  numOfPage: number;
  curPage: number;
}

export default function PageSelector({ numOfPage, curPage }: MyProp) {
  return (
    <div className="flex flex-row justify-center gap-x-8 text-[var(--text-color)] pb-12">
      {Array.from({ length: numOfPage }, (_, i) => i + 1).map((num) =>
        curPage === num ? (
          <div className="font-bold" key={num}>
            {num}
          </div>
        ) : num === 1 ? (
          <Link key={num} href={`/blog`}>
            {num}
          </Link>
        ) : (
          <Link key={num} href={`/blog/page/${num}`}>
            {num}
          </Link>
        )
      )}
    </div>
  );
}
