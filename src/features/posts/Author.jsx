import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

import React from 'react'

const Author = ({userId}) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)
    console.log(author ? author.id : null)
  return (
      <span>by {author ? author.name : 'Unknown author'}</span>
  )
}

export default Author