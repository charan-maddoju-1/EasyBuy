import {Component} from "react"

import './index.css'
import Cookies from "js-cookie"

class LoginForm extends Component{
    state={
        username:"",
        password: "",
        showSubmitError: false,
        errorMsg: ""
    }

    onSubmitSuccess=jwtToken=>{
        Cookies.set("jwt_token",jwtToken,{expires:1});
        this.props.navigate("/", { replace: true });

    }

    onSubmitFailure=errorMsg=>{
        this.setState({showSubmitError:true,errorMsg});
    }

    submitForm=async event=>{
        event.preventDefault()
        const {username,password}=this.state
        const userDetails={username,password}
        const url='https://apis.ccbp.in/login'
        const options={
            method:'POST',
            body:JSON.stringify(userDetails)
        }
        const response=await fetch(url,options)
        const data=await response.json()
        if(response.ok===true){
            this.onSubmitSuccess(data.jwt_token)
        }
        else{
            this.onSubmitFailure(data.error_msg)
        }
    }

    onChangeName=event=>{
        this.setState({username:event.target.value});
    }

    onChangePassword=event=>{
        this.setState({password: event.target.value});
    }

    renderPasswordField=()=>{
        const {password}=this.state;
        return (
            <>
                <label className="input-label" htmlFor="password"> PASSWORD </label>
                <input 
                    type='text'
                    id='password'
                    className="user-input-field"
                    value={password}
                    onChange={this.onChangePassword}
                />
            
            </>
        )
    }

    renderUserNameField=()=>{
        const {username}=this.state;
        return (
            <>
                <label className="input-label" htmlFor="username">
                    USERNAME
                </label>
                <input 
                    type='text'
                    id='username'
                    className="user-input-field"
                    value={username}
                    onChange={this.onChangeName}
                />
            </>
        )
    }


    render(){
        return (
            <div className="login-form-container">
                <img
                    src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?ga=GA1.1.777678278.1745931066&semt=ais_hybrid&w=740"
                    className="login-website-logo-mobile-img"
                    alt="Website Logo"
                />

                <img
                    src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?ga=GA1.1.777678278.1745931066&semt=ais_hybrid&w=740"
                    className="login-image"
                    alt="Website Logo"
                />


                <form className="form-container" onSubmit={this.submitForm}>
                    <img
                        src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?ga=GA1.1.777678278.1745931066&semt=ais_hybrid&w=740"
                        className="login-website-logo-desktop-img"
                        alt="Website Logo"
                    />
                    <div className="input-container">{this.renderUserNameField()}</div>
                    <div className="input-container">{this.renderPasswordField()}</div>
                    <button type='submit' className="login-button"> Login </button>
                </form>
                

            </div>
        )
    }
}

export default LoginForm;