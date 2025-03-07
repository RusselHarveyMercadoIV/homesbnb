import Navigation from "@/components/navigation";

export default function BookRequest() {
  return (
    <>
      <Navigation />
      <main className="relative flex flex-col gap-6 w-[1200px] mx-auto justify-center items-center my-20 mx-20">
        <div className="w-[1100px] mx-auto h-full ">
          <h1 className="font-[600] text-3xl">Request to book</h1>
        </div>
      </main>
    </>
  );
}
