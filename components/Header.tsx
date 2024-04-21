import Image from "next/image";
import LOGO from "./logos/DominateLogo";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center justify-center gap-8">
        <LOGO />
        {/* <Image
          alt="logo"
          width={200}
          height={200}
          src="dominate-twitter.svg"
        /> */}
        <h1 className="text-4xl">Dominate Twitter </h1>
      </div>
      {/* <h1 className="sr-only">Supabase and Next.js Starter Template</h1> */}
      <p className="mx-auto max-w-xl text-3xl text-center lg:text-4xl !leading-tight">
        The fastest way to grow in twitter and career.
      </p>
      <div className="bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8 p-[1px] w-full" />
    </div>
  );
}
