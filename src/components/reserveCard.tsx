import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/datepicker-range";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

type ReserveCardType = {
  price: number;
  from: string;
  to: number;
  id: number;
};

export default function ReserveCard({ price, from, to, id }: ReserveCardType) {
  const [selectedDays, setSelectedDays] = useState<number>();
  const naviagtion = useNavigate();

  const handleGetDaysInput = (days: number) => {
    setSelectedDays(days);
  };

  const handleReserveBtn = () => {
    naviagtion(`/book/${id}`);
  };

  const computedPrice = selectedDays && price * selectedDays;

  return (
    <Card className="sticky top-30 right-0 w-[400px] h-[500px] py-8 px-2">
      <CardHeader className="flex flex-row gap-2  items-end">
        <h2 className="text-4xl">₱ {price}</h2>
        <p>night</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-2">
          <p>Check In / Check Out</p>
          <DatePickerWithRange
            handleSelect={handleGetDaysInput}
            from={from}
            to={to}
          />
          {/* <Select>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select> */}
        </div>

        <Button
          className="text-xl rounded-full py-6 w-full cursor-pointer"
          onClick={handleReserveBtn}
        >
          Reserve
        </Button>
        <p className="text-slate-800">You won't be charged yet</p>

        <div className="flex flex-row justify-between w-full text-lg">
          <p>
            ₱ {price} x {selectedDays} nights
          </p>
          <p>₱ {computedPrice}</p>
        </div>
        <div className="border w-full" />
        <div className="flex flex-row justify-between w-full text-lg font-bold">
          <p>Total before taxes</p>
          <p>₱ {computedPrice}</p>
        </div>
      </CardContent>
    </Card>
  );
}
