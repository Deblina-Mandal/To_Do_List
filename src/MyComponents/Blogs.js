import React from 'react'
import Header from "./Header"
import Blog from './Blog'

const Blogs = (props) => {
    
  return (
    <div>
      <Header/>
      {
        props.Blogs.map((blog) =>(
          <Blog key={blog.id} blog={blog} />
        ))
      }
     
    </div>
  )
}

export default Blogs
