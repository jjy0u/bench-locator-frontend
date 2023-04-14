import React from 'react'
import './Main.scss'
import CardList from '../../containers/CardList/CardList'
import Map from '../Map/Map'
import SideNav from '../SideNav/SideNav'

const Main = (props) => {
    const {benchArr, inputLocation} = props

  return (
    <div className='main'>
      {/* <SideNav checkOpen = {checkOpen} checkAccess={checkAccess} handleCheck = {handleCheck}/> */}
      <h3 className='main__heading'>Closest benches that match your search: "{inputLocation}"</h3>
      <div className='main__bench-location'>
        <div className='main__img-container'>
        <Map         
          center={{ lat: 51.50, lng: -0.0812 }}
          zoom={11}
          locations={benchArr}/>
        </div>
        <div>
            <CardList benchArr = {benchArr}/>
        </div>
      </div>
    </div>
  )
}

export default Main