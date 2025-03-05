import Navigation from "../components/Navigation";
import PreviewCard from "../components/PreviewCard";
// import { Input } from "@/components/ui/input";

function App() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col gap-10 justify-center items-center px-20 my-20">
        {/* <Trending /> */}
        <div className="flex flex-col h-[40rem] justify-center items-center">
          <div className="flex gap-15 px-20 ">
            <PreviewCard price={2265} />
            <PreviewCard price={1862} />
            <PreviewCard price={1665} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
