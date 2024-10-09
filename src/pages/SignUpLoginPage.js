// src/pages/SignUpLoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SignUpLoginPage.css';

const SignUpLoginPage = () => {
    const [profession, setProfession] = useState('');
    const [isLogin, setIsLogin] = useState(false); // State to toggle between sign up and login
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle sign up or login based on the state
        if (isLogin) {
            // Handle login logic (replace with actual authentication logic)
            console.log('Logging in...');
            if (profession === 'Job Applicant') {
                navigate('/internship'); // Direct to internship or job portal
            } else if (profession === 'Job Provider') {
                navigate('/hiringpanel'); // Direct to the hiring panel
            }
        } else {
            // Handle sign up logic (replace with actual registration logic)
            console.log('Signing up...');
            if (profession === 'Job Applicant') {
                navigate('/internship'); // Direct to internship or job portal
            } else if (profession === 'Job Provider') {
                navigate('/hiringpanel'); // Direct to the hiring panel
            }
        }
    };

    return (
        <div className="signup-login-page">
            <form className="signup-login-form" onSubmit={handleFormSubmit}>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                
                {!isLogin && ( // Show profession dropdown only on sign up
                    <>
                        <label htmlFor="profession">Profession:</label>
                        <select
                            id="profession"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            required
                        >
                            <option value="">Select your profession</option>
                            <option value="Job Applicant">Job Applicant</option>
                            <option value="Job Provider">Job Provider</option>
                        </select>
                    </>
                )}

                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                <p>
                    {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
                    <span onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: '#007bff' }}>
                        {isLogin ? ' Sign Up' : ' Login'}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default SignUpLoginPage;

