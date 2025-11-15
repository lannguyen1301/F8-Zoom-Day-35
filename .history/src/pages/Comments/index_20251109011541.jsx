import { useState, useEffect } from "react";
import DescComp from "../../components/DescComp";
import HeadingComp from "../../components/HeadingComp";
import FormComp from "../../components/FormComp";
import InputComp from "../../components/InputComp";
import TextAreaComp from "../../components/TextAreaComp";
import ButtonComp from "../../components/ButtonComp";
import LoaderComp from "../../components/LoaderComp";
import ImgComp from "../../components/ImgComp";
import SmallHeadingComp from "../../components/SmallHeading";
import SpanComp from "../../components/SpanComp";

// Styles
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

    // event handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        // 1. Khai báo hàm handleChange để xử lý khi người dùng nhập liệu

        // 2. React tự động truyền vào một "event"(sự kiện) khi người dùng nhập, xóa, hoặc dán nội dung
        // e.target chính là ô input hoặc textarea mà người dùng đang thao tác (const { name, value } = e.target;)

        // 3. "name" là thuộc tính name của input(ví dụ: name = "email"), "value" là giá trị mà người dùng vừa nhập vào(ví dụ: "henry@gmail.com")

        // 4. Cập nhật lại state form bằng setForm()
        // - React lưu trữ dữ liệu form trong bộ nhớ tạm(useState)
        // - Khi gọi setForm(), React sẽ tự động re - render lại giao diện để hiển thị dữ liệu mới
        // - Viết dạng callback (prev => {...}) để luôn lấy dữ liệu mới nhất, tránh bị lỗi khi nhập nhanh
        // setForm((prev) => ({
        //     ...prev,        // Sao chép toàn bộ dữ liệu form cũ (giữ nguyên các ô chưa bị thay đổi)
        //     [name]: value   // Ghi đè ô input tương ứng với "name" bằng giá trị mới "value"
        // }));

        // 5. Sau khi state được cập nhật, React sẽ tự động vẽ lại (render)
        // giúp giao diện hiển thị giá trị mới mà không cần tải lại trang. te) của React với tên gọi là SetForm
    };

    // event handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.body) return;

        const newComment = {
            id: comments.length + 1,
            name: form.name,
            email: form.email,
            body: form.body,
        };

        setComments([...comments, newComment]);
        setForm(initialForm);
    };

    return (
        <>
            <DescComp className={styles.commentWrapper}>
                <HeadingComp>Comment System</HeadingComp>
                <FormComp className={styles.formInner} onSubmit={handleSubmit}>
                    {/* chưa ok */}
                    <InputComp
                        autoFocus
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                        spellCheck
                    />
                    {/* chưa ok */}
                    <InputComp
                        autoFocus
                        name="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        className={styles.inputEmail}
                        spellCheck
                    />

                    {/* đã ok */}
                    <TextAreaComp
                        value={form.body}
                        onChange={handleChange}
                        className={styles.textarea}
                    />

                    <ButtonComp className={styles.btn} type="submit">
                        Send Comment
                    </ButtonComp>
                </FormComp>
                <DescComp className={styles.commentList}>
                    {loading ? (
                        <LoaderComp />
                    ) : (
                        comments.map((comment) => (
                            <DescComp
                                className={styles.commentCard}
                                key={comment.id}
                            >
                                {/* <DescComp className={styles.avatar}>
                                    <ImgComp name={comment.name} />
                                </DescComp> */}
                                <ImgComp name={comment.name} />

                                <DescComp className={styles.commentContent}>
                                    <DescComp className={styles.commentHeader}>
                                        <DescComp>
                                            <SmallHeadingComp>
                                                {comment.name}
                                            </SmallHeadingComp>
                                            <SpanComp>{comment.email}</SpanComp>
                                        </DescComp>
                                        <SpanComp>2 hrs ago</SpanComp>
                                    </DescComp>
                                    <DescComp className={styles.text}>
                                        {comment.body}
                                    </DescComp>
                                </DescComp>
                            </DescComp>
                        ))
                    )}
                </DescComp>
            </DescComp>
        </>
    );
}

export default Comments;
