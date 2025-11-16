import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./ButtonComp.module.scss";

function ButtonComp({  primary = false,
    rounded = false,
    bordered = false,
    title,
    children,
    onClick,
    href,
    size = "medium",
    className,
    ...passProps // các props còn lại sẽ được gộp vào biến passProps }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

ButtonComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default ButtonComp;
