// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeViewerProps {
    hideEyedrop: boolean;
    hideOpacity: boolean;
    hideModeSwitcher: boolean;
}

export function CodeViewer({ hideEyedrop, hideOpacity, hideModeSwitcher }: CodeViewerProps) {
    const lines = [
        "import { ReactColorPicker } from '@aneeshbhat/react-color-picker';",
        "",
        "const [color, setColor] = useState('#000000');",
        "",
        "<ReactColorPicker",
        "  value={color}",
        "  onChange={setColor}",
        ...(hideOpacity ? ["  hideOpacityControl={true}"] : []),
        ...(hideEyedrop ? ["  hideEyedrop={true}"] : []),
        ...(hideModeSwitcher ? ["  hideModeSwitcher={true}"] : []),
        "/>",
    ];

    return (
        <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLongLines={true}
            customStyle={{
                borderRadius: "6px",
                fontSize: "12px",
                margin: 0,
                padding: "12px",
            }}
        >
            {lines.join("\n")}
        </SyntaxHighlighter>
    );
}
