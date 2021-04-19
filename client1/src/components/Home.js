import React,{useState,useEffect} from "react";
import './Home.css';
import axios from 'axios';
import DeleteImg from '../assets/delete.svg'
import SearchImg from '../assets/search.svg'

const Home = () => {

  const [mainData, setMainData] = useState([]);
  const [name, setName] = useState("");
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end,setEnd]=useState("");


  const [show, setShow] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios.get("/meet-details").then(res => {
      console.log(res.data);
      setMainData([...res.data])
    });
    
    
  },[show]);

 
  const submitingForm = (e) => {
    e.preventDefault();

    const newItem = {
     "name": name,
      "numOfPeople": noOfPeople,
      "date":date,
      "start": start,
      "end": end
    }
        
         axios.post('/meet-details', newItem)
        .then(res => {
          console.log(res.data);
          setShow(show => !show);
          setName("");
          setNoOfPeople(0);
          setDate("");
          setStart("");
          setEnd("");
        })

   
    
  }

  const removeMeet = (id) => {
    axios.delete('/meet-details/' + id)
        .then(res =>{
            
          console.log(res.data.message);
          setShow(show=>!show);
        });
    }  

  return (
    <div className="homeContainer">
      <h1>Home</h1>
      <div className="homeSearch">
         <div className="inputSearch">
          <form >
            <label> <img src={SearchImg} alt="" />
              <input type="search" id="searchName" name="name" onChange={(e)=>setSearchTerm(e.target.value)} required />
            </label>
            <label>From:
              <input type="date" id="startDate" name="startDate" />
            </label>
            <label>To:
              <input type="date" id="endDate" name="endDate" />
            </label>
        </form>
        </div>
      </div>

      <div className="homeContent">
        <div className='tOverflow'>
          <table>
          <thead>
            <th>Sl no.</th>
            <th>Meeting Name</th>
            <th>No. of People Attending</th>
            <th>Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Actions</th>
          </thead>
            <tbody id="tBody">
              {
                mainData.filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  }
                  else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val;
                  }                   
                }).map((data,index) => (
                  <tr className="tRow" key={index}>
                    <td>{index}</td>
                    <td>{data.name}</td>
                    <td>{data.numOfPeople}</td>
                    <td>{data.date}</td>
                    <td>{data.start}</td>
                    <td>{data.end}</td>
                    <td><button onClick={()=>removeMeet(data._id)}><img src={DeleteImg} alt="" /></button></td>
                  </tr>
                ))
              }
            
          </tbody>
        </table>
        </div>
        
        <div className="inputForm">
          <form onSubmit={submitingForm}>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" id="noOfPeople" name="noOfPeople" value={noOfPeople} onChange={(e) => setNoOfPeople(e.target.value)} required />
          <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" id="start" name="start" value={start} onChange={(e) => setStart(e.target.value)} required />
          <input type="time" id="end" name="end" value={end} onChange={(e) => setEnd(e.target.value)} required />
          <button type="submit" id="submitBtn" >Add</button>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default Home;