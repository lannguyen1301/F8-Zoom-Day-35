import { useState } from "react";
import HeadingComp from "../../components/HeadingComp"; // importComponent HeadingComp from folder
import SubHeadingComp from "../../components/SubHeadingComp";

// styles
import styles from "./Counter.module.scss";

function Counter() {
    return (
        <div className={styles.main}>
            <HeadingComp>Counter App</HeadingComp>
            <SubHeadingComp>
                {/*  */}
                {/*  */}
            </SubHeadingComp>
        </div>
    );
}

export default Counter;
