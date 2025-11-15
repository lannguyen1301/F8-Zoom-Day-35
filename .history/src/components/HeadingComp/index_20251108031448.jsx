import PropTypes from "prop-types";
import styles from "./HeadingComp.module.scss";

// Component H1

function HeadingComp({ className, children }) {
    return <h1 className={styles.heading}>{children}</h1>;
}

HeadingComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default HeadingComp;
