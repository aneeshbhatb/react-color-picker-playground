import { useState } from "react";
import { ReactColorPicker } from "@aneeshbhat/react-color-picker";
import githubIcon from "./assets/Octicons-mark-github.svg";
import linkedinIcon from "./assets/LinkedIn_icon.svg";

import "@aneeshbhat/react-color-picker/style.css";

export default function App() {
    const [color, setColor] = useState("#fffdf6");

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
            <section style={{ width: 360 }}>
                <h1>React Color Picker</h1>

                <div style={{ height: 320 }}>
                    <ReactColorPicker value={color} onChange={setColor} />
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "12px",
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        padding: "6px 10px",
                    }}
                >
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
                        style={{
                            border: "none",
                            outline: "none",
                            fontSize: "14px",
                            fontFamily: "monospace",
                            width: "100%",
                            background: "transparent",
                        }}
                    />
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
