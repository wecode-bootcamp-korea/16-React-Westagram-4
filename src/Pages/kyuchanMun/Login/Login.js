import React from "react";
import "./Login.scss";
import {Link} from 'react-router-dom';


class LoginKyuchan extends React.Component{
  render(){
  return(
    <div className="Login">
    <section> 
        <div className="westagram">westagram</div>
        <div className="inputBox">
            <input id="firstInput" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
            <input id="secondInput" type="password" placeholder="비밀번호"/>
            <button type="button" id="btn"><Link to="/main-kyuchan">로그인</Link></button>
        </div>
        <span>비밀번호를 잊으셨나요?</span>
    </section>
    </div>
  
  );
  }
}
export default LoginKyuchan;