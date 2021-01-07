import React, {Component} from 'react';
import { Link } from 'react-router-dom'; //링크가 {} 들어잇는 이유는 default 값일때만 쓰는거다.
import {SIGNUP_API, SIGNIN_API} from '../../../config'
import './Login.scss';
// const API = "http://3.35.19.3:8000/account/signin"; //API 가 대문자인 이유 변하지 않는 변수는 대문자로 써주자는 컨벤션

export class LoginJaeyoon extends Component {
    constructor (){
        super();
        this.state={
            id: "",
            password: "",
        };
    }

    // //로그인 id
    handleIdChange =(e)=>{
        this.setState({id: e.target.value}); //event 의 약자 e이다. 이벤트가 발생했을때의 값을 받는것. 핸들아이디체인지가 실행되는 그 요소를 뜻하는게 target 그속의 value 
    };

    // //로그인 password
    handlePasswordChange =(e)=>{
        this.setState({password: e.target.value});
    };

    //위의 로그인 id 와 로그인 password 중복되는게 있으니 합쳐버리자
    // handleLoginInfo = (e)=>{
    //     const {id, value} = e.taget; // 계산된 속성명 = destructuring
    //     this.setState({[id]: value}); //[id]인 이유 는 문법적으로 위에 와 구분해주기 위해  그냥 id 쓰면 taget id 로 인식 못한다.
    // }

    handleButton = (e) => {
        fetch("SIGNUP",{
            method: "POST",
            body: JSON.stringify({
                //Json.stingify  안의 인자로 들어간다 {} 가 
                email: this.state.id,   //id가 아니라 email 인 이유는 백엔드와 소통해서정하는 거기 때문에 소통해서 바꾸면된다.
                password: this.state.password,
            }),
        })
        .then(response => response.json()).then(result =>{console.log({result}); localStorage.setItem("token", result.Authorization)});
        
        };

    render(){
        const activateBtn = (this.state.id.length && this.state.password.length) !== 0; // 이값은 boolean
        const {id} = this.setState;
        console.log({ id });
        console.log("id :", this.state.id, "pw :", this.state.password);

        return(
            <div  className="LoginJaeyoon">
            <main>
                <div className="logo_box">
                <h1 className="logo">
                    Westagram
                </h1>
            </div>
                <div className="input_box">
                <input 
                className="id_input"
                id="id" 
                type="text" 
                placeholder="전화번호, 사용자 이름 또는 이메일" 
                value={this.state.id}
                onChange={this.handleIdChange} // onchange={this.handleIdChange()} 이렇게 적으면 즉시실행이라 안됨! 즉시실행하면 원하는 방향으로 가지 않을 수 있다.
                // 중요! 중요!  onChange={()=>this.handleIdChange()} 이건 즉시 실행 안됨 애로우 함수형 자체가 이벤트가 발생하고 나서 콜백으로 함수를 부르는 구조로 되어있기 때문에!!
                />
                <input 
                className="pw_input" 
                id="password"
                type="password" 
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
                <button className={activateBtn ? "active" : ""}>
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