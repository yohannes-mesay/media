import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BadgeCheck,
  Home,
  Map,
  SwitchCamera,
  TvMinimalPlay,
  Users,
} from "lucide-react";

function Sidebar() {
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
          <div className="flex gap-3 ">
            <Home />
            <p>Feed</p>
          </div>
          <div className="flex gap-3">
            <Users color="white" strokeWidth={1.5} />
            <p>Friends</p>
          </div>{" "}
          <div className="flex gap-3">
            <SwitchCamera color="white" strokeWidth={1.5} />
            <p>Photos</p>
          </div>{" "}
          <div className="flex gap-3">
            <TvMinimalPlay color="white" strokeWidth={1.5} />
            <p>Videos</p>
          </div>{" "}
          <div className="flex gap-3">
            <Map color="white" strokeWidth={1.5} />
            <p>Map</p>
          </div>
        </div>
        <div className="h-[0.5px] px-0  rounded-xl  bg-stone-300"></div>{" "}
        <p className="text-start text-sm">Pages you may like</p>
      </div>
    </div>
  );
}

export default Sidebar;
