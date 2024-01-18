interface MyProp {
  children?: React.ReactNode;
}

export default function SyntaxHighlighterInline(props: any) {
  return (
    <span>
      <div
        className="px-[0.15rem] inline whitespace-pre-wrap break-words text-blue-800 bg-gray-200 text-[0.9rem] sm:text-[0.95rem] font-code tracking-tighter"
        onClick={() => console.log(props)}
      >
        {props.children}
      </div>
    </span>
  );
}
