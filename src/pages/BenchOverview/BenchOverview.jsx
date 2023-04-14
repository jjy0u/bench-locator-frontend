import React from 'react'
import { useParams } from 'react-router-dom'
import "./BenchOverview.scss"

const BenchOverview = (props) => {
  const {benchArr} = props
  const {benchId} = useParams()
  const targetBench = benchArr.filter((bench) => bench.id == benchId)[0]

  let engraving = "bench-overview__engraving"

  if (targetBench.memorialBench == true) {
    engraving = "bench-overview__memorial"
  } 
  

  return (
    <div className='bench-overview'>
      <h1 className='bench-overview__header'>{targetBench.address1} Bench</h1>
      <div className='bench-overview__content'>
        <div className='bench-overview__img-container'>
          <img src={targetBench.benchImage} alt="bench image"/>
        </div>
        <div className='bench-overview__bench-info'>
          {targetBench.engravedMessage && <h2 className={engraving}>{targetBench.engravedMessage}</h2>}
          <p className='bench-overview__description'>{targetBench.description}</p>
          <div className='bench-overview__details'>
            <div className='bench-overview__address'>
              <p> <strong>Address:</strong></p>
              <p>{targetBench.address1}, {targetBench.address2}, {targetBench.city}</p>
              <p>{targetBench.postcode}</p>
            </div>
            {!targetBench.twentyFourHourAccess ? <p><strong>Opening times: </strong>{targetBench.openingTime} - {targetBench.closingTime}</p> : <p><strong>Opening times:</strong>  <span>24H</span></p>}
            {targetBench.accessibility ? <p> <strong>Accessibile: </strong>  Yes</p> : <p> <strong>Accessibile:</strong>No</p>}
            <p> <strong>View:</strong> {targetBench.view}</p>
            <p><strong>Capacity:</strong> {targetBench.capacity}</p>
            {targetBench.shaded ? <p> <strong>Shaded:</strong>Yes</p> : <p><strong>Shaded:</strong>  No</p> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenchOverview