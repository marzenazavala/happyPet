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
  const [orderBy, setOrderBy] = useState('petName');
  const [orderDir, setOrderDir] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  
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
  };

  const toggleForm = () => {
    setFormDisplay(!formDisplay)
  };

  const addAppointment = (apt) => {
    let tempApt = appointments;
    tempApt.unshift(apt);
    setAppointments(tempApt);
  };

  let order;
  let filteredAppointments = appointments;
  if(orderDir === 'asc') {
    order = 1;
  }
  else {
    order = -1
  };

  filteredAppointments = filteredAppointments.sort((a,b) => {
    if(a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
      return -1 * order;
    }
    else {
      return 1 * order;
    }
  }).filter(eachItem => {
    return(
      eachItem['petName']
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      eachItem['ownerName']
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      eachItem['aptNotes']
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    )
  });

  const changeOrder = (orderBy, orderDir) => {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  };

  const searchApts = (value) => {
    setSearchQuery(value);
  };


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
                  searchApts={searchApts}
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
