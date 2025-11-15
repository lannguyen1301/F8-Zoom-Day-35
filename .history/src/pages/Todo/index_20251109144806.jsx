import HeadingComp from "../../components/HeadingComp";
import SpanComp from "../../components/SpanComp";
import styles from "./Todo.module.scss";

function Todo() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <HeadingComp className={styles.heading}>
                        Todo
                        <SpanComp className={styles.heading__span}>
                            List
                        </SpanComp>
                    </HeadingComp>
                </div>
            </div>
        </>
    );
}

export default Todo;
