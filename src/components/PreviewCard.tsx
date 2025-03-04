import { useNavigate } from "react-router";

export default function PreviewCard() {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate("/home");
  };

  return (
    <div
      onClick={handlePreviewClick}
      className="flex flex-col gap-2 w-[400px] h-[500px] text-lg text-neutral-700 cursor-pointer"
    >
      <div className="w-full h-[70%] bg-slate-200 rounded-xl"></div>
      <div className="flex justify-between">
        <h2 className="font-bold">Cebu City, Philippines</h2>
        <p>4.91</p>
      </div>
      <p>Nearby</p>
      <p>March 29 - Apr 3</p>
      <h3 className="font-bold">P 2,265 night</h3>
    </div>
  );
}
