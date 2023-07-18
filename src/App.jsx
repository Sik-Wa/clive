import { useState } from 'react'
import './App.css'
import img5 from './assets/image5.jpeg'
import img4 from './assets/image4.jpeg'
import img3 from './assets/image3.jpeg'
import img2 from './assets/image2.jpeg'
import img1 from './assets/image1.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
      <img src={img5} alt=""/>
      <h1>Hello,Dustin</h1>
      </nav>
      <p>Answer the questions in chat, and we will find a tour based on your interests</p>
      <div class="App-text">
        <h2>Popular Tours</h2>
        <p>See All</p>
      </div>
      <div class="pic-thumbnail">
        <img src={img1} alt=""/>
        <img src={img2} alt=""/>
        <img src={img3} alt=""/>
      </div>
      <div class="App-text2">
        <h2>Based on your location</h2>
        <a href="https://maps.google.com"target="self">See Map</a>
      </div>
      <div class="map">
        <img src={img4} alt=""/>
      </div>
    </div>
  )
}

export default App
