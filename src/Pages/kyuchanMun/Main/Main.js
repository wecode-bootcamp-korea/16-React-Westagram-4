import React from "react";
import './Main.scss';
import {Link} from 'react-router-dom';

class MainKyuchan extends React.Component{
  render(){
    return(
      <div className="Main">
        <nav>
          <div className="nav_wrap">
            <div className="nav_westagram"><Link to="/login-kyuchan"> Westagram </Link></div>
            <input className="nav_input" type="string" placeholder="검색"></input>
            <div className="nav_image">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
            </div>
          </div>
        </nav>
        <main>
          <div className="feeds">
            <article>

            </article>
          </div>
          <div className="main-right">

          </div>
        </main>
      </div>
    );
  }
}

export default MainKyuchan;