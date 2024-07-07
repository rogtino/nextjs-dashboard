import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { lusitana } from "./ui/fonts";

export default function Page() {
  return (
    <main className="flex flex-col p-6 min-h-screen">
      <div className="flex items-end p-4 h-20 bg-blue-500 rounded-lg md:h-52 shrink-0">
        <AcmeLogo />
      </div>
      <div className="flex flex-col gap-4 mt-4 md:flex-row grow">
        <div className="flex flex-col gap-6 justify-center py-10 px-6 bg-gray-50 rounded-lg md:px-20 md:w-2/5">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex gap-5 items-center self-start py-3 px-6 text-sm font-medium text-white bg-blue-500 rounded-lg transition-colors md:text-base hover:bg-blue-400"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex justify-center items-center p-6 md:py-12 md:px-28 md:w-3/5">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
