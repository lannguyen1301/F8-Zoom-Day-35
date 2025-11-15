import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ImgComp.module.scss";
// Component Avatar
function ImgComp({ name, className, onError, alt }) {
    const [imgError, setImgError] = useState(false);
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=random`;

    if (imgError) {
        const words = name.trim().split(" ");
        const initials =
            words.length === 1
                ? words[0][0].toUpperCase()
                : `${words[0][0].toUpperCase()}${words[
                      words.length - 1
                  ][0].toUpperCase()}`;
        return <div className="avatar-fallback">{initials}</div>;
    }

    return (
        <>
            <div>
                <img
                    src={avatarUrl}
                    alt={alt || name}
                    className={className || styles.avatarImg}
                    onError={(e) => {
                        setImgError(true);
                        if (onError) onError(e);
                    }}
                />
            </div>
        </>
    );
}

// Component Comment Loader
// function LoaderComp({ className, children }) {
//     return <div className={className}>{children}</div>;
// }

ImgComp.prototype = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    onError: PropTypes.func,
};
export default ImgComp;
