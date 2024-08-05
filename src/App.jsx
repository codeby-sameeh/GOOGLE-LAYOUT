import { useState } from 'react'
import './style.css'
import search from '../src/assets/search1.png'
import voice from '../src/assets/voice1.png'
import insta from '../src/assets/instaa1.png'


function App() {
  // const [count, setCount] = useState(0)

  return (

   <div className='main'>
      <div className='nav'>
        <div className='first'>
          <a href="https://about.google/">about</a>
          <a href="https://store.google.com/in/?hl=en-GB">store</a>
        </div>
        <div className='second'></div>
        <div className='third'>
        <a href="">gmail</a>
        <a href="">images</a>
        {/* <div className="item item1">
        </div> */}
        <div className="item item2"></div>
        <div className="item itemth">
        </div>
        </div>
      </div>
      <div className="maain">
        <div className="maain1">
          <img src="src/assets/googlelogo_light_color_272x92dp.png" alt=""  />
          <div className="inp">
            <div className="w">
              <img src={search} alt="" />
            </div>
          <input type="text" />
          <div className="ww">
            <div className="one">
              <img src={voice} alt="" />
            </div>
            <div className="two">
              <img src={insta} alt="" />
            </div>
          </div>
          </div>
         

          <div className='dr'>
            <div className="drr">google search</div>
            <div className="drr">i'am feeling lucky</div>
          </div>
          <li type="none"><span>Google offered in:</span> <a href="" className='aaa'>हिन्दी </a><a href="" className='aaa'>हिन्दी </a><a href="" className='aaa'>বাংলা  </a><a href="" className='aaa'> తెలుగు </a><a href="" className='aaa'> मराठी </a> <a href="" className='aaa'> தமிழ்  </a><a href="" className='aaa'>ગુજરાતી </a><a href="" className='aaa'>ಕನ್ನಡ </a><a href="" className='aaa'> മലയാളം</a> <a href="" className='aaa'> ਪੰਜਾਬੀ </a> </li>
        </div>
      </div>
      <div className="maaain">
        <a href="">india</a>
      </div>
      <div className="maaain1">
        <div className="last1">
          <li><a href="" className='ccc'>advertising</a> <a href="" className='ccc'>business</a> <a href="" className='ccc'>how search wrks</a></li>
        </div>
        <div className="last2"> <li><a href="" className='bbb'>privacy</a> <a href="" className='bbb'>terms</a> <a href="" className='bbb'>settings</a></li></div>
      </div>
   </div>
    
  )
}

export default App
