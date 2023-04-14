import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import BenchOverview from './pages/BenchOverview/BenchOverview';
import AddBench from './pages/AddBench/AddBench';

import { useEffect, useState } from 'react'
const App = () => {

  const [benches, setBenches] = useState([])
  // const [open, setOpen] = useState("")
  // const [accessibile, setAccessibile] = useState("")

  // const [openChecked, setOpenChecked] = useState(false)
  // const [accessibileChecked, setAccessibileChecked] = useState(false)


  const getBenches = async () => {
    const url = "http://localhost:8080/benches";
    //const res = await fetch(url + `?isTwentyFourHr=${twentyFourHour}&isAccessiblity=${accessibility}&limit=${limit}`);
    const res = await fetch(url)
    const data = await res.json();
    setBenches(data)
  };

  useEffect(() => {
    getBenches()
  }, [])


  // const handleCheck = (event) =>{
  //   if(event.target.value === "open" && openChecked == false){
  //     setOpenChecked(true)
  //     setOpen(true)
  //   } else if (event.target.value == "open" && openChecked == true){
  //     setOpenChecked(false)
  //     setOpen("")
  //   }

  //   if(event.target.value === "access" && setAccessibileChecked == false){
  //     setAccessibileChecked(true)
  //     setAccessibile(true)
  //   } else if (event.target.value == "access" && setAccessibileChecked == true){
  //     setAccessibileChecked(false)
  //     setAccessibile("")
  //   }
  // }

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route 
            path='/bench/add-bench' 
            element={<AddBench 
            />} 
          />
          <Route 
            path='/bench/:benchId' 
            element={<BenchOverview 
            benchArr = {benches}
            />} 
          />
          <Route
            path = '/'
            element={<Main
            benchArr = {benches}
            // checkOpen = {openChecked}
            // checkAccess = {accessibileChecked}
            // handleCheck = {handleCheck}
            />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
