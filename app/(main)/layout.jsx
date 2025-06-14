import ThemeToggle from '@/components/toggle-theme'
import React from 'react'

const AppLayout = ({ children }) => {
  return (
    <>
    <ThemeToggle/>
    <div>{children}</div>
    </>
  )
}

export default AppLayout