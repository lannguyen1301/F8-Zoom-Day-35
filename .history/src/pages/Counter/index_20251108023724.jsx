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

    const counterTransform =
        counter > 0
            ? "plus-value"
            : counter < 0
            ? "minus-value"
            : "counter-display";

    return (
        <>
            {/* cách 1 dùng if ...else */}
            {/* <SubHeading className="counter-display">{counter}</SubHeading> */}

            {/* cách 2 dùng toán tử Conditional rendering trực tiếp */}
            {/* <SubHeading
                        className={`counter-display ${counter > 0 ? "plus-value" : counter < 0 ? "minus-value"
                                : "counter-display"
                            }`}
                    >
                        {counter}
                    </SubHeading> */}

            {/* cách 3 dùng bằng biến để class đữ rối */}
            <SubHeading className={`counter-display ${counterTransform}`}>
                {counter}
            </SubHeading>

            <div className="button-group">
                <Button onClick={increasePlus} className={"circle-btn plus"}>
                    +
                </Button>
                <Button onClick={increaseMinus} className={"circle-btn minus"}>
                    -
                </Button>
            </div>
            <Button onClick={increaseReset} className="reset-btn">
                Reset
            </Button>
        </>
    );
}

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
