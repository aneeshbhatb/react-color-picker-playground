import { useState } from "react";
import { ReactColorPicker } from "@aneeshbhat/react-color-picker";
import { Checkbox } from "./Checkbox";
import githubIcon from "./assets/Octicons-mark-github.svg";
import linkedinIcon from "./assets/LinkedIn_icon.svg";
import "./App.css";

import "@aneeshbhat/react-color-picker/style.css";

export default function App() {
    const [color, setColor] = useState("#fffdf6");
    const [hideEyedrop, setHideEyedrop] = useState(false);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                fontFamily: "system-ui, sans-serif",
                backgroundColor: color,
            }}
        >
            <section style={{ width: "min(100%, 660px)", padding: "0 16px", boxSizing: "border-box" }}>
                <h1 style={{ marginBottom: "16px" }}>React Color Picker</h1>

                <div className="layout">
                    {/* Left: picker */}
                    <div className="picker-col">
                        <ReactColorPicker
                            value={color}
                            onChange={setColor}
                            hideEyedrop={hideEyedrop}
                        />
                    </div>

                    {/* Right: value + customization */}
                    <div className="controls-col">
                        <div className="color-input-row">
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "4px",
                                    backgroundColor: color,
                                    border: "1px solid rgba(0,0,0,0.15)",
                                    flexShrink: 0,
                                }}
                            />
                            <input
                                value={color}
                                onChange={(e) => setColor(e.target.value as string)}
                            />
                        </div>

                        <div className="customize-card">
                            <span className="customize-label">Customize</span>
                            <Checkbox
                                label="Hide Eyedrop"
                                checked={hideEyedrop}
                                onChange={setHideEyedrop}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <footer
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    padding: "12px",
                }}
            >
                <a href="https://github.com/aneeshbhatb/react-color-picker" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" width={24} height={24} />
                </a>
                <a href="https://linkedin.com/in/aneeshbhat" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
                </a>
            </footer>
        </main>
    );
}
