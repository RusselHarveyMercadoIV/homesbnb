import Navigation from "../components/navigation";
import PreviewCard from "../components/previewCard";
import COVER1 from "../assets/images/grand-residence/condo1-4.jpg";
import COVER2 from "../assets/images/naval/naval-1.jfif";
import COVER3 from "../assets/images/tisa/tisabldg-1.jpg";

import image11 from "../assets/images/grand-residence/condo1-1.jpg";
import image12 from "../assets/images/grand-residence/condo1-2.jpg";
import image13 from "../assets/images/grand-residence/condo1-3.jpg";
import image14 from "../assets/images/grand-residence/condo1-4.jfif";
import image15 from "../assets/images/grand-residence/condo1-4.jpg";
import image16 from "../assets/images/grand-residence/condo1-5.jfif";
import image17 from "../assets/images/grand-residence/condo1-6.jfif";

export const data = [
  {
    id: 1,
    price: 1773,
    name: "Furnished Studio Unit w/ Balcony",
    location: "Cebu City, Central Visayas",
    from: "2025-03-05",
    to: 6,
    guests: 2,
    rating: 4.91,
    description:
      "Take a break and unwind at this peaceful oasis at the heart of Cebu City. Its very accessible to IT Park, Cebu Business Park, SM Cebu and to schools like UC Banilad and a short ride to USC Talamban.",
    coverImage: COVER1,
    propertyType: [
      "Entire place",
      "Rental unit",
      "Tropical category",
      "Amazing pools category",
    ],
    amenities: {
      aircon: true,
      bidet: true,
      playroom: true,
      coffeeMaker: true,
      diningTable: true,
      elevator: true,
      FireExtinguisher: true,
      gym: true,
      kitchenette: true,
      laundromatNearby: true,
      longTermStays: true,
      miniFridge: true,
      outdoorFurniture: true,
      paidParkingOnPremisis: true,
      freeParkingOnPremisis: false,
      privatePatioOrBalcony: true,
      publicPool: true,
      smokeAlarm: true,
      wifi: true,
    },
    images: [image11, image12, image13, image14, image15, image16, image17],
  },
  {
    id: 2,
    price: 1000,
    name: "Guest House with Terrace and Private Parking",
    location: "Naval, Eastern Visayas",
    from: "2025-03-05",
    to: 2,
    guests: 4,
    rating: 4.91,
    description:
      "Forget your worries in this spacious and serene space. A perfect home with balcony and wide front yard. Perfect for staycation or long term stay and accessible to cool beaches and even waterfalls. This is a very relaxing place if you want to get away from the city for a vacation.",
    coverImage: COVER2,
    propertyType: ["Entire place", "Home"],
    amenities: {
      aircon: true,
      bidet: false,
      playroom: false,
      coffeeMaker: false,
      diningTable: true,
      elevator: false,
      FireExtinguisher: false,
      gym: false,
      kitchenette: false,
      kitchen: true,
      laundromatNearby: false,
      longTermStays: true,
      miniFridge: false,
      outdoorFurniture: false,
      paidParkingOnPremisis: false,
      freeParkingOnPremisis: true,
      privatePatioOrBalcony: true,
      publicPool: false,
      smokeAlarm: false,
      wifi: true,
    },
    images: [],
  },
  {
    id: 3,
    price: 1329,
    name: "Nice Condo Unit with 3 Bedrooms",
    location: "Cebu City, Central Visayas",
    from: "2025-03-05",
    to: 4,
    guests: 4,
    rating: 4.91,
    description: "",
    coverImage: COVER3,
    propertyType: ["Entire place", "Rental unit"],
    amenities: {
      aircon: true,
      bidet: false,
      playroom: false,
      coffeeMaker: false,
      diningTable: true,
      elevator: true,
      FireExtinguisher: true,
      gym: false,
      kitchenette: false,
      kitchen: true,
      laundromatNearby: true,
      longTermStays: true,
      miniFridge: false,
      outdoorFurniture: false,
      paidParkingOnPremisis: false,
      freeParkingOnPremisis: false,
      privatePatioOrBalcony: false,
      publicPool: false,
      smokeAlarm: true,
      wifi: false,
    },
    images: [],
  },
];

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
