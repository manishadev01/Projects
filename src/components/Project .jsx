import React from 'react'
import './Project.css';
export default function Project() {
    return (
        <>
    
            <div className='container '>
                <div className='col-lg-12 image'>
                    <img src='img.png' />
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className='htag'>
                            <h6>SOME RANDOM TEXT,SOME RANDOM</h6>
                            <h5>TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5 '>
                <div className='row'>

                    <div className='col-lg-6 login5 '>
                        <h5>LOGIN</h5>
                        <div className='line'>
                         <b><hr /></b>
                        </div>
                    </div >

                    <div className='col-lg-6 sign6 '>
                        <h6>SIGNUP</h6>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='col-lg-12 '>
                    <form className='data'>

                        <input type='Email Address' placeholder='Email Address' /><br></br>
                        <input type=' Passward' placeholder=' Passward' />
                        <br></br>
                        <button>LOGIN</button>
                        <p>Forget Passward?</p>
                        <h6>or login with</h6>
                    </form>
                </div>
            </div>

            <div className='container'>
                <div className='row'>

                    <div className='col-lg-4 pic'>
                        <div className="left">
                            <img className='google' src='google-symbol.png' />
                        </div>
                        <div className="left">
                            <img className='facebook' src="facebook.png" />
                            {/* <i class="fa-brands fa-facebook-f facebook-icon"></i> */}
                        </div>
                        <div className="left">
                            <img className='twitter' src="twitter.png" />
                        </div>

                    </div>
                </div>
            </div>

            <div className='container ptag'>
                <div className='row'>
                    <h6>Don,t have an account?<span>Create new!</span></h6>
                    <h5>By signing up,you are agree with our<span>Terms & conditons</span></h5>
                </div>
            </div>
            
        </>

    )
}