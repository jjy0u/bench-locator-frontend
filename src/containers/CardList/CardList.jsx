import React from 'react'
import Card from '../../components/Card/Card';
import './CardList.scss'

const CardList = (props) => {
    const {benchArr} = props
    let interval = 0


    const cardsListJSX = benchArr.map((bench) => {
            interval++
        return ( 
        <Card
              number = {interval}
              location = {bench.address1}
              address1 = {bench.address1}
              address2 = {bench.address2}
              city = {bench.city}
              postcode = {bench.postcode}
              isTwentyFourHours = {bench.twentyFourHourAccess}
              id = {bench.id}
              openingTime = {bench.openingTime}
              closingTime = {bench.closingTime}
              />
          )
      })

  return (
    <div>
        <div className="card-list">{cardsListJSX}</div>
    </div>
  )
}

export default CardList