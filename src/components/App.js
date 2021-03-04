import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
import { without } from 'lodash';

import AddAppointment from './AddAppointment';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';


const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [formDisplay, setFormDisplay] = useState(false);
  const [orderBy, setOrderBy] = useState('petName')
  const [orderDir, setOrderDir] = useState('asc')
  
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

  let order;
  let filteredAppointments = appointments;
  if(orderDir === 'asc') {
    order = 1;
  }
  else {
    order = -1
  };

  filteredAppointments.sort((a,b) => {
    if(a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
      return -1 * order;
    }
    else {
      return 1 * order;
    }
  })

  const changeOrder = (orderBy, orderDir) => {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
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
                <SearchAppointments 
                  orderBy={orderBy}
                  orderDir={orderDir}
                  changeOrder={changeOrder}
                />
                <ListAppointments 
                  appointments={filteredAppointments}
                  deleteAppointment={deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };


export default App;
