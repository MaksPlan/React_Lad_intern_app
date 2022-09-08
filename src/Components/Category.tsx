import React from "react";
import style from "./category.module.scss";

const Category = () => {
  const category = ["Album", "Artist", "Playlist"];
  return (
    <nav>
      <ul className={style.categories}>{
        category.map((element) => {
            return <li >
              <button type="button" className={style.category_element}> 
              {element}
              </button>
               
            </li>
        })
        }</ul>
    </nav>
  );
};

export default Category;
