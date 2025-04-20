import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Post = () => {
  const [post , setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); 
  return (
    <div className='w-[95%] md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
       {
        post.map((item , key) =>(
          <div key={key} >
            <div className='flex justify-center w-full'>
              <img className='rounded-lg' src='https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg'></img>
            </div>
            <div className=''>
              <h1 className='font-bold text-2xl'>{item.title.slice(0,20)} ...</h1>
              <p className='my-5'>{item.body.slice(0,90)}...</p>
              <Link to={`details/${item.id}`}><button className='p-2 w-full border border-red-600 rounded-full inline-block hover:bg-amber-300'>Continute Reading</button></Link>
            </div>
          </div>
        ))
       }
    </div>
  )
}
