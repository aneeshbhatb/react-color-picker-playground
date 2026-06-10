// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface CodeViewerProps {
  hideEyedrop: boolean
  hideOpacity: boolean
  hideModeSwitcher: boolean
  hideGradientTypeSwitcher: boolean
  useDefaultMode: boolean
  defaultMode: string
  useDefaultGradientType: boolean
  defaultGradientType: string
}

export function CodeViewer({
  hideEyedrop,
  hideOpacity,
  hideModeSwitcher,
  hideGradientTypeSwitcher,
  useDefaultMode,
  defaultMode,
  useDefaultGradientType,
  defaultGradientType,
}: CodeViewerProps) {
  const lines = [
    "import { ReactColorPicker } from '@aneeshbhat/react-color-picker';",
    '',
    'const [color, setColor] = useState("#000000");',

    ...(useDefaultMode ? ['', 'const [activeMode, setActiveMode] = useState("solid");'] : []),
    ...(useDefaultGradientType
      ? ['', 'const [activeGradientType, setActiveGradientType] = useState("linear");']
      : []),
    '',
    '<ReactColorPicker',
    '  value={color}',
    '  onChange={setColor}',
    ...(hideOpacity ? ['  hideOpacityControl={true}'] : []),
    ...(hideEyedrop ? ['  hideEyedrop={true}'] : []),
    ...(hideModeSwitcher ? ['  hideModeSwitcher={true}'] : []),
    ...(hideGradientTypeSwitcher ? ['  hideGradientTypeSwitcher={true}'] : []),
    ...(useDefaultMode
      ? [
          '',
          '  // used when default mode needs to  ',
          '  // be set. Default is "solid"',
          `  defaultMode="${defaultMode}"`,
          '',
          '  // optional - used when custom mode ',
          '  // switcher is used',
          '  activeMode={activeMode}',
          '  onModeChange={setActiveMode}',
        ]
      : []),
    ...(useDefaultGradientType
      ? [
          '',
          '  // used when default gradient type  ',
          '  // needs to be set. Default is "linear"',
          `  defaultGradientType="${defaultGradientType}"`,
          '',
          '  // optional - used when custom gradient ',
          '  // type switcher is used',
          '  activeGradientType={activeGradientType}',
          '  onGradientTypeChange={setActiveGradientType}',
        ]
      : []),
    '/>',
  ]

  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      wrapLongLines={true}
      customStyle={{
        borderRadius: '6px',
        fontSize: '12px',
        margin: 0,
        padding: '12px',
      }}
    >
      {lines.join('\n')}
    </SyntaxHighlighter>
  )
}
