import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Trending() {
  return (
    <div
      id="trending-section"
      className="flex flex-col justify-center items-center gap-10 mt-20 w-full px-20"
    >
      {/* <h2 className="text-5xl font-bold text-slate-800"> Trending</h2> */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-fit my-20 "
      >
        <CarouselContent className="h-[550px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 w-[500px] h-[300px]">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
