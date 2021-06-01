import axios from "axios";
import React, { useEffect, useState } from "react";

const Giphy = () => {
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      });
      console.log(results.data);
    };
    fetchData();
  });

  return <div className="">Gliphy</div>;
};

export default Giphy;
