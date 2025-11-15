import PropTypes from "prop-types";
import styles from "./UlistComp.module.scss";

function UlistComp({ className, todos, onToggle, onDelete, children }) {
    return <ul className={className}>{children}</ul>;
}

UlistComp.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            completed: PropTypes.bool,
        })
    ),
    onToggle: PropTypes.func,
    onDelete: PropTypes.func,
    className: PropTypes.string,
};

export default UlistComp;
