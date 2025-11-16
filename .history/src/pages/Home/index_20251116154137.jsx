import ButtonComp from "../../components/ButtonComp";
import styles from "./Home.module.scss";

function Home() {
    return (
        <>
            <Button
                title="Button Normal"
                // className="wrapper"
                onClick={() => console.log("dont click me")}
            >
                Normal
            </Button>

            <Button
                rounded
                // className="Primary wrapper"
                title="Button Rounded"
                onClick={() => console.log("click me")}
            >
                Rounded
            </Button>

            <Button
                rounded
                bordered
                title="Button Bordered href"
                href={"https://www.npmjs.com/package/proptypes"}
                target="_blank"
            >
                Bordered
            </Button>

            <Button
                primary
                rounded
                title="Button Primary"
                // className="Primary wrapper"
                onClick={() => console.log("click me")}
            >
                Primary
            </Button>
        </>
    );
}

export default Home;
