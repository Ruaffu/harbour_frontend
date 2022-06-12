import React from 'react'
import { useState, useEffect } from "react";
import facade from "../apiFacade";

const UpdateBoat = () => {
    const [boatInfo, setBoatInfo] = useState({brand : "", make : "", name : "", image : "", owners : [], harbourID : ""})
    const [boatID, setBoatID] = useState({id : ""})
    
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBoatInfo({...boatInfo,[name]: value });
        setBoatID({...boatID,[name]: value });
      };

      const handleChangeOwner = (e) => {
        const value = e.target.value;
        setBoatInfo({...boatInfo,["owners"]: [value] });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        facade.updateBoat(boatID,boatInfo)
        alert("Boat updated")
      };
  return (
    <div>
        <h2>Update boat info</h2>
              <form>
        <label>Boat id</label>
            <input type="text" name='id' onChange={handleChange}></input>
            <label>Brand</label>
            <input type="text" name='brand' onChange={handleChange}></input>
            <label>Make</label>
            <input type="text" name='make' onChange={handleChange}></input>
            <label>Name</label>
            <input type="text" name='name' onChange={handleChange}></input>
            <label>Image</label>
            <input type="text" name='image' onChange={handleChange}></input>
            <label>Owner</label>
            <input type="text" name='owners' onChange={handleChangeOwner}></input>
            <label>Harbour ID</label>
            <input type="text" name='harbourID' onChange={handleChange}></input>
        </form>
        <button className="button-text" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default UpdateBoat