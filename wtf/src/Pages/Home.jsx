import axios from "axios";
import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData, getDataCity } from "../Redux/action";

const Home = () => {
  const item = useSelector((state) => state.data);
  const city = useSelector((state) => state.city);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(item));
  }, []);

  
  useEffect(() => {
    dispatch(getDataCity());
  }, []);

  // console.log(city);
  const handleChange=()=>{
    // useEffect(() => {
      dispatch(getData(item));
    // }, []);
  

  }

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
          <select onChange={handleChange}>
            <option value="">Select City</option>
            {city.map((ele) => {
              return <option key={ele.city} value={ele.city}>{ele.city}</option>;
            })}
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
