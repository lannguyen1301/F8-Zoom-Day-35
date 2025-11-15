// // import React from "react";
// import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router";
// import App from "./App";
// // import './index.css'

// ReactDOM.createRoot(document.getElementById("root")).render(
//     // <React.StrictMode>
//     <HashRouter>
//         <App />
//     </HashRouter>
//     // </React.StrictMode>,
// );

import Navigation from "@/components/Navigation";
import routerConfig from "@/config/configRouter";
import { HashRouter, Route, Routes } from "react-router";
import Container from "../Container";

const AppRouter = () => {
    return (
        <>
            <HashRouter>
                <Navigation />
                <Routes>
                    {routerConfig.map(({ path, element: Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Container>
                                    <Component />
                                </Container>
                            }
                        />
                    ))}
                </Routes>
            </HashRouter>
        </>
    );
};
export default AppRouter;
