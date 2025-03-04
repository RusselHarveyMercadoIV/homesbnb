import "./App.css";
import Navigation from "./components/Navigation";
import PreviewCard from "./components/PreviewCard";
// import { Input } from "@/components/ui/input";

function App() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col gap-10 justify-center items-center px-20 mt-20">
        {/* <div
          id="locator-container"
          className="flex flex-row justify-center items-center w-full h-[750px] shadow-md"
        >
          <div id="map" className="h-full w-full bg-slate-200 rounded-md"></div>
          <div
            id="locate"
            className="flex flex-col justify-center items-center h-full w-full p-5"
          >
            <div className="flex flex-col gap-10 w-[700px]">
              <h2 className="text-4xl text-slate-700 ">Search Destination</h2>
              <Input
                type="destination"
                placeholder="Where to?"
                className="h-[5rem] rounded-xl"
              />
            </div>
          </div>
        </div> */}

        {/* <Trending /> */}
        <div className="flex flex-col h-[50rem] justify-center items-center">
          <div className="flex gap-10 px-20 ">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
