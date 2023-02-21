import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const ArrowDropdown = ({ size = 24, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12 16-5.196-5.25h10.392L12 16Z" fill={color} />
  </svg>
)
