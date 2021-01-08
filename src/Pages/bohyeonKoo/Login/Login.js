import React, { Component } from "react";
import { Link } from 'react-router-dom'; //리액트-라우터-돔 패키지의 기능은 "경로에 따라서 다른 컴포넌트를 보여주는 것"
import { withRouter } from 'react-router-dom';
import './Login.scss';
import logo from '../../../images/bohyeonKoo/Login/logo.png'


export class Login extends Component {

  goToMain = () => {
    this.props.history.push('/Main');
  };

  goToLogin = () => {
    this.props.history.push('/');
  };

  

    render() {
      return ( 
            <div className="login">
               <div className="loginBox">
                  <img  
                  alt="westagram logo"
                  src={logo}
                  onClick={this.goToLogin}
                  />
                  <input className="loginId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                  <input className="password" type="password" placeholder="비밀번호"/>
                  
                  <button 
                  className="btn"
                  onClick={this.goToMain}
                  >
                    로그인
                  </button>
                  
                  <Link to="/find" className="forgotPw">
                    비밀번호를 잊으셨나요?
                  </Link>
                </div>
            </div>
          );
    }
  }
  

  export default withRouter(Login);

  //링크 방법과, 위드 라우터 방법의 차이는? (위드 라우터는, 추가로 처리해야하는 로직이 있는 경우)

