import Navigation from "../components/Navigation";
import PreviewCard from "../components/PreviewCard";
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
    description: "",
    coverImage: COVER1,
    images: [image11, image12, image13, image14, image15, image16, image17],
  },
  {
    id: 2,
    price: 1000,
    name: "Guest House with Terrace and Private Parking",
    location: "Naval, Eastern Visayas",
    from: "2025-03-05",
    to: 2,
    description: "",
    coverImage: COVER2,
    images: [],
  },
  {
    id: 3,
    price: 1329,
    name: "Nice Condo Unit with 3 Bedrooms",
    location: "Cebu City, Central Visayas",
    from: "2025-03-05",
    to: 4,
    description: "",
    coverImage: COVER3,
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
