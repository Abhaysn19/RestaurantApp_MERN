import React from "react";
import {data} from "../Pages/restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Popular Dishes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            temporibus velit incidunt, nulla voluptate quo officiis praesentium
            asperiores ex quia saepe ducimus sed inventore eos?
          </p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map((element) => {
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Menu;
