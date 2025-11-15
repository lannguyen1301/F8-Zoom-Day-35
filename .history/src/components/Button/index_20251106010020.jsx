import PropTypes from "prop-types"; 
// prop-types là thư viện để kiểm tra kiểu dữ liệu của props
// cài đặt thư viện prop-types: npm install prop-types / npm i prop-types

import clsx  from "clsx"; // clsx is a utility for constructing className strings conditionally
// cài đặt thư viện clsx: npm install clsx / npm i clsx
// tại sao phải cài clsx: vì clsx làm ngăn gọn code hơn khi kết hợp nhiều className, nó sẽ tự động loại bỏ các className rỗng hoặc undefined

import styles from './Button.module.scss';

// Component Button
function Button({ onClick, className, children }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}


Button.propTypes = {
    onClick: PropTypes.func;
}

export default Button;