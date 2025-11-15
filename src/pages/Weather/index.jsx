import { useState, useEffect } from "react";
import HeaderComp from "../../components/HeaderComp";
import FooterComp from "../../components/FooterComp";
import HeadingComp from "../../components/HeadingComp";
import ButtonComp from "../../components/ButtonComp";
import LoaderComp from "../../components/LoaderComp";
import DescComp from "../../components/DescComp";
import LabelComp from "../../components/LabelComp";
import SelectComp from "../../components/SelectComp";

// Styles
import styles from "./Weather.module.scss";

function Weather() {
    // logic
    const [countries, setCountries] = useState([]);
    // mảng luu danh sách các quốc gia.

    const [selectedCountry, setSelectedCountry] = useState("");
    // tên quốc gia mà người dùng chọn trong thẻ select.

    const [weather, setWeather] = useState(null);
    // mảng lưu danh sách thời tiết lấy từ API,

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            "https://restcountries.com/v3.1/all?fields=name,capital,capitalInfo"
        )
            .then((res) => res.json())
            .then((data) => {
                const filterData = data
                    .filter(
                        (country) =>
                            Array.isArray(country.capital) &&
                            country.capital.length > 0 &&
                            Array.isArray(country.capitalInfo?.latlng) &&
                            country.capitalInfo.latlng.length === 2
                    )
                    .sort((a, b) =>
                        (a.name?.common ?? "").localeCompare(
                            b.name?.common ?? "",
                            "vi",
                            { sensitivity: "base" }
                        )
                    );
                setCountries(filterData); //cập nhật State với danh sách đã lọc và sắp xếp
            })
            .catch((error) => {
                console.error("tải danh sách quốc gia bị lỗi", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // lấy dữ liệu từ API Weather
    const getWeather = (lat, lon, capital) => {
        setLoading(true);
        fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m,weathercode`
        )
            .then((res) => res.json())
            .then((data) => {
                const current = data.current_weather;
                const humidity = data.hourly.relativehumidity_2m[0];
                setWeather({
                    capital,
                    time: current.time,
                    temp: current.temperature,
                    wind: current.windspeed,
                    humidity,
                    code: current.weathercode,
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // xử lý sự kiện chọn quốc gia từ select
    const handleSelect = (e) => {
        const countryName = e.target.value;
        setSelectedCountry(countryName);
        if (countryName) {
            const country = countries.find(
                (c) => c.name.common === countryName
            );
            if (country) {
                const [lat, lon] = country.capitalInfo.latlng;
                getWeather(lat, lon, country.capital[0]);
            }
        } else {
            setWeather(null);
        }
    };

    // reset thời tiết
    const handleRefresh = () => {
        if (!selectedCountry) return;
        const country = countries.find(
            (c) => c.name.common === selectedCountry
        );
        if (country) {
            const [lat, lon] = country.capitalInfo.latlng;
            getWeather(lat, lon, country.capital[0]);
        }
    };

    // Hàm lấy mô tả thời tiết dựa trên mã thời tiết
    function getWeatherIcon(code) {
        if (code === 0) return "☀️"; // Nắng
        if (code >= 1 && code <= 3) return "⛅"; // Có mây
        if (code >= 45 && code <= 48) return "🌫️"; // Sương mù
        if (code >= 51 && code <= 67) return "🌦️"; // Mưa phùn
        if (code >= 71 && code <= 82) return "🌧️"; // Mưa
        if (code >= 95 && code <= 99) return "⛈️"; // Giông bão
        return "❓"; // Không xác định
    }

    // Hàm lấy mô tả thời tiết dựa trên mã thời tiết
    function getWeatherDescription(code) {
        if (code === 0) return "Trời nắng";
        if (code >= 1 && code <= 3) return "Trời có mây";
        if (code >= 45 && code <= 48) return "Sương mù";
        if (code >= 51 && code <= 67) return "Mưa phùn";
        if (code >= 71 && code <= 82) return "Mưa";
        if (code >= 95 && code <= 99) return "Giông bão";
        return "Không xác định";
    }

    // mô tả chi tiết thời tiết
    function getWeatherDescription(code) {
        const map = {
            0: "Trời nắng",
            1: "Trời ít mây",
            2: "Có mây vừa",
            3: "Nhiều mây",
            45: "Sương mù nhẹ",
            48: "Sương mù dày",
            51: "Mưa phùn nhẹ",
            61: "Mưa nhẹ",
            63: "Mưa vừa",
            65: "Mưa to",
            80: "Mưa rào nhẹ",
            81: "Mưa rào vừa",
            82: "Mưa rào to",
            95: "Có giông",
            96: "Giông kèm mưa đá",
            99: "Giông mạnh",
        };
        return map[code] || "Không xác định";
    }

    return (
        <>
            <div className={styles.inner}>
                <DescComp className={styles.wrapper}>
                    <HeaderComp>
                        <HeadingComp className={styles.title}>
                            Weather App
                        </HeadingComp>
                    </HeaderComp>
                    <DescComp className={styles.controls}>
                        <LabelComp htmlFor="country" className={styles.label}>
                            Quốc gia
                        </LabelComp>
                        <SelectComp
                            id="country"
                            className={styles.select}
                            value={selectedCountry}
                            onChange={handleSelect}
                        >
                            {countries.map((country) => (
                                <option
                                    key={country.name.common}
                                    value={country.name.common}
                                >
                                    {country.name.common}
                                </option>
                            ))}
                        </SelectComp>
                        {loading && (
                            <DescComp>
                                <LoaderComp className={styles.loader} />
                            </DescComp>
                        )}
                        {weather && !loading && (
                            <DescComp className={styles.weather}>
                                <DescComp className={styles.temp}>
                                    {weather.temp} °C
                                </DescComp>
                                <DescComp className={styles.condition}>
                                    {getWeatherIcon(weather.code)}{" "}
                                    {getWeatherDescription(weather.code)}
                                </DescComp>
                                <DescComp className={styles.meta}>
                                    <DescComp className={styles.pill}>
                                        Độ ẩm: {weather.humidity}%
                                    </DescComp>
                                    <DescComp className={styles.pill}>
                                        Gió: {weather.wind} km/h
                                    </DescComp>
                                </DescComp>
                                <ButtonComp
                                    className={styles.refreshBtn}
                                    onClick={handleRefresh}
                                >
                                    Refresh
                                </ButtonComp>
                            </DescComp>
                        )}
                    </DescComp>
                    <FooterComp className={styles.hint}>
                        <p>Chọn quốc gia để bắt đầu.</p>
                    </FooterComp>
                </DescComp>
            </div>
        </>
    );
}

export default Weather;
