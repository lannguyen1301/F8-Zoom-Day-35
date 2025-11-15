import { useEffect, useState } from "react";
import clsx from "clsx";
import HeaderComp from "../../components/HeaderComp";
import HeadingComp from "../../components/HeadingComp";
import SubHeadingComp from "../../components/SubHeadingComp";
import LimitText from "../../components/LimitText";
import DescComp from "../../components/DescComp";
import ParaComp from "../../components/ParaComp";
import ModalComp from "../../components/ModalComp";
import useModalComp from "../../components/useModalComp/";
import SpanComp from "../../components/SpanComp";
import ButtonComp from "../../components/ButtonComp";
// import openModal

// Styles
import styles from "./Products.module.scss";

function Products() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const modal = useModalComp(); // goi hook UseModalComp

    useEffect(() => {
        {
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
                .then((res) => res.json())
                .then((posts) => setPosts(posts))
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    // setLoading(false);
                    setTimeout(() => {
                        setLoading(false); // Dừng loader sau 3 giây
                    }, 3000); // 3s giả lập loading
                });
        }
    }, []);
    if (loading) {
        return <DescComp className={styles.loader}></DescComp>;
    }

    const handleOpenModal = (post) => () => {
        modal.openModal(post);
    };

    return (
        <>
            <DescComp className={styles.products}>
                <HeaderComp>
                    <HeadingComp className={styles.heading}>
                        Product List
                    </HeadingComp>
                </HeaderComp>
                {/* Products list */}
                <DescComp className={styles.productGrid}>
                    {posts.map((post) => (
                        <DescComp key={post.id} className={styles.productCard}>
                            <SubHeadingComp
                                className={clsx(
                                    styles.subheading,
                                    styles.ellipsis
                                )}
                            >
                                {post.title}
                            </SubHeadingComp>
                            <SpanComp className={styles.detailSpan}>
                                ID: {post.id}
                            </SpanComp>
                            <ParaComp>{LimitText(post.body, 100)}</ParaComp>
                            <ButtonComp
                                className={styles.detailBtn}
                                id="openModal"
                                onClick={handleOpenModal(post)}
                            >
                                Detail
                            </ButtonComp>
                        </DescComp>
                    ))}
                    {modal.showModal && (
                        <ModalComp
                            post={modal.post}
                            onClose={modal.closeModal}
                            onBackdropClick={modal.handleBackdropClick}
                        />
                    )}{" "}
                    {/* đóng modal */}
                </DescComp>
            </DescComp>
        </>
    );
}

export default Products;
