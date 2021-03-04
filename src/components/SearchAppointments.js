import React from 'react';

const SearchAppointments = ({orderBy, orderDir, changeOrder}) => {
  
    return (
      <div className="search-appointments row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="SearchApts"
            type="text"
            className="form-control"
            aria-label="Search Appointments"
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by: <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button 
                className={`sort-by dropdown-item ${orderBy === 'petName' ? 'active' : ''}`} 
                href="#"
                onClick={() => changeOrder('petName', orderDir)}
              >
                Pet Name
              </button>
              <button 
                className={`sort-by dropdown-item ${orderBy === 'aptDate' ? 'active' : ''}`} 
                href="#"
                onClick={() => changeOrder('aptDate', orderDir)}
              >
                Date
              </button>
              <button 
                className={`sort-by dropdown-item ${orderBy === 'ownerName' ? 'active' : ''}`} 
                href="#"
                onClick={() => changeOrder('ownerName', orderDir)}
              >
                Owner
              </button>
              <div role="separator" className="dropdown-divider" />
              <button 
                className={`sort-by dropdown-item ${orderDir === 'asc' ? 'active' : ''}`} 
                href="#"
                onClick={() => changeOrder(orderBy, 'asc')}
              >
                Asc
              </button>
              <button 
                className={`sort-by dropdown-item ${orderDir === 'desc' ? 'active' : ''}`} 
                href="#"
                onClick={() => changeOrder(orderBy, 'desc')}
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default SearchAppointments;