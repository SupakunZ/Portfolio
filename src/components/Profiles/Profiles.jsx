import { SOCIAL_LINKS } from "../../../constants";
import styles from "./Profiles.module.scss";


const Profiles = () => {
  return (
    <div className={styles.profile}>
      {SOCIAL_LINKS &&
        SOCIAL_LINKS.map((item) => (
          <a
            href={item.url}
            key={item.name}
            className="link z-10"
            rel="noreferrer"
            target="_blank"
            aria-label={item.name}
          >
            {item.img}
          </a>
        ))}
    </div>
  );
};

export default Profiles;
