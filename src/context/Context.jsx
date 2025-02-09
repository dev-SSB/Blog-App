import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext();

const Context = (props) => {

  const defaultBlogs = [
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://media.istockphoto.com/id/1500801522/photo/modern-technology-and-networking-concept-woman-using-laptop-tablet-and-smartphone-with.jpg?s=2048x2048&w=is&k=20&c=6Q8m0il3Gy_Pghg_R7y7FZJfSrEHrbvotYbtkJNDdnc=",
      user:"Shivprasad Bodke",
      date:"30 Jan 2025",
      header:"Building Your Own API",
      information:"Application Programming Interface (API), often referred to as web API, is an interface that allows two systems to communicate with each other (share data and access resources).s",
      tags:"Data Exchange"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://images.unsplash.com/photo-1675557010061-315772f6efef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Jonathan Kemper",
      date:"30 Dec 2025",
      header:"ChatGPT just dipped its toes into the world of AI agents",
      information:"ChatGPT is a generative artificial intelligence chatbot developed by OpenAI and launched in 2022. It is currently based on the GPT-4o large language model (LLM).",
      tags:"Artificial Intelligence"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Rob Thubron",
      date:"30 Dec 2025",
      header:"Most Anticipated PC Games of 2025",
      information:"A personal computer game, also known as a computer game or abbreviated PC game, is a video game played on a personal computer (PC). ",
      tags:"Game"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://images.unsplash.com/photo-1729934746958-857e5b082dcc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Steve Walton",
      date:"30 Dec 2025",
      header:"Nvidia GeForce RTX 5090 Review",
      information:"The NVIDIA® GeForce RTX™ 5090 is the most powerful GeForce GPU ever made, bringing game-changing capabilities to gamers and creators. ",
      tags:"GPU"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1687119905581-b12b953d37b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Zo Ahmed ",
      date:"30 Dec 2025",
      header:"First-ever data center on the Moon set to launch next month",
      information:"The self-contained facility promises to offer unparalleled data security and environmental benefits",
      tags:"Hardware"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Luke Chesser",
      date:"30 Dec 2025",
      header:"Speedcurve Performance Analytics",
      information:"Track web performance, fix issues and boost user engagement. Expand your team's capability and culture with coaching from the most experienced folks in web performance.",
      tags:"DashBoard"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1728978926426-18fdb1d00e8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Zyanya Citlalli",
      date:"30 Dec 2025",
      header:"Speedcurve Performance Analytics",
      information:" A smart speaker with a touchscreen is known as a smart display. It is a smart device that integrates conversational user interface with display screens to augment voice interaction with images and video. ",
      tags:"Smart Speaker"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://images.unsplash.com/photo-1726566289392-011dc554e604?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"HackerNoon",
      date:"30 Dec 2025",
      header:"Man reading HackerNoon stories and browsing top technology tag pages.",
      information:"A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.",
      tags:"BlockChain"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"SSB",
      date:"30 Dec 2025",
      header:"Anonymous Hacker",
      information:"a programmer who breaks into computer systems in order to steal or change or destroy information as a form of cyber-terrorism",
      tags:"Cyber"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Groot",
      date:"30 Dec 2025",
      header:"Groot and Octocat reading a newspaper",
      information:"Groot is a fictional character voiced by Vin Diesel and portrayed in various forms and capacities via motion capture by Diesel",
      tags:"Toy"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1668473367234-fe8a1decd456?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Galina Nelyubova",
      date:"30 dec 2025",
      header:"Networking Definition & Meaning",
      information:"Networking is the exchange of information and ideas among people with a common profession or other special interest, usually in an informal social setting.",
      tags:"Network"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"YASA Design Studio",
      date:"",
      header:"AI system interface with server login prompt, buttons, blue background.",
      information:"Generative artificial intelligence (generative AI, GenAI, or GAI) is a subset of artificial intelligence that uses generative models to produce text, images, videos, or other forms of data. ",
      tags:"Generative AI"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1726079247228-993af4c05db8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Philip Oroni",
      date:"",
      header:"Chatbot Using GenAI",
      information:"A chatbot (originally chatterbot) is a software application or web interface designed to have textual or spoken conversations. ",
      tags:"ChatBot"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1725907643732-1fad5a20e30d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Philip Oroni",
      date:"",
      header:"3D Render AI Assistant",
      information:"3D rendering is the 3D computer graphics process of converting 3D models into 2D images on a computer.",
      tags:"3D Render"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Planet Volumes",
      date:"",
      header:"3D Render Blog",
      information:"3D renders may include photorealistic effects or non-photorealistic styles. ",
      tags:"Blog"
    },
    {
      id: uuidv4(), // Generate a unique ID
      imageURL:"https://plus.unsplash.com/premium_photo-1720744786864-440bb3ffd11f?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"SSB",
      date:"",
      header:"User InterFace Created Using MERN Stack",
      information:"Application created using MERN Stack. Mongo, Express, Node and React.",
      tags:"MERN Stack"
    },
  ];

  // State to manage blogs
  const [blogs, setBlogs] = useState(defaultBlogs);

  // Load blogs from Local Storage on mount
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    } else {
      localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
      setBlogs(defaultBlogs);
    }

  }, []);

  // Save blogs to Local Storage whenever blogs state changes
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  

   

  return (
    <UserContext.Provider value={ {blogs,setBlogs} }>
      {props.children}
    </UserContext.Provider>
  )
}

export default Context

/*
const [blogs,setBlogs] = useState([
    {
      imageURL:"https://media.istockphoto.com/id/1500801522/photo/modern-technology-and-networking-concept-woman-using-laptop-tablet-and-smartphone-with.jpg?s=2048x2048&w=is&k=20&c=6Q8m0il3Gy_Pghg_R7y7FZJfSrEHrbvotYbtkJNDdnc=",
      user:"Shivprasad Bodke",
      date:"30 Jan 2025",
      header:"Building Your Own API",
      information:"Application Programming Interface (API), often referred to as web API, is an interface that allows two systems to communicate with each other (share data and access resources).s",
      tags:"Data Exchange"
    },
    {
      imageURL:"https://images.unsplash.com/photo-1675557010061-315772f6efef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Jonathan Kemper",
      date:"30 Dec 2025",
      header:"ChatGPT just dipped its toes into the world of AI agents",
      information:"ChatGPT is a generative artificial intelligence chatbot developed by OpenAI and launched in 2022. It is currently based on the GPT-4o large language model (LLM).",
      tags:"Artificial Intelligence"
    },
    {
      imageURL:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Rob Thubron",
      date:"30 Dec 2025",
      header:"Most Anticipated PC Games of 2025",
      information:"A personal computer game, also known as a computer game or abbreviated PC game, is a video game played on a personal computer (PC). ",
      tags:"Game"
    },
    {
      imageURL:"https://images.unsplash.com/photo-1729934746958-857e5b082dcc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Steve Walton",
      date:"30 Dec 2025",
      header:"Nvidia GeForce RTX 5090 Review",
      information:"The NVIDIA® GeForce RTX™ 5090 is the most powerful GeForce GPU ever made, bringing game-changing capabilities to gamers and creators. ",
      tags:"GPU"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1687119905581-b12b953d37b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Zo Ahmed ",
      date:"30 Dec 2025",
      header:"First-ever data center on the Moon set to launch next month",
      information:"The self-contained facility promises to offer unparalleled data security and environmental benefits",
      tags:"Hardware"
    },
    {
      imageURL:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Luke Chesser",
      date:"30 Dec 2025",
      header:"Speedcurve Performance Analytics",
      information:"Track web performance, fix issues and boost user engagement. Expand your team's capability and culture with coaching from the most experienced folks in web performance.",
      tags:"DashBoard"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1728978926426-18fdb1d00e8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Zyanya Citlalli",
      date:"30 Dec 2025",
      header:"Speedcurve Performance Analytics",
      information:" A smart speaker with a touchscreen is known as a smart display. It is a smart device that integrates conversational user interface with display screens to augment voice interaction with images and video. ",
      tags:"Smart Speaker"
    },
    {
      imageURL:"https://images.unsplash.com/photo-1726566289392-011dc554e604?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"HackerNoon",
      date:"30 Dec 2025",
      header:"Man reading HackerNoon stories and browsing top technology tag pages.",
      information:"A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.",
      tags:"BlockChain"
    },
    {
      imageURL:"https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"SSB",
      date:"30 Dec 2025",
      header:"Anonymous Hacker",
      information:"a programmer who breaks into computer systems in order to steal or change or destroy information as a form of cyber-terrorism",
      tags:"Cyber"
    },
    {
      imageURL:"https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Groot",
      date:"30 Dec 2025",
      header:"Groot and Octocat reading a newspaper",
      information:"Groot is a fictional character voiced by Vin Diesel and portrayed in various forms and capacities via motion capture by Diesel",
      tags:"Toy"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1668473367234-fe8a1decd456?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Galina Nelyubova",
      date:"30 dec 2025",
      header:"Networking Definition & Meaning",
      information:"Networking is the exchange of information and ideas among people with a common profession or other special interest, usually in an informal social setting.",
      tags:"Network"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"YASA Design Studio",
      date:"",
      header:"AI system interface with server login prompt, buttons, blue background.",
      information:"Generative artificial intelligence (generative AI, GenAI, or GAI) is a subset of artificial intelligence that uses generative models to produce text, images, videos, or other forms of data. ",
      tags:"Generative AI"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1726079247228-993af4c05db8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Philip Oroni",
      date:"",
      header:"Chatbot Using GenAI",
      information:"A chatbot (originally chatterbot) is a software application or web interface designed to have textual or spoken conversations. ",
      tags:"ChatBot"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1725907643732-1fad5a20e30d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Philip Oroni",
      date:"",
      header:"3D Render AI Assistant",
      information:"3D rendering is the 3D computer graphics process of converting 3D models into 2D images on a computer.",
      tags:"3D Render"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"Planet Volumes",
      date:"",
      header:"3D Render Blog",
      information:"3D renders may include photorealistic effects or non-photorealistic styles. ",
      tags:"Blog"
    },
    {
      imageURL:"https://plus.unsplash.com/premium_photo-1720744786864-440bb3ffd11f?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user:"SSB",
      date:"",
      header:"User InterFace Created Using MERN Stack",
      information:"Application created using MERN Stack. Mongo, Express, Node and React.",
      tags:"MERN Stack"
    },
  ]);


*/