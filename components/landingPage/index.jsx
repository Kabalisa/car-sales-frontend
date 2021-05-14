import { HeroBanner } from "./heroBanner";
import { Category } from "./category";
import { CarDealer } from "./carDealer";

const LandingPageComponent = () => {
  const arr = [
    "Used Cars For sale(16492)",
    "New Cars(1009)",
    "Motorcycles(209)",
    "Heavy Vehicles(209)",
    "Auto accessories & parts(209)",
    "Vehicle Leasing(209)",
  ];

  return (
    <main className="md:container pt-6">
      <HeroBanner />
      <section className="mt-1">
        {arr.map((item, index) => (
          <Category key={index} category={item} />
        ))}
      </section>
      <section className="pl-4">
        <CarDealer />
      </section>
    </main>
  );
};

export { LandingPageComponent };
