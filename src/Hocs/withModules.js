import React from 'react';
import styles from "../styles.scss";
import Nav from "../components/Nav/Nav";

export function withModules(Component) {
    return (
        <div>
            <div className={styles.breadCrumbs}></div>
            <div className={styles.content}>
                <Nav/>
                <div className={styles.page}>
                    <Component/>
                </div>
            </div>
        </div>
    );
}