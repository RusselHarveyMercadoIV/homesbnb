import Navigation from "@/components/Navigation";
import ReserveCard from "@/components/reserveCard";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative flex flex-col gap-6 w-[1200px] mx-auto justify-center items-center my-20 mx-20">
        <h1 className="font-[600] text-4xl">Cebu's Mountain View</h1>
        <button className="absolute right-10 top-4 cursor-pointer">
          share
        </button>
        <div className="w-[1200px] h-[600px] bg-slate-200 rounded-xl"></div>
        <div className="relative flex w-full justify-between">
          <div className="flex flex-col gap-10 pr-10">
            <div>
              <h2 className="font-[600] text-2xl">Cebu City, Philippines</h2>
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
          <ReserveCard price={"1965"} />
        </div>
      </main>
    </>
  );
}
