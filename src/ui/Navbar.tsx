import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Bell, PanelBottomClose, PencilLine, Settings } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (  
    <>
      <nav className="col-[1/-1] bg-[#1f2124] border-none p-4 flex justify-around items-center z-50">
        <div className="flex justify-between gap-4 items-center">
          <PencilLine
            strokeWidth={2}
            className="bg-brand rounded-lg w-10 p-[2px] h-8 bold"
          />
          <Input placeholder="Search..." className="bg-bar text-wh border-none h-9" />
        </div>
        <div className="invisible md:visible max-sm:hidden md:flex items-center space-x-4">
          <Link to="/" className="text-wh">
            Search
          </Link>
          <Link to="/" className="text-wh">
            Page
          </Link>
          <Link to="/" className="text-wh">
            My Network
          </Link>
          <Link to="/" className="text-wh">
            Account
          </Link>
        </div>
        <div className="flex max-md:hidden justify-around gap-2 items-center">
          <PanelBottomClose color="white" strokeWidth={1.5} />
          <Settings color="white" strokeWidth={1.5} />
          <Bell color="white" strokeWidth={1.5} />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <button className="md:hidden text-wh" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full bg-[#1f2124] p-4 transform ${
          isSidebarOpen ? "slate-8-0" : "slate-8-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button className="text-wh mb-4" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-4 overflow-hidden">
          <div className="justify-around flex-col gap-2 items-center">
            <DropdownMenu >
              <DropdownMenuTrigger>
                {" "}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1f2124]/90 md:hidden flex justify-center focus: items-center object-cover ms-auto">
                <PanelBottomClose color="white" strokeWidth={1.5} />
                <Settings color="white" strokeWidth={1.5} />
                <Bell color="white" strokeWidth={1.5} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to="/" className="text-wh" onClick={toggleSidebar}>
            Search
          </Link>
          <Link to="/" className="text-wh" onClick={toggleSidebar}>
            Page
          </Link>
          <Link to="/" className="text-wh" onClick={toggleSidebar}>
            My Network
          </Link>
          <Link to="/" className="text-wh" onClick={toggleSidebar}>
            Account
          </Link>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded"
            onClick={toggleSidebar}
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
