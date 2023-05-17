import React from 'react'
import Card from './Card.jsx'
import img1 from '../Images/beats_wireless.webp'
import img2 from '../Images/Sd_card.webp'
import img3 from '../Images/Speakers.jpg'
import img4 from '../Images/UBL Headphones.webp'

export default function Products() {
  return (
    <>
    <section  className="container mt-4">
            <div  className="row">
              <h2  className="text-center">Best Sellers</h2>
            </div>
            <div  className="row">
                <Card img={img1} productTitle="Mike" productDescription="A microphone" productPrice="23"/>
                <Card img={img2} productTitle="Mike" productDescription="A microphone" productPrice="23"/>
                <Card img={img3} productTitle="Mike" productDescription="A microphone" productPrice="23"/>
                <Card img={img4} productTitle="Mike" productDescription="A microphone" productPrice="23"/>
                <Card img={img1} productTitle="Mike" productDescription="A microphone" productPrice="23"/>
                <Card img={img2} productTitle="Mike" productDescription="A microphone" productPrice="23"/>
                <Card img={img3} productTitle="Mike" productDescription="A microphone" productPrice="23"/>
                
            </div>
          </section>
    </>
  )
}
