import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const ChevronRightBig = ({ size = 36, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m13.696 27 9-9-9-9" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
