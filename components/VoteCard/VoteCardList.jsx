import React, { useState } from "react";
// import { data } from "../../public/assets/data.json";
import VoteCard from "./VoteCard";
import styles from "../../styles/components/VoteCard/VoteCardList.module.scss";
import TriangleIcon from "../icon/TriangleIcon";

const modes = ["Grid", "List"];

function VoteCardList({ votes }) {
  const [mode, setMode] = useState(modes[0]);
  const [showMenu, setShowMenu] = useState(false);
  const handleChangeMenu = (modeItem) => {
    setMode(modeItem);
    toggleMenu();
  };
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Previous Rulings</h2>
        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdown__button}
            onClick={toggleMenu}
          >
            {mode}
          </button>
          <ul
            className={`${styles.dropdown__menu} ${
              showMenu ? styles.dropdown__menu__show : ""
            }`}
          >
            {modes.map((modeItem) => (
              <li key={modeItem} className={styles.menu__item}>
                <button
                  type="button"
                  className={styles.menu__button}
                  onClick={() => handleChangeMenu(modeItem)}
                >
                  {modeItem}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.container} ${styles[mode.toLowerCase()] || ""}`}
      >
        <div className={styles.scroll}>
          {votes?.map((data) => (
            <VoteCard key={data.name} data={data} mode={mode.toLowerCase()} />
          ))}
        </div>
      </div>
    </>
  );
}

export default VoteCardList;
