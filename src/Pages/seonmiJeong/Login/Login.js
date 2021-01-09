import React, {Component} from "react";
import './Login.scss';
// import { Link } from 'react-router-dom';
import {SERVER, SIGNUP_API, SIGNOUT_API} from '../../../config'


class LoginSeonmi extends Component {
    constructor () {
        super();
        this.state = {
            IdValue: '',
            PwValue: '',
            isBtnActive: false,
        };
    }

    // 1) 사용자가 입력한 id, pw 데이터 저장 >>> state
    // handleIdInput & handlePwInput 코드 합쳐보기
    handleIdInput = (event) => {
        this.setState({
            IdValue: event.target.value,
        }, () => this.checkBtnState());  // Q. 이게 어떤 원리로 다음에 진행이 되는걸까? 비동기
    };

    handlePwInput = (event) => {
        this.setState({
            PwValue: event.target.value,
        }, () => this.checkBtnState());
    };

    // 2) 버튼 활성화 유효성 검사
    checkBtnState = () => {
        const {IdValue, PwValue} = this.state;
        const isActive = IdValue.includes('@') && PwValue.length > 3;

        this.setState({
            isBtnActive: isActive  //isActive를 isBtnActive로 만들어 isBtnActive로 축약가능
        })
    }
    
    // 3) 버튼 클릭시 Login API 통신 >>> 서버의 메세지에 따라 페이지 이동
    handleButton = () => {
        const {isBtnActive} = this.state;
        const {IdValue, PwValue} = this.state;
        if (!isBtnActive) {
            alert("탈락!")
            return;
        }

        // 3-1) 유효성 검사 통과 해야 실행될 코드
        fetch(SIGNOUT_API, {
            method: "POST",
            body: JSON.stringify({
                email: IdValue,
                password: PwValue,
            }),
        })
            // 3-2) 백엔드 response 처리
            .then((response) => response.json())
            .then((result) => {
                console.log({result});             // 가장 중요. 이것이 어떻게 오느냐에 따라 result.key명을 정하게 됨

                // 3-3) response 메세지에 따른 로직 처리
                if(result.message === "SUCCESS") {
                    localStorage.setItem('token', result.Authorization);      // 항상 Authorization 아님 (백엔드가 정한대로)
                    alert("로그인에 성공하셨습니다.");
                    this.props.history.push("/main-seonmi");
                    return;
                }

                if(result.message === "DUPLICATED_EMAIL") {
                    alert("중복된 이메일입니다.")
                    return;
                }

                alert("회원가입 실패");
        });
    };

    render() {
        const { IdValue, PwValue, isBtnActive } = this.state;
        console.log({ IdValue, PwValue });
        return (
                <div className="Login">
                    <div className="loginBoxDiv">
                        <header>Westagram</header>
                        <main>
                            <input className ="IdInput" onChange={this.handleIdInput} type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            <input className="PasswordInput" onChange={this.handlePwInput} type="password" placeholder="비밀번호"/>
                            <button className={isBtnActive? 'loginBtnActive' : 'loginBtnNotActive'} onClick={this.handleButton}>로그인</button>
                        </main>
                
                        <footer className="forgetPw">비밀번호를 잊으셨나요?</footer>
                    </div>
                </div>
        )
    }
}

export default LoginSeonmi;