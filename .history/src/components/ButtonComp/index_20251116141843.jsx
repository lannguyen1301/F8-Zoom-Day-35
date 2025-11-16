// import PropTypes from "prop-types";

// import styles from "./ButtonComp.module.scss";

// function ButtonComp({ className, children, onClick }) {
//     return (
//         <button className={className} onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// ButtonComp.propTypes = {
//     className: PropTypes.string,
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func,
// };
// export default ButtonComp;

import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./ButtonComp.module.scss";

function ButtonComp({
    primary = false,
    rounded = false,
    bordered = false,
    title,
    children,
    onClick,
    href,
    size = "medium",
    className,
    ...passProps // các props còn lại sẽ được gộp vào biến passProps
}) {
    console.log(passProps);

    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
    });

    // Biến button thành thẻ a khi có href
    // Toán tử 3 ngôi
    const Component = href ? "a" : "button";
    // nếu có href thì lấy thẻ a, không thì lấy thẻ button

    // cách viết if else
    // let Component;
    // if (href) {
    //     Component = "a";
    // } else {
    //     Component = "button";
    // }

    return (
        <Component
            {...passProps} // truyền các props còn lại vào component, tên biến là passProps do mình đặt
            href={href}
            className={classNames}
            title={title}
            onClick={onClick}
        >
            {children}
        </Component>
        //
        //
    );
}

ButtonComp.propTypes = {
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};

export default ButtonComp;
