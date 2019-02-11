import React from 'react'
import log from './logger';

const Message = () => {
  return (
    <div className="content">
      <h1>Rexpack</h1>
      <p className="description">React, Express, and Webpack Boilerplate Application</p>
      <div className="awful-selfie"></div>
      <button onClick={() => log("hellow")}>Log</button>
    </div>
  )
}
export default Message