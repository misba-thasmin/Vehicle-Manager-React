import React from 'react'
import Header from './Header'
import Nav from './Nav'

const Deletee = () => {
  return (
    <div>
        <Nav />
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label  className="form-label">Vehicle Name</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-warning">Delete</button>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Deletee