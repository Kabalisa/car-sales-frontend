import { HeroBanner } from "./heroBanner";
import { Category } from "./category";
import { CarDealer } from "./carDealer";
import { FeaturedCar } from "./featuredCar";

const LandingPageComponent = () => {
  const arr = [
    { type: "Used Cars For sale", number: "16492" },
    { type: "New Cars", number: "1009" },
    { type: "Motorcycles", number: "209" },
    { type: "Heavy Vehicles", number: "209" },
    { type: "Auto accessories & parts", number: "209" },
    { type: "Vehicle Leasing", number: "209" },
  ];

  return (
    <main className="md:container pt-6">
      <HeroBanner />
      <section className="mt-1 md:flex md:flex-row md:justify-center md:flex-wrap md:mt-5">
        {arr.map((item, index) => (
          <Category key={index} category={item} />
        ))}
      </section>
      <section className="pl-4">
        <CarDealer />
      </section>
      <section className="pl-4">
        <FeaturedCar />
      </section>
    </main>
  );
};

export { LandingPageComponent };
