import { useState } from "react";
import clsx from "clsx";
import HeadingComp from "../../components/HeadingComp"; // importComponent HeadingComp from folder
import SubHeadingComp from "../../components/SubHeadingComp";
import ButtonComp from "../../components/ButtonComp";

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
            ? "plusValue"
            : counter < 0
              ? "minusValue"
              : "counterDisplay";

    return (
        <>
            <div className={styles.main}>
                <HeadingComp className={styles.heading}>
                    Counter App
                </HeadingComp>
                <SubHeadingComp
                    className={clsx(styles.counterDisplay, counterTransform)}
                >
                    {counter}
                </SubHeadingComp>
                <div className="buttonGroup">
                    <ButtonComp
                        onClick={increasePlus}
                        className={clsx(styles.circleBtn, styles.plus)}
                    >
                        +
                    </ButtonComp>
                    <ButtonComp
                        onClick={increaseMinus}
                        className={clsx(styles.circleBtn, styles.minus)}
                    >
                        -
                    </ButtonComp>
                    <ButtonComp
                        onClick={increaseReset}
                        className={clsx(styles.resetBtn)}
                    >
                        Reset
                    </ButtonComp>
                </div>
            </div>
        </>
    );
}

export default Counter;
