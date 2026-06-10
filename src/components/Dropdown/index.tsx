import type { ReactColorPickerActiveMode } from '@aneeshbhat/react-color-picker'

import { useId } from 'react'

interface DropdownProps {
  label: string
  subtext?: string
  value: string
  options: string[]
  onChange: (value: ReactColorPickerActiveMode) => void
}

export function Dropdown({ label, subtext, value, options, onChange }: DropdownProps) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        fontSize: '14px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {label}
        {subtext && (
          <span style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'monospace' }}>
            {subtext}
          </span>
        )}
      </span>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as ReactColorPickerActiveMode)}
        style={{
          height: '28px',
          borderRadius: '4px',
          border: '2px solid #d1d5db',
          backgroundColor: '#ffffff',
          padding: '0 8px',
          fontSize: '14px',
          fontFamily: 'system-ui, sans-serif',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
