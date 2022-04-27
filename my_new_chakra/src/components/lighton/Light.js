import React, { useState } from "react";
import "./styles/Light.scss";
import DarkModeToggle from "react-dark-mode-toggle";

function Light(props) {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <>
            <div class="box-canvas">
                <div class="bulb"></div>
                <div class="bulb-bottom">
                    <div class="filament-left filament"></div>
                    <div class="filament-right filament"></div>
                </div>
            </div>
            <div
                style={{
                    border: "2px solid red",
                    width: "50%",
                    height: "50vh",
                }}
            >
                <DarkModeToggle
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={80}
                />
            </div>
        </>
    );
}

export default Light;
