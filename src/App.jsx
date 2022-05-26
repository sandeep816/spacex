
import axios from './axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FlightCard from './components/FlightCard'
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App(props) {


  const [spacex, setSpacex] = useState([]);
  let params = useParams();



  useEffect(() => {
    async function fetchData(){
      
      let url = '';      
      url = (params.y) ? 'launches?limit=20&launch_year='+params.y : 'launches?limit=20';
      
      const request = await axios.get(url);
      setSpacex(request.data);
    }
    fetchData()
  }, [params]);


  return (
    <>
     <main className="p-10">
       <Header />
       
       
<div className="w-full lg:flex">
<Sidebar />


<div className="lg:w-5/6">
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{
spacex.map((value, index) => {
	return (
    <FlightCard 
    key={index}
    te={index}
    MissionName={value.mission_name}
    MissionIds={value.mission_id}
    LaunchYear={value.launch_year}
    LaunchSucess={value.launch_success}
    LaunchLanding=""
    Image={value.links.mission_patch}
/>
	)
})
}
 
 </div>

<Footer />


</div>
</div>

     </main>
    </>
  )
}

export default App
