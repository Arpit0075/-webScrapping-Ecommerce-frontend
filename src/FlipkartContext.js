import { createContext, useState, useEffect } from "react";

export const FlipkartContext = createContext();

export const FlipkartProvider = (props) => {
  const [flipkart, setFlipkart] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://webscrapping-ecommerce-backend.herokuapp.com/flipkart"
        );
        const data = await res.json();
        console.log(data);
        setFlipkart(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <FlipkartContext.Provider value={[flipkart, setFlipkart]}>
      {props.children}
    </FlipkartContext.Provider>
  );
};
