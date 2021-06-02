import { CarImagesSlider } from "../common";
import styles from "./styles/carDetails.module.scss";

const CarDetailsComponent = () => {
  const images = [
    "/images/car1.jpeg",
    "/images/car2.jpeg",
    "/images/car3.jpeg",
    "/images/car4.jpeg",
    "/images/car5.jpeg",
  ];

  return (
    <main className="md:container">
      <section>
        <CarImagesSlider images={images} />
      </section>
    </main>
  );
};

export { CarDetailsComponent };
