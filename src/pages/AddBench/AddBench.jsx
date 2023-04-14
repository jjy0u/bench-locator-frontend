import React from 'react'
import './AddBench.scss'
import Form from '../../components/Form/Form'

const AddBench = () => {

  const handleSubmit = async bench => {
    const result = await fetch("http://localhost:8080/bench",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bench)
    })
    if(result.ok){
      alert("Bench created!")
    } else {
      alert("Something isn't right")
    }
  };

  const defaultFormState = { address: "", city: "", postcode: "", twentyFourHourAccess: "", openingTime: "", closingTime: "", shaded: "", picnicTable: "" };

  return (
    <div className='add-bench'>
      <Form handleSubmit={handleSubmit} defaultFormState={defaultFormState}/>
    </div>
  )
}

export default AddBench