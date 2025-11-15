import { useState, useEffect } from "react";
import clsx from "clsx";
import DescComp from "../../components/DescComp";
import HeaderComp from "../../components/HeaderComp";
import HeadingComp from "../../components/HeadingComp";
import ParaComp from "../../components/ParaComp";

import ImgComp from "../../components/ImgComp";
import SpanComp from "../../components/SpanComp";

import { getThumbnailUrl } from "../../getThumbnailUrl";
import SubHeadingComp from "../../components/SubHeadingComp";
import IconComp from "../../components/IconComp";
import LoaderComp from "../../components/LoaderComp";

// Styles
import styles from "./Profile.module.scss";

function Profile() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/").then((res) =>
            res
                .json()
                .then((users) => {
                    setUsers(users);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    // setLoading(false);
                    setTimeout(() => {
                        setLoading(false); // Dừng loader sau 3 giây
                    }, 3000); // 3s giả lập loading
                })
        );
    }, []);
    if (loading) {
        return (
            <DescComp>
                <LoaderComp></LoaderComp>
            </DescComp>
        );
    }

    return (
        <>
            <DescComp className={styles.center}>
                <HeaderComp className={styles.header}>
                    <HeadingComp className={styles.heading}>
                        Profile Cards
                    </HeadingComp>
                </HeaderComp>

                <DescComp className={styles.groupCard}>
                    {users.map((user) => (
                        <DescComp key={user.id} className={styles.card}>
                            <DescComp className={styles.additional}>
                                <DescComp className={styles.userCard}>
                                    <ParaComp
                                        className={clsx(
                                            styles.level,
                                            styles.center
                                        )}
                                    >
                                        ReactJS
                                    </ParaComp>

                                    <ImgComp
                                        className={clsx(
                                            styles.thumbnail,
                                            styles.center
                                        )}
                                        alt={user.name}
                                        // userId={user.id}
                                        src={getThumbnailUrl({
                                            userId: user.id,
                                        })}
                                        loading="lazy"
                                    />
                                    <ParaComp
                                        className={clsx(
                                            styles.level,
                                            styles.center
                                        )}
                                    >
                                        Exercise
                                    </ParaComp>
                                </DescComp>
                                <DescComp className={styles.moreInfo}>
                                    <SubHeadingComp
                                        className={styles.subHeading}
                                    >
                                        {user.name}
                                    </SubHeadingComp>
                                    <DescComp className={styles.coordsGroup}>
                                        <DescComp className={styles.coords}>
                                            <SpanComp
                                                className={styles.coordsSpan}
                                            >
                                                <IconComp className="fa-solid fa-users" />{" "}
                                                Username: {user.username}
                                            </SpanComp>
                                        </DescComp>

                                        <DescComp className={styles.coords}>
                                            <SpanComp
                                                className={styles.coordsSpan}
                                            >
                                                <IconComp className="fa-solid fa-envelope-circle-check" />{" "}
                                                Email: {user.email}
                                            </SpanComp>
                                        </DescComp>

                                        <DescComp className={styles.coords}>
                                            <SpanComp
                                                className={styles.coordsSpan}
                                            >
                                                <IconComp className="fa-solid fa-square-phone" />{" "}
                                                Phone: {user.phone}
                                            </SpanComp>
                                        </DescComp>

                                        <DescComp className={styles.coords}>
                                            <SpanComp
                                                className={styles.coordsSpan}
                                            >
                                                <IconComp className="fa-brands fa-chrome" />{" "}
                                                Website: {user.website}
                                            </SpanComp>
                                        </DescComp>

                                        <DescComp className={styles.coords}>
                                            <SpanComp
                                                className={styles.coordsSpan}
                                            >
                                                <IconComp className="fa-solid fa-map-location-dot" />{" "}
                                                Address: {user.address?.city}
                                            </SpanComp>
                                        </DescComp>
                                    </DescComp>
                                </DescComp>
                            </DescComp>
                            <DescComp className={styles.general}>
                                <SubHeadingComp className={styles.subHeading}>
                                    {user.name}
                                </SubHeadingComp>
                                <ParaComp className={""}>
                                    Tôi là {user.name}, một kẻ mê lập trình đến
                                    cháy lòng. Dù học mãi không giỏi, nhưng tôi
                                    vẫn kiên trì từng đêm để chạm đến giấc mơ
                                    viết nên những dòng code hoàn hảo.
                                </ParaComp>
                                <SpanComp className={styles.more}>
                                    Hover over a card to see more information.
                                </SpanComp>
                            </DescComp>
                        </DescComp>
                    ))}
                </DescComp>
            </DescComp>
        </>
    );
}

export default Profile;
