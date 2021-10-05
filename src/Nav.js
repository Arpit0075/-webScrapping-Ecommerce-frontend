import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Shopping
          </Link>
          <form className="d-flex">
            <input
              name="input"
              value={input}
              onChange={handleChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
