import React from 'react'
import {useTate} from "react"
import { Link, Redirect } from "react-router-dom";


function CheckLog() {

  const user = JSON.parse(localStorage.getItem("user")) || {}
  !user ? (alert('Utilisateur non connecté'), <Redirect to="/" />) :
  return (
    <div>
      Utilisateur non connecté
    </div>
  )
}

export default CheckLog
