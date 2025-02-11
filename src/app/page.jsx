"use client"
import Image from "next/image";
import { useAppContext } from "@/context/ContextProviedr";
import { redirect } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const { user } = useAppContext()
  // if (!user) {
  //   return redirect("/register")
  // }
  return (
    <div className="screen flex center">
      <main className="col center gap-8 w-1/2">
        <Image src={"/images/repostly-logo.svg"} width={250} height={250} alt="repostly logo" className="w-60 h-60" />

        <h1 className="text-3xl">Welcome to Repostly</h1>
        <p className="text-xl text-blue-500">This app is under construction</p>
        <div className="w-1/2 row justify-evenly  ">
          <Link href={"/login"} prefetch={true}>
            <button className="border border-gray-600 rounded-lg hover:bg-slate-200 text-lg px-3 py-2">Login</button>
          </Link>
          <Link href={"/register"} prefetch={true}>
            <button className="border border-gray-600 rounded-lg hover:bg-slate-200 text-lg px-3 py-2">Register</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

