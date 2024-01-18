import React from "react";

export default function BigLetter(props: any) {
  return (
      <h2 className="text-[3.5rem] leading-[1] font-bold float-left mr-3">
        {props.children}
      </h2>
  );
}
