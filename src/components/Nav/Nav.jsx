import React from "react";
import styles from "./Nav.scss";
import {Link} from "react-router-dom";


export default function Nav() {

    const users = ["vasya", "peter"]

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>

                <ul className={styles.navSubList}>
                    <li>
                        <Link to={`/users/${users[0]}`}>Vasya</Link>
                    </li>
                    <li>
                        <Link to={`/users/${users[1]}`}>Peter</Link>
                    </li>
                </ul>


            </ul>
        </nav>
    )
}