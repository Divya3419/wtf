import React,{useState,useEffect}from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";

import styles from "./GymDetail.module.css"
const GymDetail = () => {
    const{id}=useParams()
    // console.log(id)
    const [data, setData] = useState([]);
    const[currProduct,setcurrProduct]=useState({})
  useEffect(() => {
    axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231").then((r) => setData(r.data.data));
  }, []);
 console.log(data)


useEffect(()=>{
    if(id){
      const temp=data.find((ele)=>ele.user_id===(id))
      temp && setcurrProduct(temp)
    }
      },[data,id])

      console.log(currProduct)
  return (
    <div className={styles.detailPage}>
        <div className={styles.detail}>
            <h1>{currProduct.gym_name}</h1>
            <h3>Description :</h3>
        <p>{currProduct.description}</p>
        {data.map((ele)=>{
        return <p key={ele.user_id} style={{color:"white"}}>{ele.gym_name}</p>
    })}
        </div>
        
    
    
    </div>
  )
}

export default GymDetail