// import React from "react";

// import "./styles/Login.scss";

// function Login(props) {
//     return (
//         <div className="steps">
//             <div class="dude-wrapper">
//                 <div class="dude"></div>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";

import "./styles/Login.scss";
function Login(props) {
    const [emails, SetEmails] = useState("");
    const [passwords, SetPasswords] = useState("");
    const [show, SetShowPasword] = useState(false);
    const history = useHistory();

    const submits = async (e) => {
        e.preventDefault();
        console.log(emails, passwords);
        try {
            const results = await auth.signInWithEmailAndPassword(
                emails,
                passwords
            );
            console.log(results);
            history.push("/");
        } catch (err) {
            console.log({ html: err.message, classes: "red" });
        }
    };
    return (
        <div className="main_login">
            <form onSubmit={(e) => submits(e)}>
                <div className="main">
                    <h1 className="">Login page</h1>
                    <div className="email">
                        <div className="icons">
                            <i class="material-icons"></i>
                        </div>
                        <div className="right_box">
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={emails}
                                name="email"
                                onChange={(e) => SetEmails(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="password">
                        <div className="icons">
                            <p
                                onClick={() => SetShowPasword(!show)}
                                className="btn_page"
                            >
                                {show ? (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBjObZUh2HM4ZsdokpWI744O3Xj3g2Ovy2w&usqp=CAU"
                                        className="m_btn"
                                    />
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bzsNLr__FnpQyVsbmadZkQYocyexYapQtknbdTnIrfh58gU-c_oxYCd9sdIrFxVe_pk&usqp=CAU"
                                        className="m_btn"
                                    />
                                )}
                            </p>
                        </div>
                        <div className="right_box">
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Enter password"
                                value={passwords}
                                name="password"
                                onChange={(e) => SetPasswords(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="submits">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
