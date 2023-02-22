import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const MessageSquare = ({ size = 24, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path fill={color} d="M7 7h10v1H7zM7 11h10v1H7z" />
  </svg>
)
