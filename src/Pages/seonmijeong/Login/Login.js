import React from "react";
import "./Login.scss";
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor () {
        super();
        this.state = {
            color: '#B2DFFC',
            IdValue: '',
            PwValue:''
        };
    }

    handleIdInput = (event) => {
        this.setState({
            IdValue: event.target.value,
            color: this.state.IdValue.includes('@') && this.state.PwValue.length > 3 ? 'rgb(0, 149, 246)' : '#B2DFFC'
        })
    }

    handlePwInput = (event) => {
        this.setState({
            PwValue: event.target.value,
            color: this.state.IdValue.includes('@') && this.state.PwValue.length > 3 ? 'rgb(0, 149, 246)' : '#B2DFFC'
        })
    }



    render() {
        return (
                <div className="Login">
                    <div className="loginBoxDiv">
                        <header>Westagram</header>
                        <main>
                            <input className ="IdInput" onChange={this.handleIdInput} type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            <input className="PasswordInput" onChange={this.handlePwInput} type="password" placeholder="비밀번호"/>
                            <Link to="/main" style={{textDecoration: 'none'}}>
                                <button className="loginBtn" style={{ backgroundColor: this.state.color}}>로그인</button>
                            </Link>
                        </main>
                
                        <footer className="forgetPw">비밀번호를 잊으셨나요?</footer>
                    </div>
                </div>
        )
    }
}

export default Login;