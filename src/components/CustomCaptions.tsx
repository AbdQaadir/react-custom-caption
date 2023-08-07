import React from 'react'

type CustomCaptionsProps = {
  // Accept video element as children
  children: React.ReactElement
}
function CustomCaptions({ children }: CustomCaptionsProps) {
  return <div>{children}</div>
}

export default CustomCaptions
