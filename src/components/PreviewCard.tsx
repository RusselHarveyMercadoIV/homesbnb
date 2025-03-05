import { useNavigate } from "react-router";
import { format, addDays } from "date-fns";

type PreviewCardType = {
  price: number;
  name: string;
  location: string;
  from: string;
  to: number;
};

export default function PreviewCard({
  price,
  name,
  location,
  from,
  to,
}: PreviewCardType) {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate("/home", { state: { price, name, location, from, to } });
  };

  const schedule = `${format(new Date(from), "LLL dd")} - ${format(
    addDays(new Date(), to),
    "dd"
  )}`;
  return (
    <div
      onClick={handlePreviewClick}
      className="flex flex-col gap-2 w-[400px] h-[500px] text-lg text-neutral-700 cursor-pointer"
    >
      <div className="w-full h-[70%] bg-slate-200 rounded-xl"></div>
      <div className="flex justify-between">
        <h2 className="font-bold">{location}</h2>
        <p>4.91</p>
      </div>
      <p>Nearby</p>
      <p>{schedule}</p>
      <h3 className="font-bold">P {price} night</h3>
    </div>
  );
}
