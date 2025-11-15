import PropTypes from "prop-types";
import styles from "./SmallHeadingComp.module.scss";

// Component h4 Small Heading
function SmallHeadingComp({ className, children }) {
    return <h4 className={className}>{children}</h4>;
}

SmallHeadingComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default SmallHeadingComp;
