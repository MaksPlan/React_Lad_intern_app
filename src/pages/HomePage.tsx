import React, { useEffect, useState } from "react";
import { IAlbums } from "../interface/interface";
import { URL } from "../mocked/url";
import Albums from "./Albums";

const HomePage = () => {
  const [albums, setAlbums] = useState<IAlbums | null>(null);
  const gettopalbums = async () => {
    try {
      const respocne = await fetch(
       URL + '&limit=10'
      );
      const data = await respocne.json();
      console.log(data.albums)
      setAlbums(data.albums);
      console.log('albums', albums)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
gettopalbums();

  }, []);

  // useEffect(() => console.log(albums), [albums]);

  return (
    <div>
      <h1>I'm home page</h1>
        {/* {albums ? 'AL' : "Loading"} */}
      {albums ? <Albums albums={albums} /> : "Loading"};
    </div>
  );
};

export default HomePage;
