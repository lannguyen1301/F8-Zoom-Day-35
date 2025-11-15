import PropTypes from "prop-types";
import styles from "./UlistComp.scss";

function UlistComp({ className, children }) {
    return <ul className={className}>{children}</ul>;
}

UlistComp.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default UlistComp;
