import React from 'react'

import { Link } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <>
    <div className="about" >
      {" "}
      <Link to="/">User list</Link>
      <Link to="/about">About</Link>
    </div>
    <div data-testid="admin">
    This page is only for training purpose - React-Router linking - component uses lazy loading
    </div>
  </>
  )
}

export default AdminPanel