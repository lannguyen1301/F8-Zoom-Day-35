import ButtonComp from "../../components/ButtonComp";
import DescComp from "../../components/DescComp";
import styles from "./Home.module.scss";

function Home() {
    return (
        <>
            <DescComp className={styles.wrapper}>
                <DescComp className={styles.inner}>
                    <ButtonComp
                        title="ButtonComp Normal"
                        // className="wrapper"
                        onClick={() => console.log("dont click me")}
                    >
                        Normal
                    </ButtonComp>

                    <ButtonComp
                        rounded
                        // className="Primary wrapper"
                        title="ButtonComp Rounded"
                        onClick={() => console.log("click me")}
                    >
                        Rounded
                    </ButtonComp>

                    <ButtonComp
                        rounded
                        bordered
                        title="ButtonComp Bordered href"
                        href={"https://www.npmjs.com/package/proptypes"}
                        target="_blank"
                    >
                        Bordered
                    </ButtonComp>

                    <ButtonComp
                        primary
                        rounded
                        title="ButtonComp Primary"
                        // className="Primary wrapper"
                        onClick={() => console.log("click me")}
                    >
                        Primary
                    </ButtonComp>
                </DescComp>
            </DescComp>
        </>
    );
}

export default Home;
