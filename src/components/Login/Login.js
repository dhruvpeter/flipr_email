import React , {useState} from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'


export default function Login() {
    const [username, setusername] = useState('');
    const [password,setPassword] = useState('');

    return (
        
        <div>
            <div class="row">
                <div class="col-md-6 mx-auto p-0">
                    <div class="card">
                        <div class="login-box">
                            <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                                <div class="login-space">
                                    <div class="login">
                                        <div class="group"> <label for="user" class="label">Email Address</label> <input id="user" type="text" class="input" placeholder="Enter your email address" value={username} onChange = {(e) => setusername(e.target.value)}/> </div>
                                        <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password" value={password} onChange = {(e) => setPassword(e.target.value)}/> </div>
                                        <div className="sign">  
                                        <div class="group"> <input type="submit" class="button" value="Sign In" onClick={() => console.log(username,password)}/> </div>
                                        <div class="group"> <button  className="button"><FontAwesomeIcon icon={faGoogle} style={{marginRight:"10%",fontSize:"1.5rem"}}  /><span className="buttonText">Sign in with Google</span></button> </div>
                                        </div>
                                        <div class="hr"></div>
                                        {/* <div class="foot"> <a href="#">Forgot Password?</a> </div> */}
                                    </div>
                                    <div class="sign-up-form">
                                        <div class="group"> <label for="user" class="label">Email Address</label> <input id="user" type="text" class="input" placeholder="Enter your email address" value={username} onChange = {(e) => setusername(e.target.value)}/> </div>
                                        <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Create your password"value={password} onChange = {(e) => setPassword(e.target.value)}/> </div>
                                   
                                        {/* <div class="group"> <label for="pass" class="label">Email Address</label> <input id="pass" type="text" class="input" placeholder="Enter your email address"/> </div > */}
                                        <div className="sign"> 
                                        <div class="group"> <input type="submit" class="button" value="Sign Up"/> </div></div>
                                        <div class="hr"></div>
                                        {/* <div class="foot"> <label for="tab-1">Already Member?</label> </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
