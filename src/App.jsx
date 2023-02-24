import React from 'react';
import styles from './styles.scss';
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withRouter } from "react-router"
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";


const App = () => {
    return (
        <Router>
            <Breadcrumbs/>
            <div className={styles.content}>
                <Nav/>
                <div className={styles.contentRight}>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/users" element={<Users/>} />
                        <Route path="/users/:id" element={<User/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;