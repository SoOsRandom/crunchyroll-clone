import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const RotateCcw = ({ size = 24, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 4v6h6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
