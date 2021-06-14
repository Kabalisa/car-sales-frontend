import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { PostAdLayout } from "../../common";
import styles from "./styles/motors.module.scss";

const MoreDetailsComponent = () => {
  const arr = [
    { title: "Model", content: "BMW i3" },
    { title: "Year of mufacture", content: "2019" },
    { title: "Kilometers", content: "0" },
    { title: "Price", content: "8400000" },
    { title: "Phone number", content: "0785382213" },
  ];

  const arr1 = [
    "Body Condition",
    "Mechanical Condition",
    "Color",
    "transmission type",
    "fuel type",
  ];

  return (
    <PostAdLayout title="You are almost there">
      <section className="px-4 flex flex-col">
        <div className={styles.text}>
          Include as much details and pictures as possible, and set the right
          price
        </div>
        <div className="flex flex-col w-full p-3 mt-8 bg-gray-220 rounded">
          <div className="flex justify-between">
            <span className={styles.boldText}>Listing Summary</span>
            <span className={`${styles.boldText} text-red-450 cursor-pointer`}>
              Edit
            </span>
          </div>
          <ul className="mt-3 flex flex-col">
            {arr.map((item, index) => {
              return (
                <li className="flex mt-1" key={index}>
                  <span className="thin-text-3 w-1/2">{item.title}</span>
                  <span className="medium-text-1 w-1/2">{item.content}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="callButton p-3 flex justify-center mt-6">
          <FontAwesomeIcon className={styles.cameraIcon} icon={faCamera} />
          Add Pictures
        </button>
        <input placeholder="Title" className="app-input mt-6 p-3" />
        <textarea
          placeholder="Describe Your car"
          className={`${styles.textarea} app-input mt-4 p-3`}
        />
        <ul className="mt-4 mb-24 flex flex-col">
          {arr1.map((item, index) => {
            return (
              <li className="mt-2" key={index}>
                <select className="app-select select-2 p-3 w-full">
                  <option value="volvo">{item}</option>
                  <option value="saab">Newest to oldest</option>
                  <option value="mercedes">Oldest to Newest</option>
                  <option value="audi">Price highest to lowest</option>
                  <option value="audi">Price lowest to highest</option>
                </select>
              </li>
            );
          })}
        </ul>
        <div
          className={`bg-white p-3 fixed bottom-0 w-full ${styles.wrapper}`}
        >
          <button className="red-button w-11/12 p-3 md:ml-2">Next</button>
        </div>
      </section>
    </PostAdLayout>
  );
};

export { MoreDetailsComponent };
