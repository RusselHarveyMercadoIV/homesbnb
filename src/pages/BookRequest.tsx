import { Button } from "@/components/ui/button";
import { data } from "./App";
import { useLocation, useNavigate, useParams } from "react-router";
import { addDays, format } from "date-fns";
import { useUser } from "@/context/user";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import EVENT from "../assets/icons/event.png";
import GCASH_SOLO from "../assets/icons/gcash-1.png";
import GCASH from "../assets/icons/gcash-2.png";
import MONEY from "../assets/icons/money.png";

export default function BookRequest() {
  const { user } = useUser();
  const params = useParams();
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const { nights } = (routeLocation.state as { nights: number }) || {
    nights: 0,
  };

  const currentData = data.find((item) => item.id.toString() === params.id);

  let schedule: string; // Declare outside if needed in wider scope
  let total: number = 0;
  if (!currentData) {
    schedule = "Data not found";
  } else {
    const price = currentData.price;
    const from = currentData.from;
    const to = currentData.to;

    total = price * to; // Assuming 'nights' is 'to'

    schedule = `${format(new Date(from), "LLL dd")} - ${format(
      addDays(new Date(from), to),
      "dd"
    )}`;
  }

  // Use 'schedule' as needed

  return (
    <>
      <main className="relative flex flex-col gap-6 w-[1100px] mx-auto my-20">
        <h1 className="font-[600] text-3xl">Request to book</h1>
        {/* <p className="text-gray-600">
          This is a rare find. 's place is usually booked.
        </p> */}
        <Button
          variant={"outline"}
          className="w-[150px] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <div className="flex gap-14 mt-1">
          {/* Left Section: Booking Form */}
          <div className="w-1/2">
            {/* Trip Details */}
            <Separator className="my-5" />
            <div className="mt-4">
              <h2 className="font-[500] text-xl">Your trip</h2>
              <div className="mt-2 flex justify-between items-center">
                <span>Dates: {schedule}</span>
                {/* <a href="#" className="text-blue-600">
                  Edit
                </a> */}
              </div>
              {/* <div className="mt-2 flex justify-between items-center">
                <span>Guests: 1 guest</span>
                <a href="#" className="text-blue-600">
                  Edit
                </a>
              </div> */}
            </div>
            <Separator className="my-10" />
            {/* Login/Sign-Up Form */}
            {!user ? (
              <div className="mt-6">
                <h2 className="font-[500] text-xl">
                  Log in or sign up to book
                </h2>
                <div className="mt-4">
                  <label htmlFor="country-code" className="block">
                    Country code
                  </label>
                  <select
                    id="country-code"
                    className="border p-2 rounded w-full cursor-pointer"
                  >
                    <option>Philippines (+63)</option>
                    {/* Add more options as needed */}
                    <option>United States (+1)</option>
                    <option>United Kingdom (+44)</option>
                  </select>
                </div>
                <div className="mt-2">
                  <label htmlFor="phone-number" className="block">
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone-number"
                    className="border p-2 w-full rounded"
                    placeholder="Enter your phone number"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  We'll call or text to confirm your number. Standard message
                  and data rates apply.{" "}
                  <a href="#" className="text-blue-600">
                    Privacy Policy
                  </a>
                </p>
                <Button className="px-4 py-2 mt-4 w-full cursor-pointer">
                  Continue
                </Button>

                {/* Alternative Login Options */}
                <div className="mt-4">
                  <p className="text-center text-gray-600">or</p>
                  <button className="border p-2 w-full mt-2 rounded cursor-pointer">
                    Continue with Facebook
                  </button>
                  <button className="border p-2 w-full mt-2 rounded cursor-pointer">
                    Continue with Google
                  </button>
                  <button className="border p-2 w-full mt-2 rounded cursor-pointer">
                    Continue with Apple
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center h-[40px]">
                    <h2 className="font-[500] text-xl">Pay with</h2>
                    <img src={GCASH} alt="gcash-1" className="w-[100px]" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full text-lg h-[50px] cursor-pointer">
                      <SelectValue defaultValue="gcash" placeholder={"Gcash"} />
                    </SelectTrigger>
                    <SelectContent className="py-4 px-2">
                      <SelectItem
                        value="gcash"
                        className="cursor-pointer text-lg"
                      >
                        <img
                          src={GCASH_SOLO}
                          className="w-[30px] h-[30px]"
                          alt="gcash"
                        />
                        <p>GCash</p>
                      </SelectItem>
                      <SelectItem
                        value="cash"
                        className="cursor-pointer text-lg mt-2"
                      >
                        <img
                          src={MONEY}
                          className="w-[30px] h-[30px] opacity-30"
                          alt="cash"
                        />
                        <p>Cash</p>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator className="my-10" />
                <div className="flex flex-col gap-5">
                  <h2 className="font-[500] text-xl">Cancellation Policy</h2>
                  <p>
                    Partial refund: Get back every night that remains 24 hours
                    after you cancel. No refund of nights you spent or the
                    service fee.
                  </p>
                </div>
                <Separator className="my-10" />
                <div className="flex flex-col gap-5">
                  <h2 className="font-[500] text-xl">Ground rules</h2>
                  <p>
                    We ask every guest to remember a few simple things about
                    what makes a great guest.
                    <ul className="list-disc ml-5 mt-4 text-neutral-600">
                      <li> Follow the house rules</li>
                      <li> Treat your Host’s home like your own</li>
                    </ul>
                  </p>
                </div>
                <Separator className="my-10" />
                <div className="flex items-center gap-5">
                  <img src={EVENT} alt="event" className="w-[30px] h-[30px]" />
                  <p>
                    <strong>The host will need to accept this request.</strong>{" "}
                    You'll pay now, but will get a full refund if your
                    reservation isn't confirmed within 24 hours.
                  </p>
                </div>
                <Separator className="my-10" />
                <div className="flex flex-col gap-10">
                  <i className="text-sm text-neutral-500">
                    By selecting the button below, I agree to the Host's House
                    Rules, Ground rules for guests, Homebnb's Rebooking and
                    Refund Policy, and that Homebnb can charge my payment method
                    if I’m responsible for damage.
                  </i>
                  <Button className="w-[250px] h-[65px] text-xl cursor-pointer">
                    Request to book
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Right Section: Property and Price Details */}
          <div className="w-[450px]">
            <div className=" border p-8 rounded-lg">
              <div className="flex justify-center  gap-5 ">
                <img
                  src={currentData?.coverImage}
                  alt="cover"
                  className="rounded-lg object-cover h-[100px] w-[170px]"
                />
                <div>
                  <h2 className="font-[500] text-xl">{currentData?.name}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="ml-2">{currentData?.rating}</span>
                    <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded">
                      Superhost
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Details */}
              <div className="mt-4">
                <h3 className="font-[500] text-lg">Price details</h3>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>
                      {currentData?.price} x {nights} nights
                    </span>
                    <span>{total}</span>
                  </div>
                  {/* <div className="flex justify-between mt-1">
                    <span>Long stay discount</span>
                    <span>-₱792.00</span>
                  </div> */}
                  {/* <div className="flex justify-between mt-1">
                    <span>Airbnb service fee</span>
                    <span>₱2,525.67</span>
                  </div> */}
                  <div className="flex justify-between mt-2 font-[600]">
                    <span>Total (PHP)</span>
                    <span>₱{total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
