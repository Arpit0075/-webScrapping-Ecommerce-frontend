import { createContext, useState, useEffect } from "react";

export const AmazonContext = createContext();

export const AmazonProvider = (props) => {
  const [amazon, setAmazon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://webscrapping-ecommerce-backend.herokuapp.com/amazon");
        const data = await res.json();
        console.log(data);
        setAmazon(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <AmazonContext.Provider value={[amazon, setAmazon]}>
      {props.children}
    </AmazonContext.Provider>
  );
};
