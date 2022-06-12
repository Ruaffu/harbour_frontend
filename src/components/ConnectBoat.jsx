import React from 'react'
import { useState, useEffect } from "react";
import facade from "../apiFacade";

const ConnectBoat = () => {
    const [boatID, setBoatID] = useState('')
    const [harbourID, setharbourID] = useState('')
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBoatID({...boatID,[name]: value });
        setharbourID({...harbourID,[name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        facade.connectBoat(boatID.boatID, harbourID.harbourID)
        alert("Change submitted")
      };

  return (
    <div>
        <h2>Connect boat to harbour</h2>
        <form>
        <label>Boat id</label>
            <input type="text" name='boatID' onChange={handleChange}></input>
            <label>Harbour id</label>
            <input type="text" name='harbourID' onChange={handleChange}></input>
        </form>
        <button className="button-text" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default ConnectBoat