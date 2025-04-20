import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading  , setLoading ] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await res.json();
        setPost(data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-10">
      <Link to='/'  ><div className="text-center my-5 font-semibold text-white"> <span className="py-1 bg-slate-400 px-5 rounded-sm  text-center">Go Back</span></div></Link>
      <div>
        <div className="flex justify-center w-full">
          <img
            className="rounded-lg"
            src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg"
          ></img>
        </div>
        <div className="w-[100%] md:w-[60%] mx-auto my-8">
          <h1 className="font-bold text-2xl">{post.title}</h1>
          <p className="my-5">{post.body}</p>
        </div>
      </div>
    </div>
  );
};
