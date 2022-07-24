import { useContext, useEffect, useRef } from "react"
import { Col, Container } from "react-bootstrap"
import browserHistory from "../../browserHistory";
import { SITE_KEY } from "../../config"
import api from '../../utils/api';
import { useNavigate } from "react-router-dom";
import { getStoredAuthToken, storeAuthToken } from "../../utils/authToken";
import { AuthContext } from "../../Authenticate";
import JwtDecode from "jwt-decode"

export default function SignInPage() {

    const email = useRef("");
    const password = useRef("");
    const { isLogin, setLogin, user, setUser } = useContext(AuthContext)

    const navigate = useNavigate();

    const login = async () => {
        if (email.current.value == "" || password.current.value == "") {
            return false;
        }

        try {
            const { token } = await api.post('/sign-in', {
                email: email.current.value,
                password: password.current.value,
            })

            storeAuthToken(token)
            const newUser = JwtDecode(token)
            setLogin(true)
            setUser(newUser)
            browserHistory.push('/')
            navigate('/')
        }
        catch {

        }
    }

    // useEffect(() => {

    //     const token = getStoredAuthToken()
    //     console.log(token)
    //     const getUser = async (token) => {
    //         if (token) {
    //             try {
    //                 await api.post('/verify-token')
    //                 browserHistory.push('/')
    //                 navigate('/')
    //             }
    //             catch {
    //                 return false;
    //             }
    //         } else {
    //             return false;
    //         }
    //     }

    //     getUser(token)

    // }, [])

    return (
        <Container className="login-container py-5 justify-content-center">
            <Col lg={12} md={12} sm={12} className="py-5 text-center">
                <h1 className="fw-300">
                    Sign in
                </h1>
                <h3 className="text-center">To your account</h3>
            </Col>
            <Col lg={6} md={6} sm={8} className=" text-center m-auto">
                <form className="login-form">
                    <div className="form-group mb-3">
                        <input type="email" ref={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="g-recaptcha mt-3" data-sitekey={SITE_KEY}></div>
                    <button type="button" className="bg-gradient-r-p py-3 px-5 border text-white rounded-pill mt-3" onClick={() => { login() }}>Login</button>
                </form>
            </Col>
        </Container>
    )
}