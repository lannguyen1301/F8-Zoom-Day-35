import { useState } from "react";
import HeadingComp from "../../components/HeadingComp"; // importComponent HeadingComp from folder
import SubHeadingComp from "../../components/SubHeadingComp";

// styles
import styles from "./Counter.module.scss";

function Counter() {
    // khai báo Hook useState: useState là một React Hook cho phép bạn thêm và quản lý “trạng thái” (state) ngay bên trong functional component.
    const [counter, setCounter] = useState(0);

    // IncreaseReset
    const increaseReset = () => setCounter(0);

    // IncreasePlus
    const increasePlus = () => setCounter(counter + 1);

    // IncreaseMinus
    const increaseMinus = () => setCounter(counter - 1);

    // thêm hoặc xoá class khi giá trị của các button thay đổi
    const counterTransform =
        counter > 0
            ? "plus-value"
            : counter < 0
              ? "minus-value"
              : "counter-display";

    return (
        <>
            <div className={styles.main}>
                <HeadingComp>Counter App</HeadingComp>
                <SubHeadingComp>
                    {/*  */}
                    {/*  */}
                </SubHeadingComp>
            </div>
        </>
    );
}

export default Counter;
