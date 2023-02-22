import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const Play = ({ size = 24, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m5 3 14 9-14 9V3Z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
