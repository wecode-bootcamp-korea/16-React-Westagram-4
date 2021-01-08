import React from "react";
import './Login.scss';
import { Link } from 'react-router-dom';

class LoginSeonmi extends React.Component {
    constructor () {
        super();
        this.state = {
            classname: 'loginBtnNotActive',
            IdValue: '',
            PwValue:''
        };
    }

    handleIdInput = (event) => {
        this.setState({
            IdValue: event.target.value,
            classname: this.state.IdValue.includes('@') && this.state.PwValue.length > 3 ? 'loginBtnActive' : 'loginBtnNotActive'
        })
    }

    handlePwInput = (event) => {
        this.setState({
            PwValue: event.target.value,
            classname: this.state.IdValue.includes('@') && this.state.PwValue.length > 3 ? 'loginBtnActive' : 'loginBtnNotActive'
        })
    }

    handleButton = () => {
        console.log("버튼 연결학인")
        /*fetch("api주소", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.id,
                password: this.state.pw,
            }),
        })
            .then((response) => response.json())
            .then((result) => console.log("결과: ", result ));*/
    }

    render() {
        return (
                <div className="Login">
                    <div className="loginBoxDiv">
                        <header>Westagram</header>
                        <main>
                            <input className ="IdInput" onChange={this.handleIdInput} type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            <input className="PasswordInput" onChange={this.handlePwInput} type="password" placeholder="비밀번호"/>
                            <Link to="/main-seonmi" style={{textDecoration: 'none'}}>
                                <button className={this.state.classname} onClick={this.handleButton}>로그인</button>
                            </Link>
                        </main>
                
                        <footer className="forgetPw">비밀번호를 잊으셨나요?</footer>
                    </div>
                </div>
        )
    }
}

export default LoginSeonmi;