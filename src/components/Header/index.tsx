import { Burger } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <header className="flex my-5">
        <section className="">
          <div className="flex md:hidden md:justify-start">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
          </div>
        </section>
        <section className="flex text-2xl font-bold">
          <div className="flex text-black md:justify-center lg:justify-start">
            <Link href="/">
              <a className="no-underline">Shimabu IT University</a>
            </Link>
          </div>
        </section>
        <section className="hidden md:flex justify-end ml-auto text-black font-bold text-xl">
          <Link href="/about">
            <a className=" mr-4 text-black no-underline">About</a>
          </Link>
          <Link href="/blog">
            <a className=" mr-4 text-black no-underline">Blog</a>
          </Link>
          <Link href="/portfolio">
            <a className=" mr-4 text-black no-underline">Portfolio</a>
          </Link>
          <Link href="/contact">
            <a className=" mr-4 text-black no-underline">Contact</a>
          </Link>
        </section>
      </header>
    </>
  );
}
