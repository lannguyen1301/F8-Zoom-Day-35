import ButtonComp from "../../components/ButtonComp";
import styles from "./Home.module.scss";

function Home() {
    return (
        <>
            <DescComp>
                <ButtonComp primary>Click me</ButtonComp>
            </DescComp>
        </>
    );
}

export default Home;
