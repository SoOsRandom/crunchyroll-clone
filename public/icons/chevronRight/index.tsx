import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const ChevronRight = ({ size = 24, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m9 18 6-6-6-6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)