// import { useState, useEffect } from "react";
import HeadingComp from "../../components/HeadingComp";
import styles from "./Comments.module.scss";

function Comments() {
    const initialForm = {
        name: "",
        email: "",
        body: "",
    };

    const [form, setForm] = useState(initialForm);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    return <h1>Comments Page Component</h1>;
}

export default Comments;
