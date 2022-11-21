import React, {useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../../pages/Home'
import Dashboard from '../../pages/Dashboard'
import UsersDetail from '../../pages/UsersDetail'
import ContactUs from '../../pages/ContactUs'
import PageNotFound from '../../pages/PageNotFound'
import LoginForm from '../elements/LoginForm'
import SignUPForm from '../elements/SignUPForm'
import { app, db } from '../../firebaseauth.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const RoutesPage = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();


    // useEffect(() => {
    //     let authToken = sessionStorage.getItem("auth");
    //     if (!authToken) {
    //         navigate("/login");
    //     }

    // }, [navigate]);


    const handleAction = (id) => {
        const authentication = getAuth();
        console.log(id)

        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
                .then((res) => {
                    navigate("/dashboard");
                    sessionStorage.setItem("auth", res._tokenResponse.refreshToken);

                })
                .catch((e) => {
                    if (e.code === "auth/wrong-password") {
                        toast.error("please check the password");
                    }
                    if (e.code === "auth/user-not-found") {
                        toast.error("please check the email");
                    }
                });
        }
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, email, password)
                .then((res) => {
                    navigate("/dashboard");
                    sessionStorage.setItem("auth", res._tokenResponse.refreshToken);

                    setDoc(doc(db, "users", res.user.uid), {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password
                    });

                })
                .catch((e) => {
                    if (e.code === "auth/wrong-password") {
                        toast.error("please check the password");
                    }
                    if (e.code === "auth/user-not-found") {
                        toast.error("please check the email");
                    }

                });
        }
    }

    return (
        <>
            {/* <BrowserRouter>
                <Base> */}
            <ToastContainer />
            <Routes >
                <Route index path='/' element={<Home />} />
                <Route path='/login' element={<LoginForm
                    title='Login'
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleAction={() => handleAction(1)}
                />} />
                <Route path='/register' element={<SignUPForm
                    title='SignUp'
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleAction={() => handleAction(2)} />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/userdetail' element={<UsersDetail />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
            {/* </Base>
            </BrowserRouter> */}
        </>
    )
}

export default RoutesPage