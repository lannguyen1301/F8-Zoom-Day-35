// import { useState, useEffect } from "react";
import HeadingComp from "../../components/HeadingComp";
import styles from "./Comments.module.scss";

function Comments() {
    const initialForm = {
        name: "",
        email: "",
        body: "",
    };

    const [form, setForm] = React.useState(initialForm);
    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    return <h1>Comments Page Component</h1>;
}

export default Comments;
