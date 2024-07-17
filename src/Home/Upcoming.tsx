import Card from "../ui/Card";
export default function Upcoming() {
  return (
    <div className="py-5">
      <p className="text-slate-100 text-3xl font-semibold text-start">Upcoming Visits</p>

      <div className="flex flex-wrap gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
