import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BadgeCheck,
  Home,
  Map,
  SwitchCamera,
  TvMinimalPlay,
  Users,
} from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [hovered, setHovered] = useState("");
  function handleHover(icon) {
    setHovered(icon);
  }
  function handleOut() {
    setHovered(null);
  }
  return (
    <div className="bg-black text-wh py-12 px-10 max-w-72 flex flex-col items-center gap-1">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>ac</AvatarFallback>
      </Avatar>
      <div className="flex gap-2 items-center justify-center">
        <p className="text-2xl font-bold text-slate-100">Name</p>
        <BadgeCheck color="white" fill="blue" strokeWidth={1} />
      </div>
      <div className="flex py-6 pt-3 flex-col gap-3 rounded-lg max-w-60 bg-cover px-4  bg-bg">
        <div className="flex text-[13px] justify-around gap-2 text-md rounded-md items-center">
          <div>
            <p className="text-slate-50">3.7k</p>
            <p className="text-wh">Followers</p>
          </div>
          <div>
            <p className="text-slate-50">3.7k</p>
            <p className="text-wh">Followers</p>
          </div>
          <div>
            <p className="text-slate-50">3.7k</p>
            <p className="text-wh">Followers</p>
          </div>
        </div>
        <div className="w-100 h-6 px-0 -mx-10 rounded-xl  bg-black"></div>{" "}
        <div className="flex flex-col gap-3 px-2">
          <button
            onMouseOver={() => handleHover("ic1")}
            onMouseOut={handleOut}
            className="flex hover:duration-500 gap-3 hover:bg-brand hover:py-0.5 hover:pt-1 pt-1 rounded-sm hover:px-2  hover:text-black"
          >
            <Home
              color={hovered === "ic1" ? "black" : "white"}
              strokeWidth={1.5}
            />
            <p className="">Feed</p>
          </button>
          <button
            onMouseOver={() => handleHover("ic2")}
            onMouseOut={handleOut}
            className="flex hover:duration-500 gap-3 hover:bg-brand hover:py-0.5 hover:pt-1 pt-1 rounded-sm hover:px-2  hover:text-black"
          >
            <Users
              color={hovered === "ic2" ? "black" : "white"}
              strokeWidth={1.5}
            />
            <p>Friends</p>
          </button>{" "}
          <button
            onMouseOver={() => handleHover("ic3")}
            onMouseOut={handleOut}
            className="flex hover:duration-500 gap-3 hover:bg-brand hover:py-0.5 hover:pt-1 pt-1 rounded-sm hover:px-2  hover:text-black"
          >
            <SwitchCamera
              color={hovered === "ic3" ? "black" : "white"}
              strokeWidth={1.5}
            />
            <p>Photos</p>
          </button>{" "}
          <button
            onMouseOver={() => handleHover("ic4")}
            onMouseOut={handleOut}
            className="flex hover:duration-500 gap-3 hover:bg-brand hover:py-0.5 hover:pt-1 pt-1 rounded-sm hover:px-2  hover:text-black"
          >
            <TvMinimalPlay
              color={hovered === "ic4" ? "black" : "white"}
              strokeWidth={1.5}
            />
            <p>Videos</p>
          </button>{" "}
          <button
            onMouseOver={() => handleHover("ic5")}
            onMouseOut={handleOut}
            className="flex hover:duration-500 gap-3 hover:bg-brand hover:py-0.5 hover:pt-1 pt-1 rounded-sm hover:px-2  hover:text-black"
          >
            <Map
              color={hovered === "ic5" ? "black" : "white"}
              strokeWidth={1.5}
            />
            <p>Map</p>
          </button>
        </div>
        <div className="h-[0.5px] px-0  rounded-xl  bg-stone-300"></div>{" "}
        <p className="text-start text-sm">Pages you may like</p>
      </div>
    </div>
  );
}

export default Sidebar;
