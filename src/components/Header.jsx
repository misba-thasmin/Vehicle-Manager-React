import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Vehicle Manager</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Add">Add Vehicle</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search Vehicle</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">Delete Vehicle</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/View">View Vehicle</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header