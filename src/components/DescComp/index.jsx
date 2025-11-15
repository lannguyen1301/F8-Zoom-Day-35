import PropTypes from "prop-types";
import styles from "./DescComp.module.scss";

// Component Desc Wrapper
function DescComp({ className, children }) {
    return <div className={className}>{children}</div>;
}

DescComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
export default DescComp;
