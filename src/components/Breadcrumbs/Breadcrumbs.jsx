import React from "react";
import {Link,useLocation } from 'react-router-dom';
import styles from "./Breadcrumbs.scss";

export default function Breadcrumbs(props){
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path !== '');
    let breadcrumb = '';
    return (
        <div className={styles.breadcrumbs}>
            <Link to="/">home /</Link>
            {paths.map((path, index) => {
                breadcrumb += '/' + path;
                if (index === paths.length - 1) {
                    return <span key={index}>{path}</span>
                }
                return (
                    <span key={index}>
            <Link to={breadcrumb}>{path}</Link> /&nbsp;
          </span>
                )
            })}
        </div>
    )
}

