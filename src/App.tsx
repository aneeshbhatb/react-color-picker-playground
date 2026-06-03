import { useState } from "react";
import { ReactColorPicker } from "@aneeshbhat/react-color-picker";
import { Checkbox } from "./components/Checkbox";
import { Dropdown } from "./components/Dropdown";
import { CodeViewer } from "./components/CodeViewer";
import { Toast } from "./components/Toast";
import githubIcon from "./assets/Octicons-mark-github.svg";
import linkedinIcon from "./assets/LinkedIn_icon.svg";
import npmIcon from "./assets/Npm-logo.svg";
import contentCopyIcon from "./assets/content-copy.svg";
import "./App.css";

import "@aneeshbhat/react-color-picker/style.css";

export default function App() {
    const [color, setColor] = useState("");
    const [hideEyedrop, setHideEyedrop] = useState(false);
    const [hideOpacity, setHideOpacity] = useState(false);
    const [hideModeSwitcher, setHideModeSwitcher] = useState(false);
    const [activeMode, setActiveMode] = useState("solid");
    const [useDefaultMode, setUseDefaultMode] = useState(false);
    const [copyTick, setCopyTick] = useState(0);

    return (
        <>
        <Toast show={copyTick > 0} key={copyTick} textContent={`Copied "${color}" to clipboard!`} />
        <main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                fontFamily: "system-ui, sans-serif",
                background: color ? color : "linear-gradient(90deg, #fffdf6 0%, #ffe3e3 100%)",
            }}
        >
            <section style={{ width: "min(100%, 1100px)", padding: "0 16px", boxSizing: "border-box" }}>
                <h1 style={{ marginBottom: "16px" }}>React Color Picker</h1>

                <div className="layout">
                    {/* Col 1: Picker */}
                    <div className="picker-col">
                        <ReactColorPicker
                            value={color}
                            onChange={setColor}
                            defaultMode="solid"
                            hideEyedrop={hideEyedrop}
                            hideOpacityControl={hideOpacity}
                            hideModeSwitcher={hideModeSwitcher}
                            activeMode={activeMode}
                            onModeChange={setActiveMode}
                        />
                    </div>

                    {/* Col 2: Customization */}
                    <div className="customize-col">
                        <div className="color-input-row">
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "4px",
                                    background: color,
                                    border: "1px solid rgba(0,0,0,0.15)",
                                    flexShrink: 0,
                                }}
                            />
                            <input
                                placeholder="#FFFFFF"
                                value={color}
                                onChange={(e) => setColor(e.target.value as string)}
                            />
                            <button
                                className="copy-btn"
                                onClick={() => { navigator.clipboard.writeText(color); setCopyTick(t => t + 1); }}
                                title="Copy color value"
                            >
                                <img src={contentCopyIcon} alt="Copy" width={16} height={16} />
                            </button>
                        </div>

                        <div className="customize-card">
                            <span className="customize-label">Customize</span>
                            <Checkbox
                                label="Hide Opacity Control"
                                subtext={`hideOpacityControl={${hideOpacity}}`}
                                checked={hideOpacity}
                                onChange={setHideOpacity}
                            />
                            <Checkbox
                                label="Hide Eyedrop"
                                subtext={`hideEyedrop={${hideEyedrop}}`}
                                checked={hideEyedrop}
                                onChange={setHideEyedrop}
                            />
                            <Checkbox
                                label="Hide Mode Switcher"
                                subtext={`hideModeSwitcher={${hideModeSwitcher}}`}
                                checked={hideModeSwitcher}
                                onChange={setHideModeSwitcher}
                            />
                            <Checkbox
                                label="Set Default Mode"
                                checked={useDefaultMode}
                                onChange={setUseDefaultMode}
                            />
                            {useDefaultMode && (
                                <Dropdown
                                    label="Default Mode"
                                    subtext={`defaultMode="${activeMode}"`}
                                    value={activeMode}
                                    options={["solid", "gradient"]}
                                    onChange={setActiveMode}
                                />
                            )}
                        </div>
                    </div>

                    {/* Col 3: Code viewer */}
                    <div className="code-col">
                        <CodeViewer
                            hideEyedrop={hideEyedrop}
                            hideOpacity={hideOpacity}
                            hideModeSwitcher={hideModeSwitcher}
                            useDefaultMode={useDefaultMode}
                            defaultMode={activeMode}
                        />
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
                    alignItems: "center",
                    gap: "16px",
                    padding: "12px",
                }}
            >
                <a href="https://www.npmjs.com/package/@aneeshbhat/react-color-picker" target="_blank" rel="noreferrer">
                    <img src={npmIcon} alt="npm" width={40} height={40} />
                </a>
                <a href="https://github.com/aneeshbhatb/react-color-picker" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" width={24} height={24} />
                </a>
                <a href="https://linkedin.com/in/aneeshbhat" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
                </a>
            </footer>
        </main>
        </>
    );
}
