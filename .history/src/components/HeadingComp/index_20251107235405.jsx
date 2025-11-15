import PropTypes from "prop-types";
import styles from "./HeadingComp.module.scss";

// Component H1

function HeadingComp({ children }) {
    return <h1 className={className}>{children}</h1>;
}

HeadingComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default HeadingComp;
