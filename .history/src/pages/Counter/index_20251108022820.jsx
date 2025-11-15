import HeadingComp from "../../components/HeadingComp"; // importComponent HeadingComp

// styles
import styles from "./Counter.module.scss";

function Counter() {
    return (
        <div className={styles.main}>
            <HeadingComp>Counter App</HeadingComp>
        </div>
    );
}

export default Counter;
