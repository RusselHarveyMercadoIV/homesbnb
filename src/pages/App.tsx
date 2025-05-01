import Navigation from "../components/navigation";
import PreviewCard from "../components/previewCard";
import { data } from "../constants/mock";

function App() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col gap-10 justify-center items-center px-20 my-20">
        {/* <Trending /> */}
        <div className="flex flex-col h-[40rem] justify-center items-center">
          <div className="flex gap-18 px-20 ">
            {data.map((item) => (
              <PreviewCard
                key={item.id}
                id={item.id}
                price={item.price}
                name={item.name}
                location={item.location}
                from={item.from}
                to={item.to}
                image={item.coverImage}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
