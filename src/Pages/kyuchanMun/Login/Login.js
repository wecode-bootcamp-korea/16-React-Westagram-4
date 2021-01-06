import React from "react";
import "./Login.scss";
import {Link} from 'react-router-dom';


class LoginKyuchan extends React.Component{
  constructor(){
    super();
    this.state ={
      id : "",
      password : "",
      hiddenPw : true,
      productList : [],
    };
  }
  handleIdChange = (e) => {
    this.setState({ id : e.target.value});
  };  
  handlePasswordChange = (e) => {
    this.setState({ password : e.target.value});
  }; 
  showPassword = (e) =>{
    this.setState({hiddenPw : !this.state.hiddenPw});
  }
  
  render(){
    const activBtn = (this.state.id.length && this.state.password.length) !=0
  return(
    <div className="Login">
    <section> 
        <div className="westagram">westagram</div>
        <div className="inputBox">
            <input 
                id="firstInput" 
                type="text" 
                placeholder="전화번호, 사용자 이름 또는 이메일" 
                value={this.state.id}
                onChange={this.handleIdChange}
            />
            <input 
                id="secondInput" 
                type={this.state.hiddenPw ? "password" : "text"}
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handlePasswordChange}
            />
            <span className="show" onClick={this.showPassword}>Show!</span>
            <button 
                type="button" 
                id="btn"
                style={{backgroundColor : activBtn ? "black" : "#64b5f6" }}>로그인</button>
        </div>
        <span><Link to="/main-kyuchan">비밀번호를 잊으셨나요?</Link></span>
    </section>
    </div>
  
  );
  }
}
export default LoginKyuchan;