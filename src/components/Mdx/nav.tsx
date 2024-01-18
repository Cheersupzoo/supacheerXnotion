import { Popover } from "@headlessui/react";
import { useState } from "react";
import { useHeadingsData, useIntersectionObserver } from "./getNestedHeading";

const Nav = (props: any) => {
  const { nestedHeadings } = useHeadingsData();
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);

  return (
    <div className="relative z-10">
      <div className="hidden 2xl:inline-block fixed p-6 2xl:right-[calc((100vw-42rem)/2-20rem-4rem)] top-80 w-80  ">
        <div className="font-semibold text-gray-800 text-lg mb-0 tracking-widest">
          TABLE OF CONTENTS
        </div>
        <nav>
          <ul>
            {nestedHeadings.map((heading) => (
              <li
                key={heading.id}
                style={{
                  listStyleType: "none",
                }}
                className="ml-0 my-4 leading-[1rem]"
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.id}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={
                    "text-sm tracking-normal leading-[1rem] " +
                    (activeId === heading.id
                      ? "text-blue-600 "
                      : "text-gray-700 ")
                  }
                >
                  {heading.title}
                </a>
                {heading.items.length > 0 && (
                  <ul>
                    {heading.items.map((child: any) => (
                      <li
                        key={child.id}
                        style={{
                          listStyleType: "none",
                        }}
                        className="ml-5 my-2 leading-3"
                      >
                        <a
                          href={`#${child.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .querySelector(`#${child.id}`)
                              ?.scrollIntoView({
                                behavior: "smooth",
                              });
                          }}
                          className={
                            "text-sm tracking-normal " +
                            (activeId === child.id
                              ? "text-blue-600 "
                              : "text-gray-700 ")
                          }
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Popover className="2xl:hidden fixed bottom-5 right-5">
        <Popover.Button>
          <div className="p-3 rounded-full bg-indigo-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
                fill="#fff"
              />
            </svg>
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute top-0 right-0 -translate-y-full  z-10">
          <div className="bg-gray-50 mb-2 p-6 w-80 rounded-xl border-2 border-gray-600 ">
            <div className="font-semibold text-gray-800 text-lg mb-0 tracking-widest">
              TABLE OF CONTENTS
            </div>
            <nav>
              <ul>
                {nestedHeadings.map((heading) => (
                  <li
                    key={heading.id}
                    style={{
                      listStyleType: "none",
                    }}
                    className="ml-0 my-4 leading-[1rem]"
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${heading.id}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                      className={
                        "text-sm tracking-normal leading-[1rem] " +
                        (activeId === heading.id
                          ? "text-blue-600 "
                          : "text-gray-700 ")
                      }
                    >
                      {heading.title}
                    </a>
                    {heading.items.length > 0 && (
                      <ul>
                        {heading.items.map((child: any) => (
                          <li
                            key={child.id}
                            style={{
                              listStyleType: "none",
                            }}
                            className="ml-5 my-2 leading-3"
                          >
                            <a
                              href={`#${child.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                document
                                  .querySelector(`#${child.id}`)
                                  ?.scrollIntoView({
                                    behavior: "smooth",
                                  });
                              }}
                              className={
                                "text-sm tracking-normal " +
                                (activeId === child.id
                                  ? "text-blue-600 "
                                  : "text-gray-700 ")
                              }
                            >
                              {child.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default Nav;
