import HeadingComp from "../../components/HeadingComp";
import styles from "./Todo.module.scss";

function Todo() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <HeadingComp>
                        <SpanComp className={styles.heading__span}></SpanComp>
                    </HeadingComp>
                </div>
            </div>
        </>
    );
}

export default Todo;
