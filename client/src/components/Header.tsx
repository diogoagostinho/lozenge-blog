import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const currentPath = useLocation().pathname;
  return (
    <Navbar className="flex align-middle items-center content-center bg-white dark:bg-black">
      <Link to="/" className="text-sm sm:text-xl font-semibold dark:text-white">
        <p className="text-black dark:text-white text-2xl md:text-3xl font-bold">
          lozenge
        </p>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden md:inline"
        />
      </form>
      <Button className="md:hidden w-12 h-10" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button outline gradientDuoTone="pinkToOrange">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>{" "}
      <Navbar.Collapse>
        <Navbar.Link active={currentPath === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={currentPath === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={currentPath === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
