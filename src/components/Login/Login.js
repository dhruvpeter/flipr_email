import React from 'react'
import './Login.css'
import {useGoogleLogin} from 'react-google-login'
import {refreshTokenSetup} from './refreshToken'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import gimg from './search.png'
import axios from 'axios'
const clientId = '898077769266-u3tg6qqnkfa8848qejgr45f1sr432kat.apps.googleusercontent.com'

export default function Login() {
    const onSuccess = (res) => {
        console.log('Login Success : currentUser',res.profileObj);
        refreshTokenSetup(res);
    };
    const onFailure = (res) =>{
        console.log('Login failed : res:',res);
    };
    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });

    const onSubmit = (e) => {
        console.log(e.preventDefault());
    }
    return (
        
        <div>
            <div class="row">
                <div class="col-md-6 mx-auto p-0">
                    <div class="card">
                        <div class="login-box">
                            <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                                <div class="login-space">
                                    <div class="login">
                                        <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" placeholder="Enter your username"/> </div>
                                        <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password"/> </div>
                                        <div class="group"> <input id="check" type="checkbox" class="check" checked/> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                                        <div class="group"> <input type="submit" class="button" value="Sign In" onClick={onsubmit}/> </div>
                                        <div class="group"> <button onClick={signIn} className="button"><FontAwesomeIcon icon={faGoogle} style={{marginRight:"10%",fontSize:"1.5rem"}}  /><span className="buttonText">Sign in with Google</span></button> </div>
                                        <div class="hr"></div>
                                        <div class="foot"> <a href="#">Forgot Password?</a> </div>
                                    </div>
                                    <div class="sign-up-form">
                                        <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" placeholder="Create your Username"/> </div>
                                        <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Create your password"/> </div>
                                        <div class="group"> <label for="pass" class="label">Repeat Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Repeat your password"/> </div>
                                        <div class="group"> <label for="pass" class="label">Email Address</label> <input id="pass" type="text" class="input" placeholder="Enter your email address"/> </div >
                                        <div class="group"> <input type="submit" class="button" value="Sign Up"/> </div>
                                        <div class="hr"></div>
                                        <div class="foot"> <label for="tab-1">Already Member?</label> </div>
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
