import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/datepicker-range";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type ReserveCardType = {
  price: number;
};

export default function ReserveCard({ price }: ReserveCardType) {
  const [selectedDays, setSelectedDays] = useState<number>();

  const handleGetDaysInput = (days: number) => {
    setSelectedDays(days);
  };

  const computedPrice = selectedDays && price * selectedDays;

  return (
    <Card className="sticky top-0 right-0 w-[400px] h-[500px] p-8">
      <CardHeader className="flex flex-row gap-2  items-end">
        <h2 className="text-4xl">P {price}</h2>
        <p>night</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-2">
          <p>Check In / Check Out</p>
          <DatePickerWithRange handleSelect={handleGetDaysInput} />
        </div>

        <Button className="text-xl rounded-full py-6 w-full cursor-pointer">
          Reserve
        </Button>
        <p className="text-slate-800">You won't be charged yet</p>

        <div className="flex flex-row justify-between w-full text-lg">
          <p>
            P {price} x {selectedDays} nights
          </p>
          <p>P {computedPrice}</p>
        </div>
        <div className="border w-full" />
        <div className="flex flex-row justify-between w-full text-lg font-bold">
          <p>Total before taxes</p>
          <p>P {computedPrice}</p>
        </div>
      </CardContent>
    </Card>
  );
}
