import Navigation from "@/components/Navigation";
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
  laundromatNearby: { icon: WashingMachine, label: "Laundromat Nearby" },
  longTermStays: { icon: Calendar, label: "Long Term Stays" },
  miniFridge: { icon: Refrigerator, label: "Mini Fridge" },
  outdoorFurniture: { icon: Sofa, label: "Outdoor Furniture" },
  padParkingOnPremisis: {
    icon: ParkingSquare,
    label: "Paid Parking On Premises",
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

  return (
    <>
      <Navigation />
      <main className="relative flex flex-col gap-6 w-[1200px] mx-auto justify-center items-center my-20 mx-20">
        <h1 className="font-[600] text-4xl">{name}</h1>
        {/* <button className="absolute right-10 top-4 cursor-pointer">
          share
        </button> */}
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
          <div className="flex flex-col gap-10 pr-25">
            <div>
              <h2 className="font-[600] text-2xl">{location}</h2>
              <p>
                2 guests <span className="text-slate-300">|</span> Studio{" "}
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
                <Button
                  className="w-fit cursor-pointer px-8 py-6 text-md"
                  variant={"outline"}
                >
                  Show all{" "}
                  {
                    Object.values(currentData?.amenities || {}).filter(Boolean)
                      .length
                  }{" "}
                  amenities
                </Button>
              </div>
            </section>
            <div className="border border-1 border-[#dee1e6]" />
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-[600]">Where you'll sleep</h2>
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </section>
          </div>
          <ReserveCard price={price} from={from} to={to} />
        </div>
      </main>
    </>
  );
}
