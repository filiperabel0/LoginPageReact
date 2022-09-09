import './App.css'
import React from 'react';
import styled from 'styled-components'

const Login: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <input type="text" className='input-user' placeholder='User'/>
        <input type="password" className='input-password' placeholder='Password'/>
        <button type='submit' className='btnSubmit'>Login</button>
      </div>
    </div>
  )
}

export default Login