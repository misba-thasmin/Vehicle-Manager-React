import React from 'react'
import Header from './Header'
import Nav from './Nav'

const Add = () => {
  return (
    <div>
        <Nav />
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label  className="form-label">Name</label>
<input type="text" className="form-control" />

                </div>
                <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label  className="form-label">Brand</label>
<input type="text" className="form-control" />

                </div>
               <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label  className="form-label">Fuel type</label>
<select name="" id="" className="form-control">
    <option value="Petrol">Petrol</option>
    <option value="Diesel">Diesel</option>
    <option value="Electric">Electric</option>
    <option value="LPG">LPG</option>
</select>

                </div>
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label  className="form-label">Registration No</label>
<label  className="form-label"></label>
                </div>
                <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label  className="form-label">Image</label>
<input type="text" className="form-control" />
<input type="file" name="" id="" className="form-control" />

                </div>
                 <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label  className="form-label">Manufacturing Date</label>
<input type="date" name="" id="" className="form-control" />


                </div>
                 <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label  className="form-label">Price</label>
<label  className="form-label"></label>


                </div>
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<button className="btn btn-warning">Submit</button>


                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Add