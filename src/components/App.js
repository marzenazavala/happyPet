import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';

import AddAppointment from './AddAppointment';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';


const App = () => {
  const [appointments, setAppointments] = useState([]);
 
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/data.json');
      setAppointments(result.data)
    };
    fetchData();
  }, []);

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment />
                <ListAppointments appointments={appointments}/>
                <SearchAppointments />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };


export default App;
