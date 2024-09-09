import React from 'react'
import logo from './bl_logo.png';

function Logo({ width = '100px' }) {
  return (
    <div><img src={logo} style={{ width }} /></div>
  )
}

export default Logo