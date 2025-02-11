import { parseISO, format } from "date-fns";

function Card({ post }) {
  const dateObject = parseISO(post.created_at);
  const formattedDate = format(dateObject, "dd/MM/yyyy HH:mm:ss");
  return (
    <div>
      <div className="flex flex-col mb-3 bg-bg w-64 py-2 px-2 rounded-2xl text-slate-50 ">
        <img src={post.image} className="rounded-lg h-52" />
        <p className="text-start text-green-500 text-sm mt-2">
          {formattedDate}
        </p>
        <p className="text-start font-semibold text-lg">{post.name}</p>
        <p className="text-start text-sm text-wh">{post.location}</p>
        <div className="h-[0.5px] px-0 mt-5 text-wh  rounded-xl  bg-stone-300"></div>{" "}
        <button className="self-end mt-2 border text-sm py-0.5 w-1/4 rounded-2xl hover:border-amber-700 border-amber-600">
          Follow
        </button>
      </div>
    </div>
  );
}

export default Card;
