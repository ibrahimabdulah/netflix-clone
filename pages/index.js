import Head from "next/head";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { FcDownload } from "react-icons/Fc";
import { PlusSmallIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix - Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white bg-black text-center">
        <header className="bg-white h-28 flex items-center justify-center space-x-16 px-12">
          <p className="border bg-red-600 text-white rounded-xl w-16">NEW!</p>
          <p className="w-14 text-sm text-black">
            Plans now start at{" "}
            <span className="font-bold text-base">$5.99.</span>
          </p>
          <Link href="">
            <div className="text-[#1d63c4] flex font-bold">
              <p>Learn More</p>
              <ChevronRightIcon className="w-6" />
            </div>
          </Link>
        </header>
        <div className="bg-[url('https://rb.gy/dbxdov')] bg-cover">
          <nav className="flex justify-between pt-12 px-12">
            <Link href="/">
              <img
                src="https://rb.gy/ulxxee"
                alt="Netflix Logo"
                className="h-8"
              />
            </Link>
            <section className="flex space-x-4">
              <Link href="">
                <section className="flex justify-around border border-white w-20 h-8 rounded-md">
                  <GlobeAltIcon className="w-5" />
                  <ChevronDownIcon className="w-5" />
                </section>
              </Link>
              <Link href="/login">
                <button className="bg-red-600 h-8 w-20 rounded-md">
                  Sign In
                </button>
              </Link>
            </section>
          </nav>
          <section className="px-12 pt-12">
            <h1 className="text-5xl font-bold">
              Unlimited movies, TV shows, and more.
            </h1>
            <p className="pt-4">Watch anywhere. Cancel anytime.</p>
            <p className="pt-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="pt-4 flex flex-col items-center">
              <input
                placeholder="Email address"
                type="email"
                className=" bg-gray-600/50 border border-gray-600 placeholder:text-white pl-3 rounded-lg w-60 h-12"
              />
              <button className="bg-red-600 h-12 w-40 flex items-center justify-center mt-4 rounded-md mb-8">
                Get Started
                <ChevronRightIcon className="w-6" />
              </button>
            </form>
          </section>
        </div>
        <section className="h-4 bg-[#232323]"></section>
        <section className=" pt-12 px-12">
          <h1 className="font-bold text-4xl pb-4">Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
          <img src="https://rb.gy/qjdvyb" alt="TV" className="" />
        </section>
        <section className="h-4 bg-[#232323]"></section>
        <section className=" pt-12 px-12">
          <h1 className="font-bold text-4xl pb-4">Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
          <img src="https://rb.gy/ak4huh" alt="Devices" className="" />
        </section>
        <section className="h-4 bg-[#232323]"></section>
        <section className=" pt-12 px-12">
          <h1 className="font-bold text-4xl pb-4">Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
          <img src="https://rb.gy/em7vto" alt="Kids" className="" />
        </section>
        <section className="h-4 bg-[#232323]"></section>
        <section className=" pt-12 px-12 flex items-center flex-col">
          <h1 className="font-bold text-4xl pb-4">
            Download your shows to watch offline.
          </h1>
          <p>Only available on ad-free plans.</p>
          <img src="https://rb.gy/vacitf" alt="Phone" className="" />
          <div className="flex items-center justify-around border border-gray-500 rounded-xl py-2 space-x-16 px-4 mb-20">
            <div className="flex space-x-4">
              <img
                src="https://rb.gy/3el7nw"
                alt="Stranger Things cover"
                className="w-8"
              />
              <div>
                <h2>Stranger Things</h2>
                <p className="text-[#0071eb] text-sm text-left">
                  Downloading...
                </p>
              </div>
            </div>
            <FcDownload size={30} />
          </div>
        </section>
        <section className="h-4 bg-[#232323]"></section>
        <section className="pt-12">
          <h1 className="text-4xl pb-10">Frequently Asked Questions</h1>
          <div className="asked-questions">
            <h1>What is Netflix?</h1>
            <PlusSmallIcon className="w-10" />
          </div>
          <div className="asked-questions">
            <h1>How much does Netflix cost?</h1>
            <PlusSmallIcon className="w-10" />
          </div>
          <div className="asked-questions">
            <h1>What’s different on an ad-supported plan?</h1>
            <PlusSmallIcon className="w-10" />
          </div>
          <div className="asked-questions">
            <h1>Where can I watch?</h1>
            <PlusSmallIcon className="w-10" />
          </div>
          <div className="asked-questions">
            <h1>How do I cancel?</h1>
            <PlusSmallIcon className="w-10" />
          </div>
          <div className="asked-questions">
            <h1>What can I watch on Netflix?</h1>
            <PlusSmallIcon className="w-10" />
          </div>
          <div className="asked-questions">
            <h1>Is Netflix good for kids?</h1>
            <PlusSmallIcon className="w-10" />
          </div>
        </section>
      </main>
    </>
  );
}
