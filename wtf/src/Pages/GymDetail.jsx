import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import styles from "./GymDetail.module.css";
import { getData, getDataterm } from "../Redux/action";
const GymDetail = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState([]);
  const [currProduct, setcurrProduct] = useState({});

  const item = useSelector((state) => state.data);
  const terms = useSelector((state) => state.terms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(item));
  }, []);

  useEffect(() => {
    dispatch(getDataterm(terms));
  }, []);

  console.log(terms);
  useEffect(() => {
    if (id) {
      const temp = item.find((ele) => ele.user_id === id);
      temp && setcurrProduct(temp);
    }
  }, [item, id]);

  useEffect(() => {
    axios.get("https://blueproduct.herokuapp.com/plan").then((r) => setPlan(r.data));
  }, []);

  return (
    <div className={styles.detailPage}>
      <div className={styles.detail}>
        <h1>{currProduct.gym_name}</h1>
        <p>
          {currProduct.address1},{currProduct.city}
        </p>
        <h3>Description :</h3>
        <p>{currProduct.description}</p>
        <h3>Facilities</h3>
        <div className={styles.facility}>
          {currProduct.benefits !== undefined &&
            currProduct.benefits.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
        </div>

        <h3>Why to choose WTF?</h3>
        <div className={styles.term}>
          {terms.map((el) => {
            return (
              <div key={el.id}>{el.name === null ? "" : <p>{el.name}</p>}</div>
            );
          })}
        </div>
      </div>

      <div className={styles.plan}>
        <h1>Choose Membership</h1>
        {plan.map((ele) => {
          return (
            <div className={styles.list} key={ele.id}>
              <div>
                <h3>{ele.plan}</h3>
                <h4>{ele.plan_name}</h4>
              </div>
              <div>
                <h4>{ele.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymDetail;
