import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

export class LoginJaeyoon extends Component {
    render(){
        return(
            <div  className="LoginJaeyoon">
            <main>
                <div className="logo_box">
                <h1 className="logo">
                    Westagram
                </h1>
            </div>
                <div class="input_box">
                <input className="id_input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input className="pw_input" type="password" placeholder="비밀번호" />
                <button className="login_btn">
                    <Link to="/main-jaeyoon">로그인</Link>
                </button>
            </div>
                <div className="forgot_box">
                <a href="https://www.instagram.com/accounts/password/reset/" class="forgot_pw">비밀번호를 잊으셨나요?</a>
            </div>
            </main>
            </div>
        ) 
        
    }
}

export default LoginJaeyoon;