import styles from "./UlistComp.scss";

function UlistComp({ className, children }) {
    return <ul className={className}>{children}</ul>;
}

export default UlistComp;
