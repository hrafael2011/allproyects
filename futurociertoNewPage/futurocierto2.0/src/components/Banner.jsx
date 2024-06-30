import React from 'react'

const Banner = () => {
  return (
    <div>
      {/*<!--======= BANNER =========-->*/}
  <div id="banner">
    <div className="flex-banner">
      <ul className="slides">
        
        {/*<!--======= BANNER SLIDE 1 =========-->*/}
        <li> <img src="src/assets/images/slider-1.jpg" alt="" /> 
          
          
          {/*<!--======= BANNER TEXT =========-->*/}
          <div className="bnr-txt">
            <h1>Give a <span>helping hand </span> to those who need it!</h1>
            <hr/>
            <p className="font-lora">Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
            
             
            {/*<!--======= BANNER BTN =========-->*/}
            <a href="#." className="btn">LEARN MORE <i className="fa fa-caret-right"></i></a> </div>
        </li>
          {/*<!--======= BANNER SLIDE 2 =========-->*/}
        
        <li> <img src="images/slider-2.jpg" alt="" /> 
          
          {/*<!--======= BANNER TEXT =========-->*/}
          <div className="bnr-txt left-text">
            <h1>Give a <span>helping hand </span> to those who need it!</h1>
            <hr/>
            <p className="font-lora">Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
            
            {/*<!--======= BANNER BTN =========--> */}
            <a href="#." className="btn">LEARN MORE <i className="fa fa-caret-right"></i></a> </div>
        </li>
      </ul>
    </div>
  </div>
    </div>
  )
}

export default Banner
