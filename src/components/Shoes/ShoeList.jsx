import React from "react";
import "./ShoeList.css";
const ShoeList = (props) => {
  return (
    <div>
      <ul>
        {props.shoes.map((item) => (
          <li>
            {item.name}-{item.description}-{item.price}
            <div className="quantity">
              <div>
                <h4>Large</h4>
                {item.Large}
                <button>Buy Large</button>
              </div>
              <div>
                <h4>Medium</h4>
                {item.Medium}
                <button>Buy Medium</button>
              </div>
              <div>
                <h4>Small</h4>
                {item.Small}
                <button>Buy Small</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeList;
