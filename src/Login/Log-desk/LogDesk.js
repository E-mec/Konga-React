import fb from './fb.png';
import google from './google.webp';
import './LogD.css';


export default function LogDesk() {
    return(
        <>
        <div className="log-box">
            <div className="log-aside">

                {/* LOG-HEAD*/}
                <div className="log-head">
                    <div className="log-head-main">
                        <h5 className="log-in">Login</h5>
                        <a href="<" className="close">
                        <svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg" aria-label="delete" class="" name="delete"><path d="M17.05 14.929a1.5 1.5 0 1 1-2.12 2.121l-5.935-5.934-5.934 5.934a1.497 1.497 0 0 1-2.121 0 1.5 1.5 0 0 1 0-2.12l5.934-5.935L.94 3.061A1.5 1.5 0 1 1 3.06.939l5.935 5.935L14.93.939a1.5 1.5 0 1 1 2.12 2.122l-5.934 5.934 5.935 5.934z" fill="#C2C2C2" fill-rule="nonzero"></path></svg>
                        <span className='close-span'>Close</span>
                        </a>
                    </div>
                </div>

                {/* LOG-FORM */}
                <div className="log-form">
                    <div className="log-form-1">
                        <form className="log-form-main">
                            {/* Input Email */}
                            <div className="log-email">
                                <label className="lab">Email Address Or Phone Number</label>
                                <input type='text' className="form-inp" placeholder="Enter Email Address OR Phone Number"/>
                            </div>

                            {/* Password */}
                            <div className="log-email">
                                <label className="lab lab-pass">Password
                                <a href="frgt" className="forgot">Forgot Password?</a>
                                </label>
                                <input className="password" type='password' placeholder="Enter Password"/>
                                <a href="show" className="pass-show">Show</a>
                            </div>

                            {/* Log button */}
                            <div className="Login-btn">
                                <button className="log-btn-main">Login</button>
                            </div>
                        </form>

                        {/* Or */}
                        <div className="or">
                            <span>OR</span>
                        </div>

                        <div className="fb-g">
                            <a href="log-fb" className="log-fb">
                                Login With
                                <img src={fb} alt='img' className='with-log' />
                            </a>

                            <a href="log-fb" className="log-fb">
                                Login With
                                <img src={google} alt='img' className='with-log' />
                            </a>
                        </div>

                    </div>
                </div>

                {/* SIGN UP */}
                <div className="sign-up">
                    <div className='sign-up-box'>
                        {/* <Link>Don't have an account? Sign Up</Link> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}