import { PostAdLayout } from "../../common";
import styles from "./styles/motors.module.scss";

const Motors = ({ category }) => {
  return (
    <PostAdLayout title={`Tell us about your ${category}`}>
      <ul className="flex flex-col px-4">
        <li className="py-3">
          <select name="order" className="app-select w-full p-4">
            <option value="Kigali">Kigali</option>
            <option value="Kamonyi">Kamonyi</option>
            <option value="muhanga">muhanga</option>
            <option value="rwanda">rest of rwanda</option>
          </select>
        </li>
        <li className="py-3">
          <select name="order" className="app-select w-full p-4">
            <option value="volvo">Make&Model</option>
            <option value="saab">Toyota</option>
            <option value="saab">Ferrari</option>
            <option value="saab">Gikeri</option>
          </select>
        </li>
        <li className="py-3">
          <input
            placeholder="Year of manufacturer"
            className="app-input w-full p-3"
          />
        </li>
        <li className="py-3">
          <input placeholder="Kilometers" className="app-input w-full p-3" />
        </li>
        <li className="py-3">
          <input placeholder="Price" className="app-input w-full p-3" />
        </li>
        <li className="py-3">
          <input placeholder="Phone number" className="app-input w-full p-3" />
        </li>
        <button className="red-button w-full p-3 my-12">Next</button>
      </ul>
    </PostAdLayout>
  );
};

export { Motors };
