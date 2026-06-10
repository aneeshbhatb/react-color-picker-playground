import { useEffect, useState } from 'react'
import './Toast.css'

interface ToastProps {
  textContent: string
  show: boolean
}

export function Toast({ textContent, show }: ToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      const raf = requestAnimationFrame(() => setVisible(true))
      const t = setTimeout(() => setVisible(false), 3000)
      return () => {
        cancelAnimationFrame(raf)
        clearTimeout(t)
      }
    }
  }, [show])

  return <div className={`copied-toast ${visible ? 'copied-toast--in' : ''}`}>{textContent}</div>
}
