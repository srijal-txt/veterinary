import React from 'react'
import './PetCollection.scss'
import PetData from '../../context/Pets'
import PetCard from '../PetCard/PetCard'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PetCollection = () => {
  return (
    <>
    <section className='collection con'>
                <div className="collection-head">
                    <h2 className='primary-heading text-center'>Our Pet Collections</h2>
                    <p className='primary-text text-center'>"Bring joy to your home with a furry companion from our pet selection."</p>
                </div>
                <div className="collection-body">
                    {PetData.map((pet)=>
                        <PetCard pet={pet}/>
                    )}
                </div>
                <div className="text-center">
                  <button className="primary-btn"><span>View All</span><FontAwesomeIcon icon={faAngleRight}/></button>
                </div>
            </section>
    </>
  )
}

export default PetCollection