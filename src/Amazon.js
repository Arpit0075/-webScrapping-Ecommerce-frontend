import React, { useContext } from "react";
import { AmazonContext } from "./AmazonContext";

function Amazon() {
  const [amazon] = useContext(AmazonContext);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {amazon.map((el) => {
        return (
          <div
            className="card container"
            style={{
              marginTop: "1rem",
            }}
          >
            <img src={el.imgSrc} className="card-img-top img" alt="img" />
            <div className="card-body">
              <h5 className="card-title">Laptop Name</h5>
              <p className="card-text">{el.title}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Origional Price: {el.origionalPrice}
              </li>
              <li className="list-group-item">Sale Price: {el.salePrice}</li>
              <li className="list-group-item">Rating: {el.rating}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Amazon;
