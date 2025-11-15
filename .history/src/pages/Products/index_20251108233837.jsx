import HeadingComp from "../../components/HeadingComp";

import styles from "./Products.module.scss";

function Products() {
    return (
        <>
            <div className={styles.product}>
                <HeadingComp className={styles.heading}>
                    Product List
                </HeadingComp>
            </div>
            <div className="productGrid">{/*  */}</div>
        </>
    );
}

export default Products;
