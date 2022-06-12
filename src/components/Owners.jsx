import React from 'react'
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import "../styles/Owners.css";

const Owners = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    facade.fetchOwner().then(data => setOwners(data))
  }

  console.log(owners);

  useEffect(() => {
    getOwners()
  },[])

  return (
    <div >
      <h1 className="center-text book-text">Owners</h1>
      <div className='card-list'>
        {owners.map(owner => (
          <div key={owner.id} className='card-container'>
            <h2>Name: {owner.name}</h2>
            <h2>Address: {owner.address}</h2>
            <h2>Phone number: {owner.phone}</h2>
            <h2>Boats: {owner.boats}</h2><br></br>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Owners