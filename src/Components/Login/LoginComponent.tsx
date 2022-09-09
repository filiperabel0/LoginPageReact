import './App.css'
import React from 'react';
import styled from 'styled-components'

const Login: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <h1>Best Points</h1>
        <input type="text" className='input-user' placeholder='User'/>
        <input type="password" className='input-password' placeholder='Password'/>
        <div className='div-btns'>
        <button type='submit' className='btnSubmit'>Login</button>
        <button type='submit' className='btnSubmit'>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Login