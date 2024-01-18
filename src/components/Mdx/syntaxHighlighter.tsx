import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface MyProp {
  children?: any;
}

export default function MySyntaxHighlighter({ children }: MyProp) {
  return (
    <div>
      <div className="flex flex-col my-4">
        <div className="flex ">
          {langConvert(children.props.className) !== "" && (
            <div className="py-1 px-5 bg-[#2f2f2f] rounded-t-2xl text-gray-200 capitalize font-bold text-sm">
              {langConvert(children.props.className)}
            </div>
          )}
        </div>
        <div className="py-1 px-1 bg-[#2f2f2f] mb-4 ">
          <SyntaxHighlighter
            language={langConvert(children.props.className)}
            style={materialDark}
            // wrapLongLines
            showLineNumbers={!(langConvert(children.props.className) ==="bash")}
            lineProps={(lineNumber) => {
              const style: any = {
                padding: "0px",
                paddingLeft: "20px",
                paddingRight: "20px",
              };
              // if (lineNumber % 2 === 0) {
              //   style.backgroundColor = "#4e4f4f";
              // }

              style.backgroundColor = "#2f2f2f";
              return { style };
            }}
            customStyle={{
              // backgroundColor: "rgb(40, 43, 46)",
              padding: "0px",
              paddingLeft:"20px",
              paddingRight:"20px",
              fontSize: "0.8rem",
            }}
            // lineNumberContainerStyle={{padding:"30px"}}
          >{`${children.props.children.trim()}`}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

function langConvert(fromLang: string): string {
  return (fromLang ?? "").includes('language-') ? fromLang.replace('language-', '') : "";
}
