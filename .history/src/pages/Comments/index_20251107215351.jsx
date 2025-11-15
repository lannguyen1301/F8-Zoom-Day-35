import { useState, useEffect } from "react";
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

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((comments) => setComments(comments))
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // setLoading(false)
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
                // giả lập mạng chậm để xuất hiện loading
            });
    }, []);

    return <h1>Comments Page Component</h1>;
}

export default Comments;
