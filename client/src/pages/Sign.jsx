// import React from "react";
// import "./Sign.css";
// import image from "./../assets/image.png";
// import { FaGoogle, FaFacebook } from "react-icons/fa";

// const Signup = () => {
//     return (
//         <div className="signup-container">
//             {/* Left Side - Text & Image */}
//             <div className="signup-left">
//                 <p className="signup-text">“Explore segmented results in 3D, visual insights here.”</p>
//                 <img src={image} alt="3D Illustration" className="visual-image" />
//             </div>

//             {/* Right Side - Signup Form */}
//             <div className="signup-right">
//                 <h2 className="signup-title">Create Account</h2>

//                 {/* Social Login Buttons */}
//                 <div className="social-login">
//                     <button className="google-btn">
//                         <FaGoogle className="icon google-icon" /> Sign up with Google
//                     </button>
//                     <button className="facebook-btn">
//                         <FaFacebook className="icon facebook-icon" /> Sign up with Facebook
//                     </button>
//                 </div>

//                 <p className="or-text">- OR -</p>

//                 {/* Signup Form Fields */}
//                 <input type="text" placeholder="Full name" className="input-field" />
//                 <input type="email" placeholder="Email Address" className="input-field" />
//                 <input type="password" placeholder="Password" className="input-field" />

//                 <button className="signup-btn">Create Account</button>

//                 <p className="login-text">Already have an account? <a href="#">Login</a></p>
//             </div>
//         </div>
//     );
// };

// export default Signup;






import React, { useState } from "react";
import "./Sign.css";
import image from "./../assets/image.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert("✅ Registered successfully!");
                console.log("Registered User:", result);
            } else {
                alert("❌ " + (result.errors?.[0]?.msg || result.msg || "Registration failed"));
            }
        } catch (error) {
            console.error("❌ Registration Error:", error);
            alert("Something went wrong during registration!");
        }
    };

    return (
        <div className="signup-container">
            {/* Left Side - Text & Image */}
            <div className="signup-left">
                <p className="signup-text">“Explore segmented results in 3D, visual insights here.”</p>
                <img src={image} alt="3D Illustration" className="visual-image" />
            </div>

            {/* Right Side - Signup Form */}
            <div className="signup-right">
                <h2 className="signup-title">Create Account</h2>

                {/* Social Login Buttons */}
                <div className="social-login">
                    <button className="google-btn">
                        <FaGoogle className="icon google-icon" /> Sign up with Google
                    </button>
                    <button className="facebook-btn">
                        <FaFacebook className="icon facebook-icon" /> Sign up with Facebook
                    </button>
                </div>

                <p className="or-text">- OR -</p>

                {/* Signup Form */}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="input-field"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="input-field"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-field"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="signup-btn">Create Account</button>
                </form>

                <p className="login-text">Already have an account? <a href="#">Login</a></p>
            </div>
        </div>
    );
};

export default Signup;
