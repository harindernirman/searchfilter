import './App.css';
import Navbar from './containers/navbar';
import Slider from './containers/slider';
import Content from './containers/content';
import Footed from './containers/footed';
import Addinfo from './containers/AddInfo';
import React, { useState } from 'react';

function App() {

const [prop, setProp] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [filteredResults, setFilteredResults] = useState([]);

const updateProps =(data1)=>{
   setProp([...prop, data1])
  }


  const searchData = (value) => {
    setSearchTerm(value)
    if (searchTerm !== '') {
            const filteredData = prop.filter((data) => {
            return Object.values(data).join('').toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else {
        setFilteredResults(prop)
    }
    //    console.log(filteredData)
}

   return (
      <div>
        <Navbar />
        <Slider />
        <h1>welcome to content </h1>
        <Addinfo clickNow={updateProps} />
        <div className="container px-3">
          <div className="row gx-5">
          {/* <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(e) => searchData(e.target.value)}/> */}
          <div class="input-group input-group-lg my-3 ">
  <input type="text" class="form-control" placeholder="Search" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={(e) => searchData(e.target.value)}/>
</div>

          {searchTerm.length > 1 ? (
                    filteredResults.map((data) => {
                        return (
                          <Content id={data.id} name={data.name} key={data.id} info={data.info} />

                        )
                    })
                ) : (
                  prop.map((data) => {
                        return (
                          <Content id={data.id} name={data.name} key={data.id} info={data.info} />
                        )
                    })
                )}

            {/* {
                prop.map((data) => {
                return <Content id={data.id} name={data.name} key={data.id} file={data.file} />
              })
            } */}
          </div>
        </div>
        <Footed />
      </div>
    );
  }

export default App;
