import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-w-full min-h-screen flex flex-col justify-evenly items-center">
      <h1 className="text-3xl uppercase text-theme font-extrabold">Next template</h1>
      <FaHeart className="text-theme h-10 w-10" />
      <Link href={"/page"} className="bg-theme text-2xl text-white p-2 rounded-xl font-main hover:bg-theme-alt">page</Link>
    </section>
  );
}
