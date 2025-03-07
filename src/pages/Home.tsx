import Navigation from "@/components/navigation";
import ReserveCard from "@/components/reserveCard";
import { useLocation } from "react-router";
import { data } from "./App";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AirVent,
  ShowerHead,
  Gamepad,
  Coffee,
  Utensils,
  FireExtinguisher,
  Dumbbell,
  UtensilsCrossed,
  WashingMachine,
  Calendar,
  Refrigerator,
  Sofa,
  ParkingSquare,
  Flower,
  Waves,
  AlertCircle,
  Wifi,
} from "lucide-react";

// Define types
type AmenityIcon = {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
};

type AmenityIcons = Record<string, AmenityIcon>;

const amenityIcons: AmenityIcons = {
  aircon: { icon: AirVent, label: "Air Conditioning" },
  bidet: { icon: ShowerHead, label: "Bidet" },
  playroom: { icon: Gamepad, label: "Playroom" },
  coffeeMaker: { icon: Coffee, label: "Coffee Maker" },
  diningTable: { icon: Utensils, label: "Dining Table" },
  FireExtinguisher: { icon: FireExtinguisher, label: "Fire Extinguisher" },
  gym: { icon: Dumbbell, label: "Gym" },
  kitchenette: { icon: UtensilsCrossed, label: "Kitchenette" },
  kitchen: { icon: UtensilsCrossed, label: "Kitchen" },
  laundromatNearby: { icon: WashingMachine, label: "Laundromat Nearby" },
  longTermStays: { icon: Calendar, label: "Long Term Stays" },
  miniFridge: { icon: Refrigerator, label: "Mini Fridge" },
  outdoorFurniture: { icon: Sofa, label: "Outdoor Furniture" },
  paidParkingOnPremisis: {
    icon: ParkingSquare,
    label: "Paid Parking On Premises",
  },
  freeParkingOnPremisis: {
    icon: ParkingSquare,
    label: "Free Parking On Premises",
  },
  privatePatioOrBalcony: { icon: Flower, label: "Private Patio or Balcony" },
  publicPool: { icon: Waves, label: "Public Pool" },
  smokeAlarm: { icon: AlertCircle, label: "Smoke Alarm" },
  wifi: { icon: Wifi, label: "Wi-Fi" },
};

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

  const amenitiesLength = Object.values(currentData?.amenities || {}).filter(
    Boolean
  ).length;

  console.log("id >> ", id);

  return (
    <>
      <Navigation />
      <main className="relative flex flex-col gap-6 w-[1200px] mx-auto justify-center items-center my-20 mx-20">
        <h1 className="font-[600] text-4xl">{name}</h1>
        {/* <button className="absolute right-10 top-4 cursor-pointer">
          share
        </button> */}
        <div className="grid grid-cols-2 w-[1200px] h-[600px] gap-2 rounded-xl overflow-hidden">
          {/* First image: rounded top-left and bottom-left */}
          <img
            src={currentData?.images[0]}
            loading="eager"
            className="w-full object-cover h-[600px] rounded-tl-xl rounded-bl-xl col-span-1"
          />
          <div className="w-full h-[600px] gap-2 grid grid-cols-2 grid-rows-2">
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
                  loading="eager"
                  className={`h-full w-full object-cover ${borderClass}`}
                />
              );
            })}
          </div>
        </div>
        <div className="relative flex w-full justify-between">
          <div className="flex flex-col gap-10 pr-25">
            <div>
              <h2 className="font-[600] text-2xl">{location}</h2>
              <p>
                {currentData?.guests} guests{" "}
                <span className="text-slate-300">|</span> 1 bed{" "}
                <span className="text-slate-300">|</span> 1 bath
              </p>
            </div>
            <section className="flex flex-col gap-2">
              <h2 className="font-[600] text-2xl">Description</h2>
              <p>{currentData?.description}</p>
            </section>
            <div className="border border-1 border-[#dee1e6]" />
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-[600]">What this place offers</h2>
              <div className="flex flex-col gap-6 w-[550px]">
                <ul className="grid grid-cols-2 text-lg text-slate-800">
                  {Object.entries(currentData?.amenities || {})
                    .filter(([_, value]) => value)
                    .slice(0, 9)
                    .map(([item]) => {
                      const { icon: Icon, label } = amenityIcons[item] || {
                        icon: null,
                        label: item,
                      };
                      return (
                        <li key={item} className="flex items-center gap-2 mt-4">
                          {Icon && <Icon size={20} />} <span>{label}</span>{" "}
                        </li>
                      );
                    })}
                </ul>
                {amenitiesLength > 10 && (
                  <Dialog>
                    <DialogTrigger className="w-fit">
                      <Button
                        className="w-fit cursor-pointer px-8 py-6 text-md"
                        variant={"outline"}
                      >
                        Show all {amenitiesLength} amenities
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>All Available Amenities</DialogTitle>
                        <DialogDescription>
                          {Object.entries(currentData?.amenities || {})
                            .filter(([_, value]) => value)
                            .map(([item]) => {
                              const { icon: Icon, label } = amenityIcons[
                                item
                              ] || {
                                icon: null,
                                label: item,
                              };
                              return (
                                <li
                                  key={item}
                                  className="flex items-center gap-2 mt-4"
                                >
                                  {Icon && <Icon size={20} />}{" "}
                                  <span>{label}</span>{" "}
                                </li>
                              );
                            })}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </section>
            <div className="border border-1 border-[#dee1e6]" />
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-[600]">Where you'll sleep</h2>
              <Carousel className="w-full max-w-xs">
                <CarouselContent className="rounded-lg">
                  {currentData?.bedroomImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div>
                        <Card className="p-0 rounded-lg">
                          <CardContent className="rounded-lg flex aspect-square items-center justify-center h-[500px] p-0 m-0">
                            <img
                              src={img}
                              alt="bedroom-img"
                              className="rounded-lg w-full h-[500px] object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="cursor-pointer" />
                <CarouselNext className="cursor-pointer" />
              </Carousel>
            </section>
          </div>
          <ReserveCard price={price} from={from} to={to} id={id} />
        </div>
      </main>
    </>
  );
}
