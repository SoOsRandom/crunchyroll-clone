import { SVGProps } from 'react'

export type IconNameType =
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'ChevronUp'
  | 'ChevronDown'
  | 'MessageSquare'
  | 'Bookmark'
  | 'BookmarkFilled'
  | 'ArrowDropdown'
  | 'Search'
  | 'Play'
  | 'RotateCcw'
  | 'RotateLarge'
  | 'ChevronLeftBig'
  | 'ChevronRightBig'
  | 'NotificationTwoTone'

export interface IconAttributesProps extends SVGProps<SVGSVGElement> {
  color: string
  size: number
}
