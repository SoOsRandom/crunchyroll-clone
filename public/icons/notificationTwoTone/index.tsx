import { IconAttributesProps } from 'icons/types'
import * as React from 'react'

export const NotificationTwoTone = ({ size = 36, color, ...props }: IconAttributesProps) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M29.143 1.714c-.136 0-.275.025-.414.082L8.143 10.068H2.286a.582.582 0 0 0-.572.593v10.678c0 .329.258.593.572.593h3.632a4.284 4.284 0 0 0-.204 1.3c0 2.354 1.922 4.268 4.286 4.268a4.294 4.294 0 0 0 4.14-3.157l14.592 5.864c.14.054.279.082.415.082.603 0 1.142-.507 1.142-1.185V2.9c-.003-.679-.539-1.186-1.146-1.186ZM10 24.94a1.711 1.711 0 0 1-1.714-1.707c0-.4.14-.782.393-1.086l3.032 1.218A1.719 1.719 0 0 1 10 24.94Zm17.714 2.086L9.1 19.546l-.46-.185H4.285v-6.722h4.353l.461-.185 18.614-7.479v22.05Z"
      fill={color}
    />
  </svg>
)
