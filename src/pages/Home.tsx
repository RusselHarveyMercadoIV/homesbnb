import Navigation from "@/components/Navigation";
import ReserveCard from "@/components/reserveCard";
import { useLocation } from "react-router";
import { data } from "./App";

export default function Home() {
  const routeLocation = useLocation();
  const { id, price, name, location, from, to } = (routeLocation.state as {
    id: number;
    price: number;
    name: string;
    location: string;
    from: string;
    to: number;
  }) || { price: 0, name: "", location: "", schedule: "" };

  const currentData = data.find((item) => item.id === id);

  return (
    <>
      <Navigation />
      <main className="relative flex flex-col gap-6 w-[1200px] mx-auto justify-center items-center my-20 mx-20">
        <h1 className="font-[600] text-4xl">{name}</h1>
        <button className="absolute right-10 top-4 cursor-pointer">
          share
        </button>
        <div className="grid grid-cols-2 w-[1200px] h-[600px] bg-slate-200 rounded-xl overflow-hidden">
          {/* First image: rounded top-left and bottom-left */}
          <img
            src={currentData?.images[0]}
            className="w-full object-cover h-[600px] rounded-tl-xl rounded-bl-xl col-span-1"
          />
          <div className="w-full h-[600px] grid grid-cols-2 grid-rows-2">
            {currentData?.images.slice(1, 5).map((image, index) => {
              let borderClass = "";
              if (index === 1) {
                // Top-right image: rounded top-right corner
                borderClass = "rounded-tr-xl";
              } else if (index === 3) {
                // Bottom-right image: rounded bottom-right corner
                borderClass = "rounded-br-xl";
              }
              return (
                <img
                  key={index}
                  src={image}
                  className={`h-full w-full object-cover ${borderClass}`}
                />
              );
            })}
          </div>
        </div>
        <div className="relative flex w-full justify-between">
          <div className="flex flex-col gap-10 pr-10">
            <div>
              <h2 className="font-[600] text-2xl">{location}</h2>
              <p>
                2 guests <span className="text-slate-300">|</span> Studio{" "}
                <span className="text-slate-300">|</span> 1 bed{" "}
                <span className="text-slate-300">|</span> 1 bath
              </p>
            </div>
            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">About</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                fuga exercitationem cupiditate aut veniam accusantium, enim eum
                iusto perspiciatis, quas quod aliquid est illum unde laudantium
                voluptatem minima deserunt eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci, ut. Delectus ratione
                consectetur dolore ab adipisci tenetur aspernatur aut animi,
                fugit reiciendis? Vitae obcaecati, dolore nisi illum quidem nemo
              </p>
            </section>
          </div>
          <ReserveCard price={price} from={from} to={to} />
        </div>
      </main>
    </>
  );
}
