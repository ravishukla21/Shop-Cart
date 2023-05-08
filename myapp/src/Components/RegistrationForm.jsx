import React from 'react'
import "./RegistrationForm.css";

const RegistrationForm = () => {
    return (
        <div className='body'>
            <div className='container'>
                <header>Registration</header>

                <form >
                    <div className='form first'>
                        <div className='details personal'>
                            <span className='title'>Personal Details</span>
                            <div className='fields'>
                                <div className='input-field'>
                                    <label>Full Name</label>

                                    <input type="text" placeholder='Enter your name' required />

                                </div>
                                <div className='input-field'>
                                    <label>Date of Birth</label>

                                    <input type="text" placeholder='Enter your birth date' required />

                                </div>
                                <div className='input-field'>
                                    <label>Email</label>

                                    <input type="text" placeholder='Enter your email' required />

                                </div>
                                <div className='input-field'>
                                    <label>Full Name</label>

                                    <input type="text" placeholder='Enter your name' required />

                                </div>
                                <div className='input-field'>
                                    <label>Date of Birth</label>

                                    <input type="text" placeholder='Enter your birth date' required />

                                </div>
                                <div className='input-field'>
                                    <label>Email</label>

                                    <input type="text" placeholder='Enter your email' required />

                                </div>

                                <div className='input-field'>
                                    <label>Full Name</label>

                                    <input type="text" placeholder='Enter your name' required />

                                </div>
                                <div className='input-field'>
                                    <label>Full Name</label>

                                    <input type="text" placeholder='Enter your name' required />

                                </div>

                            </div>

                        </div>

                    </div>

                    <div >
                    <button style={{backgroundColor:"white",border:"2px solid red",color:'black',width:"192px",height:'35px',margin:"10px 0px",cursor:"pointer"}}>ADD</button>
                    </div>


                </form>

            </div>



        </div>
    )
}

export default RegistrationForm