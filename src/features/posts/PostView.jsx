import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import Author from './Author'
import { selectAllPosts } from './postSlice'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

const PostView = () => {
    const posts = useSelector(selectAllPosts)

    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <Author userId={post.userId}/>
                <TimeAgo timeStamp={post.date}/>
            </p>
            <ReactionButton post={post} />
        </article>
    ))
  return (
      <section>
          <h2>Posts</h2>
          {renderPosts}
    </section>
  )
}

export default PostView
