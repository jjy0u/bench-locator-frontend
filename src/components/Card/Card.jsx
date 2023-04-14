import React from 'react'
import './Card.scss'
import { Link } from "react-router-dom";



const Card = (props) => {
    const {number, location, address1, address2, postcode, city, isTwentyFourHours,id, openingTime, closingTime} = props

    let isOpen
    let openColour

    let today = new Date()


    let openingTimeHour
    let  closingTimeHour

    if (openingTime && closingTime) {
        openingTimeHour = Number(openingTime.split(":")[0])
        closingTimeHour = Number(closingTime.split(":")[0])
    }

    if(closingTimeHour == 0){
        closingTimeHour = 24
    }

    const options = {
        timeZone: "Europe/London",
        hour: "2-digit",
        hour12: false
    }

    let todayHour = Number(today.toLocaleTimeString("en-GB", options))


    if (isTwentyFourHours == true || (todayHour >= openingTimeHour && todayHour <= closingTimeHour)) {
        isOpen = "Open today"
        openColour = "card__green-open"
    } else{
        isOpen = "Closed today"
        openColour = "card__red-closed"
    }
    
  return (
    <div className= 'card'>
            <h1 className='card__list-number'>{number}</h1>
        <div className='card__overview'>
            <h2 className='card__title'>{location} Bench</h2>
            <p className='card__address'>{address1}, {address2}, {city}</p>
            <p className='card__postcode'>{postcode}</p>
            <div className='card__details'>
                <p className='card__opening'><span className={openColour}>{isOpen}</span></p>
                <p className='card__links'>
                    <a href="">Map</a> | 
                    <Link to={`/bench/${id}`} key = {id}>
                        <a href=""> Bench Details</a>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card