import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-20 border-t border-gray-200 relative overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <Link href="/">
          <Image
            src="/Reader-logo-dark.svg"
            height={26}
            width={90}
            alt="Reader Logo"
          />
        </Link>
        <div className="flex gap-8 items-center mt-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          <Link href="/terms-&-condition">Terms & Condition</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="flex justify-between items-end w-full mt-20">
          <form action="" className="flex">
            <input
              type="email"
              className="border border-gray-200 text-sm rounded-4xl px-5 py-2"
              placeholder="Enter your email"
            />
            <input
              type="submit"
              value="Submit"
              className="-ml-8 flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-4xl text-sm bg-gray-950 text-white transition-colors"
            />
          </form>
          <p className="text-xs">© 2025 READER, Inc.</p>
        </div>
        <Image
          src="/Reader-logo-dark.svg"
          className="mt-5 opacity-5 -mb-28"
          width={2000}
          height={500}
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
