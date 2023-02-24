import React, {useState} from "react";
import {Link, useMatch} from "react-router-dom";

export default function User(){
    const match = useMatch("/users/:id");

    return(
        <div>{match.params.id}</div>
    )
}
