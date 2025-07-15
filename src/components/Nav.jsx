import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
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
          <Link class="nav-link active" aria-current="page" to="/Add">ADD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">Delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/View">View</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Nav