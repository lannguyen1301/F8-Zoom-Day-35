import PropTypes from "prop-types";
import styles from './HeadingComp.module.scss';

// Component H1

function Heading({ className, children}) {
    return <h1 className={className}>{children}</h1>;
}

Heading.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}