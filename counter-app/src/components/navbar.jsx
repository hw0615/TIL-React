import React from 'react';

// Stateless Functional Component
// Stateless Functional Component 안에서는 라이프사이클 훅 사용 불가
const NavBar = ({totalCounters}) => {
  console.log("NavBar - Rendered")

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar {" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;