// import React from 'react'
// import "./FiltersList.scss"

// const FiltersList = (props) => {
//     const {handleCheck, checkOpen, checkAccess} = props

//     let openNow = 'filter__label'
//     let access = 'filter__label'

//     if (checkOpen) {
//       openNow += " checked";
//     }
//     if (checkAccess) {
//       access += " checked";
//     }

//   return (
//     <div className="filter">
//       <div className = "filter__button filter__button--open">
//         <input className="filter__checkbox" type="checkbox" id="open" onClick = {handleCheck} value="open"/>
//         <label className= {openNow} htmlFor="open">24Hr</label>
//       </div>

//       <div className = "filter__button filter__button--access">
//         <input className= "filter__checkbox" type="checkbox" id="access" onClick = {handleCheck} value="access"/>
//         <label className={access} htmlFor="access">Accessibile</label>
//       </div>

//     </div>
//   )
// }

// export default FiltersList