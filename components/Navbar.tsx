import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import { link } from "fs";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};

  return (
    <nav>
      <div className="flexBetween navbar">
        <div className="flex1 flexStart gap-10">
          <Link href="/">
            <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
          </Link>

          <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flexCenter gap-4">
          {session ? (
            <>
              UserPhoto
              <Link href="/create-project">Share Work</Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;