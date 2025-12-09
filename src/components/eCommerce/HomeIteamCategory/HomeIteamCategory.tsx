import type { TCategory } from "@types";

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const { HomeIteamImg, homeIteam } = styles;

const HomeIteamCategory = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={homeIteam}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={HomeIteamImg}>
          <img src={img} alt={title} />
        </div>
      </Link>
    </div>
  );
};
export default HomeIteamCategory;
