import HeadingComp from "../../components/HeadingComp";

import styles from "./Products.module.scss";

function Products() {
    return (
        <>
            <div className={styles.product}>
                <HeadingComp>Product List</HeadingComp>
            </div>
        </>
    );
}

export default Products;
