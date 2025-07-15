import React from 'react'
import Header from './Header'
import Nav from './Nav'

const Vieww = () => {
  return (
    <div>
        <Nav />
            <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3 p-5">
                <div className="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">


<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Brand</th>
      <th>Company</th>
      <th>Fuel</th>
      <th>Registration No.</th>
      <th>Manufacturing Date</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Swift</td>
      <td>Maruti Suzuki</td>
      <td>Suzuki Motor Corporation</td>
      <td>diesel</td>
      <td>KL03ab1234</td>
      <td>13-12-2027</td>
      <td>210000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fortuner</td>
      <td>Toyota</td>
      <td>Toyota Motor Corporation</td>
      <td>petrol</td>
      <td>KL03ab5678</td>
      <td>13-10-2027</td>
      <td>250000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Nexon </td>
      <td>Tata Motors</td>
      <td>Tata Group</td>
      <td>diesel</td>
      <td>KL03ab1234</td>
      <td>13-12-2027</td>
      <td>250000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Model 3</td>
      <td>Tesla</td>
      <td>Tesla, Inc.</td>
      <td>diesel</td>
      <td>KL03ab1234</td>
      <td>13-12-2027</td>
      <td>150000</td>
    </tr>
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Vieww