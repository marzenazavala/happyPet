import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

const ListAppointments = ({appointments}) => {
    return (
      <div className="appointment-list item-list mb-3">
        {appointments.map(item => (
          <div className="pet-item col media py-3">
            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">{item.petName}</span>
                <span className="apt-date ml-auto">
                  <Moment 
                    date={item.aptDate}
                    parse="YYYY-MM-DD hh:mm"
                    format="MMM-D h:mma"
                  />
                </span>
              </div>

              <div className="owner-name">
                <span className="label-item">Owner: </span>
                <span>{item.ownerName}</span>
              </div>
              <div className="apt-notes">
                <span className="label-item">Note: </span>
                <span>{item.aptNotes}</span>
              </div>
            </div>
            <div className="ml-4 mt-4">
              <button className="pet-delete btn btn-sm btn-danger">
                <FaTimes />
              </button>
            </div>
          </div>
        ))}
      </div>
    )
};

export default ListAppointments;