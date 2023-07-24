import React from 'react'
import './PetCard.scss'
const PetCard = ({pet}) => {
  return (
    <>
    <div className="pet-card">
        <div className="pet-img">
            <img src={require(`../../assets/${pet.image}`)} alt=''/>
        </div>
        <div className="pet-details">
            <h4>{pet.breed}</h4>
            <p>Gender:<span>{pet.gender}</span> Age:<span>{pet.age}</span></p>
        </div>
    </div>
    </>
  )
}

export default PetCard