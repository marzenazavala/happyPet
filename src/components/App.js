import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
import { without } from 'lodash';

import AddAppointment from './AddAppointment';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';


const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [formDisplay, setFormDisplay] = useState(true);
 
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/data.json');
      setAppointments(result.data)
    };
    fetchData();
  }, []);

  const deleteAppointment = (aptm) => {
    let tempApt = appointments;
    tempApt = without(appointments, aptm);
    setAppointments(tempApt);
  }

  const toggleForm = () => {
    setFormDisplay(!formDisplay)
  }

  const addAppointment = (apt) => {
    let tempApt = appointments;
    tempApt.unshift(apt);
    setAppointments(tempApt);

  }

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment 
                  formDisplay={formDisplay}
                  toggleForm={toggleForm}
                  addAppointment={addAppointment}
                />
                <ListAppointments 
                  appointments={appointments}
                  deleteAppointment={deleteAppointment}
                />
                <SearchAppointments />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };


export default App;
