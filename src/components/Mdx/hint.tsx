interface MyProp {
  children?: any;
}

interface HintProp {
  children?: any;
  bgColor?: string;
  borderColor?: string;
  icon: () => any;
}

function Hint({ children, bgColor, borderColor, icon }: HintProp) {
  return (
    <div className="relative">
      <div
        className={
          " mt-8 border-2 rounded-xl text-[var(--text-color)] pr-1 " + borderColor
        }
      >
        <div
          className={"float-left mt-3 mr-2 rounded-r-md leading-[1]  p-[0.35rem] " + bgColor}
        >
          {icon()}
        </div>
        <div className="px-2 py-4">{children}</div>
      </div>
    </div>
  );
}

function hint_tip({ children }: MyProp) {
  return (
    <Hint
      bgColor="bg-blue-500"
      borderColor="border-blue-500"
      icon={TipIcon}
    >{children}</Hint>
  );
}

function hint_warn({ children }: MyProp) {
  return (
    <Hint
      bgColor="bg-yellow-400"
      borderColor="border-yellow-400"
      icon={WarningIcon}
    >{children}</Hint>
  );
}

function hint_error({ children }: MyProp) {
  return (
    <Hint
      bgColor="bg-red-500"
      borderColor="border-red-500"
      icon={ErrorIcon}
    >{children}</Hint>
  );
}

function TipIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="20"
      height="20"
    >
      <path fill="none" d="M0,0h32v32H0V0z" />
      <path
        d="M13.4,2.8h5.3v5.3h-5.3V2.8z M13.4,13.4h5.3v15.9h-5.3V13.4z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="20"
      height="20"
    >
      <path fill="none" d="M0,0h32v32H0V0z" />
      <path
        d="M18.6,29.2h-5.3v-5.3h5.3V29.2z M18.6,18.6h-5.3V2.8h5.3V18.6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="20"
      height="20"
    >
      <path fill="none" d="M0,0h32v32H0V0z" />
      <path
        d="M18.6,29.2h-5.3v-5.3h5.3V29.2z M18.6,18.6h-5.3V2.8h5.3V18.6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  );
}

function hint_big({ children }: MyProp) {
  return <div className="px-6 py-8 mt-5 text-2xl text-gray-500">{children}</div>;
}

export { hint_tip, hint_warn, hint_error,hint_big };
