import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const RotateLarge = ({ size, color, ...props }: IconAttributesProps) => (
  <svg width={size ?? 43} height={size ?? 40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.244 19.75h3.148L5.196 25 0 19.75h3.198a20 20 0 1 1 6.616 15.113l2.707-3.007A15.954 15.954 0 1 0 7.244 19.75Z" fill={color} />
  </svg>
)
