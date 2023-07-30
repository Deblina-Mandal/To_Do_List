import React from 'react'
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

const BlogDetails = () => {
    const location = useLocation();
    console.log(location.state.blog)

  return (
    <div>
      <h2 className='mt-3'>{location.state.blog.title}</h2>
      <hr/>
      <p>{location.state.blog.desc}</p>
      <Link to="/" className='btn btn-primary'>
        GO BACK
      </Link>
    </div>
  )
}

export default BlogDetails