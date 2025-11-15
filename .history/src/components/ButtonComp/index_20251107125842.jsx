import PropTypes from 'prop-types';

import styles from './ButtonComp.scss';

function ButtonComp( { className, children, onClick}) {
    return;
}

ButtonComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}
export default ButtonComp;