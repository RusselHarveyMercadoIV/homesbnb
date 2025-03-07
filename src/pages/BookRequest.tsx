import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { data } from "./App";
import { useLocation, useNavigate, useParams } from "react-router";

export default function BookRequest() {
  const params = useParams();
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const { nights } = (routeLocation.state as { nights: number }) || {
    nights: 0,
  };

  const currentData = data.find((item) => item.id.toString() === params.id);
  const price = currentData?.price;

  const total = price ? price * nights : 0;

  return (
    <>
      <Navigation />
      <main className="relative flex flex-col gap-6 w-[1200px] mx-auto my-20">
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
            <div className="mt-4">
              <h2 className="font-[500] text-xl">Your trip</h2>
              <div className="mt-2 flex justify-between items-center">
                <span>Dates: Mar 16–21</span>
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

            {/* Login/Sign-Up Form */}
            <div className="mt-6">
              <h2 className="font-[500] text-xl">Log in or sign up to book</h2>
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
                We'll call or text to confirm your number. Standard message and
                data rates apply.{" "}
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
          </div>

          {/* Right Section: Property and Price Details */}
          <div className="w-1/3">
            <div className=" border p-4 rounded-lg">
              <div className="flex justify-center  gap-5 ">
                <img
                  src={currentData?.coverImage}
                  alt="cover"
                  className="rounded-lg object-cover h-[100px] w-[200px]"
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
