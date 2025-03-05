import Navigation from "../components/Navigation";
import PreviewCard from "../components/PreviewCard";

function App() {
  const availableScheduleFrom = "2025-03-05";
  const availableScheduleTo = 6;

  return (
    <>
      <Navigation />
      <main className="flex flex-col gap-10 justify-center items-center px-20 my-20">
        {/* <Trending /> */}
        <div className="flex flex-col h-[40rem] justify-center items-center">
          <div className="flex gap-15 px-20 ">
            <PreviewCard
              price={2265}
              name={"Cebu Mountain View"}
              location={"Cebu City, Philippines"}
              from={availableScheduleFrom}
              to={availableScheduleTo}
            />
            <PreviewCard
              price={1862}
              name={"House 2"}
              location={"Cebu City, Philippines"}
              from={availableScheduleFrom}
              to={2}
            />
            <PreviewCard
              price={1665}
              name={"House 3"}
              location={"Cebu City, Philippines"}
              from={availableScheduleFrom}
              to={4}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
