import React from 'react'
import {Link} from 'react-router-dom'

const Blog = ({ blog }) => {
    const id = 1;

    return (
        <div className='sm-6 mb-2'>
          <div className='card' >
            <div className='card-body'>
              <div className='card-title'>
                {blog.title}
                <p className='card-text'>
                     {blog.date}
                </p>
                <p className='card-text'>
                    {blog.desc}
                </p>
                <Link to={"/read/${blog.id}"} state ={{blog:blog}} className='btn btn-primary'> 
                  Read Me
                </Link>
                <button className='btn btn-danger ms-2'>
                    Delete
                </button>
                <Link to={'/edit'} state={{blog:blog}} className='btn btn-success ms-2'>
                    Edit post
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      )
    }

export default Blog
   