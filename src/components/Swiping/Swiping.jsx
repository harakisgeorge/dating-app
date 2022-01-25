import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import {AiFillHeart,AiFillStar} from "react-icons/ai"
import {GiCancel} from "react-icons/gi"
import data from './data'
import {   Link } from "react-router-dom";

import "./Swiping.css"
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = () => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }
    
  }, [index])

  return (
    <>      

    <section className='section'>

      <div className='section-center'>

        {people.map((person, personIndex) => {
          const { id, image, name, title, text, age } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <>
            <article className={position} key={id}>
              <div className='image_name'>
                <img src={image} alt={name} className='person-img' />
                <h4 className='name'>{name}, {age}</h4>
              </div>
              <p className='title'>{title}</p>
              <p className='text'>{text}</p>
              <div className='buttons'>
                <button className='left' onClick={nextSlide}>
                    <GiCancel />
                </button>
                <button className='middle' onClick={nextSlide}>
                    <AiFillStar />
                </button>
                <button className='right' onClick={nextSlide}>
                    <AiFillHeart />
                </button>
            </div>
            <button className='goBackButton'><Link to="/"><span >Back</span></Link></button>

            </article>
            </>
          )
        })}
       
      </div>
    </section>
    </>
  )
}

export default App