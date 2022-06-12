import React from 'react'
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import "../styles/Forms.css";

const Boats = () => {

    const [harbour, setHarbour] = useState('')
    const [boats, setBoats] = useState([])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setHarbour({...harbour,[name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        facade.getBoatsByHarbourId(harbour.harbourID).then(data => setBoats(data))
      };
      console.log(boats);

  return (
    <div className='login'>
      <div >
        <div>
        <h2>Boats by harbour</h2>
        </div>
        <div className='login-box '>
        <form >
          <div >
            
            <input type="text" name='harbourID' onChange={handleChange} placeholder='Harbour ID' ></input>
            </div>
        </form>
        <button className="btn btn-primary btn-block btn-large" type="submit" onClick={handleSubmit}>
        Find
      </button>
      </div>
      </div>
      <div className='user-box'>
      {boats.map(boat => (
          <div key={boat.id}>
            <h2>Brand: {boat.brand}</h2>
            <h2>Make: {boat.make}</h2>
            <h2>Name number: {boat.name}</h2>
            <h2>Image number: {boat.image}</h2>
            <h2>Owners: {boat.owners}</h2><br></br>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Boats