import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contacto", text: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-gray-500 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center " href="/">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {/*Creacion de navbar de forma dinamica */}

      {navItems.map((navItems) => (
        <ActiveLink key={navItems.path} {...navItems} />
      ))}
    </nav>
  );
};
