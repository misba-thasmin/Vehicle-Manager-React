import React from 'react'

const vehicleHeade = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vehicle Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Add Vehicle</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search Vehicle</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View Vehicle</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Swift</a></li>
            <li><a class="dropdown-item" href="#">Fortuner</a></li>
            <li><a class="dropdown-item" href="#">Nexon</a></li>
             <li><a class="dropdown-item" href="#">Model 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default vehicleHeade