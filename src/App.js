import './App.css';
import Blogs from './MyComponents/Blogs';
import BlogDetails from './MyComponents/BlogDetails';
import AddBlog from './MyComponents/AddBlog';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import {nanoid} from 'nanoid';

function App() {
  const [blogs,setBlogs] = useState([
    {id:1,
    title:'First task',
    date:"22/06/2023",
    desc:'First post'
    },
    { id:2,
      title:'Second task',
      date:"22/06/2023",
      desc:'Second post'
      },
    {   id:2,
        title:'Third task',
        date:"22/06/2023",
        desc:'Third post'
        }

  ])

const addBlog =(blog)=>{
  setBlogs([...blogs,{id:nanoid(),...blog }])
}
  return ( 
    <div className="container">
      
      <Router>
        <Routes>
          <Route path='/' element={<Blogs Blogs ={blogs} />} />
          <Route path='/read/:id' element={<BlogDetails />} />
          <Route path='/add-blog' element={<AddBlog addBlog={addBlog}/>} />
          
        </Routes>

      </Router>
     
    </div>
  );
}
 
export default App;
