import { Advertise } from "../common";
import { ResultCategory } from "./resultCategory";
import { Sort, Filter } from "./sortFilter";
import styles from "./styles/carList.module.scss";

const CarListComponent = () => {
  return (
    <main className="md:container pt-6">
      <section className="px-4">
        <Advertise />
        <h1 className={styles.title}>
          Buy and sell Motocycles online in Rwanda
        </h1>
        <div className={styles.subtitle}>
          Brand new & used Bentley cars for sale in Rwanda - Sell your 2nd hand
          Bentley car on Best Cars & reach 1.6 million buyers today
        </div>
      </section>
      <ResultCategory />
      <section className="px-4 flex justify-between border-2 md:border-0 py-2">
        <Filter />
        <Sort />
      </section>
    </main>
  );
};

export { CarListComponent };
