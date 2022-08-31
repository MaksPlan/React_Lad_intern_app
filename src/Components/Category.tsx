import React from "react";

const Category = () => {
  const category = ["Album", "Artist", "Playlist"];
  return (
    <nav>
      <ul>{
        category.map((element) => {
            return <li>
                {element}
            </li>
        })
        }</ul>
    </nav>
  );
};

export default Category;
