import { useId } from "react";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
    const id = useId();

    return (
        <label
            htmlFor={id}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                userSelect: "none",
                fontSize: "14px",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <span
                style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "18px",
                    height: "18px",
                    borderRadius: "4px",
                    border: checked ? "2px solid #6366f1" : "2px solid #d1d5db",
                    backgroundColor: checked ? "#6366f1" : "#ffffff",
                    transition: "border-color 0.15s, background-color 0.15s",
                    flexShrink: 0,
                }}
            >
                {checked && (
                    <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ pointerEvents: "none" }}
                    >
                        <path
                            d="M1 3.5L4 6.5L10 1"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    style={{
                        position: "absolute",
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        margin: 0,
                        cursor: "pointer",
                    }}
                />
            </span>
            {label}
        </label>
    );
}