import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';


const AddAppointment = ({formDisplay, toggleForm, addAppointment}) => {

  const [form, setForm] = useState(
    {
      petName: '',
      ownerName: '',
      aptNotes: '',
      aptDate: '',
      aptTime: ''
    })

    const handleChange = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
      console.log(form)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      let tempApt = {
        petName: form.petName,
        ownerName: form.ownerName,
        aptNotes: form.aptNotes,
        aptDate: `${form.aptDate} ${form.aptTime}`,
      }

      addAppointment(tempApt);

      setForm({
        petName: '',
        ownerName: '',
        aptNotes: '',
        aptDate: '',
        aptTime: ''
      })
      toggleForm();
    }
  
  return (
    <div className={`card textcenter mt-3 ${formDisplay ? '' : 'add-appointment'}`} >
      <div className="apt-addheading card-header bg-primary text-white" onClick={toggleForm}>
        <FaPlus /> Add Appointment
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} noValidate id="aptForm">
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="petName"
              readOnly
            >
              Pet Name
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="petName"
                placeholder="Pet's Name"
                value={form.petName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="ownerName"
                >
                  Pet Owner
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="ownerName"
                    placeholder="Owner's Name"
                    value={form.ownerName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="aptDate"
                >
                  Date
                </label>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    name="aptDate"
                    id="aptDate"
                    value={form.aptDate}
                    onChange={handleChange}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="aptTime"
                >
                  Time
                </label>
                <div className="col-md-4">
                  <input
                    type="time"
                    className="form-control"
                    name="aptTime"
                    id="aptTime"
                    value={form.aptTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                  Apt. Notes
                </label>
                <div className="col-md-10">
                  <textarea
                    className="form-control"
                    rows="4"
                    cols="50"
                    name="aptNotes"
                    id="aptNotes"
                    placeholder="Appointment Notes"
                    value={form.aptNotes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row mb-0">
                <div className="offset-md-2 col-md-10">
                  <button
                    type="submit"
                    className="btn btn-primary d-block ml-auto"
                  >
                    Add Appointment
                  </button>
                </div>
              </div>
        </form>
      </div>
    </div>
  )
  
};


export default AddAppointment;