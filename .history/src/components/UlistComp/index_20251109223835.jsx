import styles from "./UlistComp.scss";

function UlistComp({ className, children }) {
    return <ul className={className}>{children}</ul>;
}

UlistComp.propTypes = {
    children: PropTypes.node.isRequired,
};
export default UlistComp;
