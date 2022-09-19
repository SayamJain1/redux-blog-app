import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😝',
    heart: '💚',
    rocket: '🚀',
    coffee: '☕',
}

import React from 'react'

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch()
    const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {

    
  return (
      <button
          key={name}
          type='button'
          className="reactionButton"
          onClick={() => 
                dispatch(reactionAdded({postId : post.id, reaction : name}))
        }
      >
        {emoji} {post.reactions[name]}
          
    </button>
        )
    })

    return <div>{ reactionButton}</div>
}

export default ReactionButton