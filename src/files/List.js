import React from 'react'
import { getWebsites, deleteWebsite } from '../firebase/store'
import { useEffect, useState } from 'react';


export default function List() {
  const [websites, setWebsites] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites();
   
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setWebsites(docs);};

  const handelDelete=(id)=>{
    deleteWebsite(id);
  }

  useEffect(() => {
    getLinks();
  }, [handelDelete]);
  return (
    <div>
        {websites.map((link) => (
        <ul key={link.id}>
        <li><img src={link.img} /></li>
        <li>{link.name}</li>
        <li><a href={link.url}/></li>
        <li><button onClick={(e)=>handelDelete(link.id)} >delete</button></li>
      </ul>
        )
        )}
    </div>
  )
}
