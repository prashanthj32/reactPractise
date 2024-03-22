import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetailsPage() {
  const params = useParams();
  return (
    <div>UserDetailsPage {params.userId}</div>
  )
}

export default UserDetailsPage