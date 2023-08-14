import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import ImageSlider from './Components/PruebaBoxNotice';
import ImageSlider2 from './Components/NuevaPrueb';
import BoxNotice from './Components/BoxNotice';
import Image from "./images/bank.png"

const images = [
  {
    src: 'https://via.placeholder.com/200x200',
    alt: 'Descripción de la imagen 1',
    title: 'Título de la imagen 1',
  },
  {
    src: 'https://via.placeholder.com/200x201',
    alt: 'Descripción de la imagen 2',
    title: 'Título de la imagen 2',
  },
  {
    src: 'https://via.placeholder.com/200x202',
    alt: 'Descripción de la imagen 3',
    title: 'Título de la imagen 3',
  },
  {
    src: 'https://via.placeholder.com/200x203',
    alt: 'Descripción de la imagen 4',
    title: 'Título de la imagen 4',
  },
]

const Notice =[
  {
    src: 'https://via.placeholder.com/200x201',
    alt: 'Descripción de la imagen 1',
    title:"Titulo 1, Titulo 1, Titulo 1, Titulo 1", 
    content: "Lorem ipsum dolor 1, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.", 
    date:"December 29, 2023"
  },
  {
    src: 'https://via.placeholder.com/200x202',
    alt: 'Descripción de la imagen 2',
    title:"Titulo 2, Titulo 2, Titulo 2, Titulo 2", 
    content: "Lorem ipsum dolor 2, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.", 
    date:"December 30, 2023"
  },
  {
    src: 'https://via.placeholder.com/200x203',
    alt: 'Descripción de la imagen 3',
    title:"Titulo 3, Titulo 3, Titulo 3, Titulo 3", 
    content: "Lorem ipsum dolor 3, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.", 
    date:"December 31, 2023"
  },
]

const images2=[
  {
    src:"http://localhost:5173/bank.png",
    alt:"Descripcion de la imagen 1",
    title:"Bancos",
    content: "Lorem ipsum dolor 1, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.", 
  },
  
  {
    src:"http://localhost:5173/casa.png",
    alt:"Descripcion de la imagen 2",
    title:"Clubes Escolares",
    content: "Lorem ipsum dolor 1, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.", 
  },
  
  {
    src:"http://localhost:5173/cruz.png",
    alt:"Descripcion de la imagen 3",
    title:"Pastoral Educativa",
    content: "Lorem ipsum dolor 1, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.", 
  },
]


const App = () => {
  
  
  return (
    <div >
        <Header/>
        <Body
          Notice={Notice}
          images2={images2}
        />
        <BoxNotice
          Notice={Notice}
        />
        <ImageSlider
          images={images}
        />
        <ImageSlider2
          images={images}
        />
    </div>
  )
}

export default App
