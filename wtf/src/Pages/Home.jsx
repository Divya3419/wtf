import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData, getDataCity } from "../Redux/action";

const Home = () => {
  const item = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const[city,setcity]=useState("Noida")

  useEffect(() => {
    dispatch(getData(item));
  }, []);

 
    

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <h1>Filters</h1>
        <div>
          <h2>Location</h2>
          <input type="text" placeholder="Enter location" />
          <h2>Price</h2>
          <div className={styles.price}>
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
          </div>
          <h2>Cities</h2>
          <select onChange={(e) =>{setcity(e.target.value)}}>
            <option value="">Select City</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Gazaibad">Ghaziabad</option>
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
      </div>

      <div className={styles.box}>
        {item.map((ele) => (
          <Link
            to={`/${ele.user_id}`}
            key={ele.user_id}
            className={styles.link}
          >
            {" "}
            <div key={ele.user_id} className={styles.boxcontainer}>
              <h2>{ele.gym_name}</h2>

              <p>
                {ele.address1},{ele.city}
              </p>
              <p>
                {ele.duration_text} | {ele.distance_text}
              </p>
              <div className={styles.inner}>
                <p></p>
                {ele.plan_price == null ? (
                  ""
                ) : (
                  <p>₹ {ele.plan_price} for 3 Months</p>
                )}
                <button>Book Now</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
