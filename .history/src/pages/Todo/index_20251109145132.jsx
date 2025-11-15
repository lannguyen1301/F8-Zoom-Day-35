import HeadingComp from "../../components/HeadingComp";
import SpanComp from "../../components/SpanComp";
import FormComp from "../../components/FormComp";
import InputComp from "../../components/InputComp";
import styles from "./Todo.module.scss";

function Todo() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <HeadingComp className={styles.heading}>
                        Todo
                        <SpanComp className={styles.headingSpan}>List</SpanComp>
                    </HeadingComp>
                </div>
                <div className={styles.formGroup}>
                    <FormComp className={styles.formTask}>
                        <InputComp></InputComp>
                    </FormComp>
                </div>
            </div>
        </>
    );
}

export default Todo;
