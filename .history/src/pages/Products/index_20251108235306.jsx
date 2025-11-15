import HeadingComp from "../../components/HeadingComp";
import SubHeadingComp from "../../components/SubHeadingComp";
import LimitText from "../../components/LimitText";
// Styles
import styles from "./Products.module.scss";

function Products() {
    return (
        <>
            <div className={styles.products}>
                <HeadingComp className={styles.heading}>
                    Product List
                </HeadingComp>
            </div>
            <div className="productGrid">
                {/*  */}
                {/*  */}
                {/*  */}
            </div>
        </>
    );
}

export default Products;
