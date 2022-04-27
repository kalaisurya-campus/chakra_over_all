import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './styles/HomePageDatas.scss';
function HomePageDatas(props) {
    
    return (
        <div className="main-tables-content">
          
<div className="split-boxs">
    <div className="left-image">
        kalak
    </div>
    <div className="right-contebnt-box">
       <form>
           <div className="form-div">
           <div className="rotate">
               <label>Name</label>
               <input type="text" name="name" placeholder="Entre the name" />
           </div>
           <div className="rotate">
               <label>email</label>
               <input type="email" name="name" placeholder="Entre the Email"/>
           </div>
           <div className="rotate">
               <label>Phone</label>
               <input type="number" name="name" placeholder="Entre the Phone"/>
           </div>
           <div className="rotate">
               <label>Location</label>
               <input type="text" name="name" placeholder="Entre the Location"/>
           </div>
           <div className="submits">
               <button className="btn">Submit</button>
           </div>
           </div>
       </form>
    </div>
</div>

           
        </div>
    );
}

export default HomePageDatas;