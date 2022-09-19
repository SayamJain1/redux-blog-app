import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectAllUsers } from '../users/userSlice';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postSlice';

const AddPostForm = () => {
    const dispatch = useDispatch()
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChnage = e => setTitle(e.target.value)
    const onContentChnage = e => setContent(e.target.value)
    const onuserIdChnage = e => setUserId(e.target.value)

    const onSaveClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    }
                })
            )
            setContent('')
            setTitle('')
        }
    }

 const canSave = title && content && userId;
    
    const userOptions = users.map(user => ( 
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
      <section>
          <h2>Add a new Post</h2>
          <form>
              <label htmlFor="postTitle">Post Title:</label>
              <input type="text"
                    id='postTitle'
                  name='postTitle'
                  value={title}
                  onChange={onTitleChnage}
              />

              <label htmlFor="postAuthor">Author:</label>
              <select id="postAuthor" value={userId} onChange={onuserIdChnage}>
                  <option value=''></option>
                  {userOptions}
              </select>

              <label htmlFor="postContent">Post Content:</label>
              <input type="text"
                    id='postContent'
                  name='postContent'
                  value={content}
                  onChange={onContentChnage}
              />
              <button type='button' disabled={!canSave} onClick={onSaveClicked}>Save Post</button>
          </form>
    </section>
  )
}

export default AddPostForm