import React from 'react'
import { useState, useEffect } from "react";
import facade from "../apiFacade";

const Delete = () => {
    const [boatID, setBoatID] = useState('')
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBoatID({...boatID,[name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        facade.deleteBoat(boatID)
        alert("Boat deleted")
      };

  return (
    <div>
        <h2>Delete boat</h2>
              <form>
        <label>Boat id</label>
            <input type="text" name='boatID' onChange={handleChange}></input>
        </form>
        <button className="button-text" type="submit" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  )
}

export default Delete