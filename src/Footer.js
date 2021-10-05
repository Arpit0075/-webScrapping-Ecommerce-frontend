import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button>1</button>
        </Link>
        <Link to="/2">
          <button>2</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
