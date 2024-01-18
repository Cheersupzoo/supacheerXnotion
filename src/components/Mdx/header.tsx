import Link from "next/link";
import Logo from "./logo";

export default function Header() {

  return (
    <div className="text-gray-600 body-font w-5/6 sm:w-2/3 md:max-w-xl ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" legacyBehavior >
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:ml-auto">
            <Logo className="w-32" />
          </a>
        </Link>
        <div className="text-lg sm:text-xl font-light text-gray-500 sm:mx-2 hidden md:block">|</div>
        <div className="text-lg sm:text-xl font-light text-gray-500 md:mr-auto">
          Blog
        </div>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="sm:mr-5 mt-3 sm:mt-0 hover:text-gray-900 cursor-pointer">Home</div>
        </nav> */}
      </div>
    </div>
  );
}
