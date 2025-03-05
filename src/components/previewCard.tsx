import { useNavigate } from "react-router";
import { format, addDays } from "date-fns";

type PreviewCardType = {
  id: number;
  price: number;
  name: string;
  location: string;
  from: string;
  to: number;
  image: string;
};

export default function PreviewCard({
  id,
  price,
  name,
  location,
  from,
  to,
  image,
}: PreviewCardType) {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate("/home", { state: { id, price, name, location, from, to } });
  };

  const schedule = `${format(new Date(from), "LLL dd")} - ${format(
    addDays(new Date(), to),
    "dd"
  )}`;

  return (
    <div
      onClick={handlePreviewClick}
      className="flex flex-col gap-2 w-[350px] h-[450px] text-lg text-neutral-700 cursor-pointer"
    >
      <div className="w-full h-[70%] bg-slate-200 rounded-xl">
        <img
          src={image}
          alt="cover"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold">{location}</h2>
        <p>4.91</p>
      </div>
      <p>Nearby</p>
      <p>{schedule}</p>
      <h3 className="font-bold">₱ {price} night</h3>
    </div>
  );
}
