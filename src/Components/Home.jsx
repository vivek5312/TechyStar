import React from 'react'
import vg from "../asset/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube,AiFillInstagram} from "react-icons/ai";

function Home() {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>
<div className="home2">
    <img src={vg} alt='Graphics'/>
    <div>
        <p>
        We are your one and only solution to the tech problem you face 
        everyday.We are leading tech company whose aim is to increase 
        the problem solving ability in children. 
        </p>
    </div>
</div>

<div className="home3" id='about'>
    <div>
        <h1>Who  we are?</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloribus ipsa iste possimus velit hic veritatis, laborum nemo 
            dignissimos quia molestias placeat maxime ipsam ut commodi 
            facilis voluptate eaque unde debitis? Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Hic  deserunt
            provident id. Ratione delectus labore fuga, 
            laborum obcaecati animi. Libero voluptas, vel distinctio 
            a tempore numquam saepe sit dolorum nobis!
        </p>
    </div>
</div>
<div className="home4" id='brands'>
    <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s",
            }}>
           <AiFillGoogleCircle/>
           <p>Gogle</p>
            </div>

            <div style={{
                animationDelay:"0.50s",
            }}>
           <AiFillAmazonCircle/>
           <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.75s",
            }}>
           <AiFillYoutube/>
           <p>Youtube</p>
            </div>

            <div style={{
                animationDelay:"1",
            }}>
           <AiFillInstagram/>
           <p>Instagram</p>
            </div>

        </article>
    </div>
</div>
    </>

  )
}

export default Home
