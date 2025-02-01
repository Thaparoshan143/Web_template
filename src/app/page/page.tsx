import Link from "next/link";

export default function Page() {
  return (
    <section className="min-w-full min-h-screen flex flex-col justify-evenly items-center">
      <h1 className="text-theme uppercase text-2xl p-2">Page</h1>
      <Link href={"/"} className="bg-theme text-xl text-white p-2 rounded-xl font-main">home</Link>
    </section>
  );
}
