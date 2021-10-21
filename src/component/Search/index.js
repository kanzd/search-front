import React,{useState} from 'react';
import axios from "axios";
import "./index.css";
import { Link } from 'react-router-dom';
export default function Index() {
    const [state,setState]=useState([]);
    return (
       <>
       

   
       <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",width:"100%",marginTop:"1%"}}>
       <Link to="/add" style={{marginRight:"1%"}}>
       <button style={{padding:"20px",borderRadius:"20px",fontSize:"16px",fontWeight:"bolder"}} onClick={(e)=>{
           setState([]);
       }}> Add Record </button></Link>
       <input onChange={async (e)=>{ 
           if(e.target.value==="")
           {
               setState([])
           }
           else{
           console.log(e.target.value);
         var data =  await axios.post("https://kanzd121.pythonanywhere.com/apis/search/",{search:e.target.value});
         console.log(data.data);
         setState(data.data);
           }
       }} placeholder="search" type="text" style={{flex:0.8,height:"50px",border:"5px",borderStyle:"groove",borderColor:"grey",borderRadius:"30px",}}></input>
       <button style={{marginLeft:"1%",padding:"20px",borderRadius:"20px",fontSize:"18px",fontWeight:"bolder"}} onClick={(e)=>{
           setState([]);
       }}> clear </button>
       </div>
       <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",height:"300%",marginTop:"1%"}}>

       {state.map((value,index)=>{
           return (<div style={{flex:1,borderStyle:"solid",height:"100%",width:"30%",borderRadius:"20px",borderColor:"grey",textAlign:"center",}}>
       
       <div style={{padding:"1%"}}>
       Search Term
       </div>
       
      <div style={{padding:"2%"}}>
      <div>
      NAME:- {value.name}
      </div>
      <div>
      ITEMS:- {value.items}
      </div>
      <div>
      ADDRESS:- {value.address}
      </div>
      <div>
      PINCODE:- {value.pincode}
      </div>
      </div>
      
       </div>);
       })}
      
       </div>
      
       </>
    )
}
