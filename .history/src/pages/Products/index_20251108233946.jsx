import HeadingComp from "../../components/HeadingComp";
import SubHeadingComp from "../../components/SubHeadingComp";

// Styles
import styles from "./Products.module.scss";

function Products() {
    return (
        <>
            <div className={styles.product}>
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
