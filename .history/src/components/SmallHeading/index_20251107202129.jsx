import styles from './SmallHeading.module.scss';

// Component h4 Small Heading
function SmallHeadingComp({ className, children }) {
    return <h4 className={className}>{children}</h4>;
}
