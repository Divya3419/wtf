import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import {Link} from "react-router-dom"
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231").then((r) => setData(r.data.data));
  }, []);
console.log(data)
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
          <select name="" id="">
            <option value="">Select City</option>
            <option value="">New Delhi</option>
            <option value="">Ghaziabad</option>
            <option value="">Noida</option>
            <option value="">Delhi</option>
          </select>
        </div>
      </div>

      <div className={styles.box}>
        {data.map((ele) => (
         <Link to={`/${ele.user_id}`} key={ele.user_id} className={styles.link}> <div key={ele.user_id} className={styles.boxcontainer}>
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
