import ButtonCompComp from "../../components/ButtonCompComp";
import styles from "./Home.module.scss";

function Home() {
    return (
        <>
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
        </>
    );
}

export default Home;
