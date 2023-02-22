import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const Search = ({ size = 24, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
