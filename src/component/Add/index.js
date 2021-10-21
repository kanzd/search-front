import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Index() {
    const [state,setState]=useState({});
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"600px"}}>
         <Link to="/">
         <button style={{padding:"10px",borderRadius:"30px",fontWeight:"bolder"}}>BACK</button> 
         </Link>
         
             
         <input style={{flex:0.1,margin:"1%"}} placeholder="name" type="text" onChange={(e)=>{
             var tempstate=state;
             tempstate.name=e.target.value;
             setState(tempstate);
         }}></input>    
         <input style={{flex:0.1,margin:"1%"}} placeholder="items" type="text" onChange={(e)=>{
             var tempstate=state;
             tempstate.items=e.target.value;
             setState(tempstate);
         }}></input>  
         <input style={{flex:0.1,margin:"1%"}} placeholder="address" type="text" onChange={(e)=>{
             var tempstate=state;
             tempstate.address=e.target.value;
             setState(tempstate);
         }}></input> 
         <input style={{flex:0.1,margin:"1%"}} placeholder="pincode" type="text" onChange={(e)=>{
             var tempstate=state;
             tempstate.pincode=e.target.value;
             setState(tempstate);
         }}></input> 
         <button onClick={async (e)=>{
            
             var post = await axios.post("https://kanzd121.pythonanywhere.com/apis/add/",{name:state.name,items:state.items,pincode:state.pincode,address:state.address});
             alert("data saved");
         }} style={{padding:"10px",borderRadius:"30px",fontWeight:"bolder"}}>ADD RECORD</button>     
        </div>
    )
}
