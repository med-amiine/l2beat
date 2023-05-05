import React, { SVGAttributes } from 'react'

import { Icon } from '../Icon'

export function OutLinkIcon(props: SVGAttributes<SVGElement>) {
  return (
    <Icon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="fill-link"
      aria-label="Outgoing link icon"
      {...props}
    >
      <path d="M13.8562 1.59495C13.8363 1.59558 13.8165 1.59732 13.7968 1.60016H10.6666C10.596 1.59916 10.5258 1.61221 10.4602 1.63857C10.3946 1.66492 10.3349 1.70405 10.2846 1.75367C10.2343 1.8033 10.1943 1.86243 10.167 1.92763C10.1398 1.99284 10.1257 2.06281 10.1257 2.13349C10.1257 2.20417 10.1398 2.27415 10.167 2.33935C10.1943 2.40455 10.2343 2.46369 10.2846 2.51331C10.3349 2.56293 10.3946 2.60206 10.4602 2.62841C10.5258 2.65477 10.596 2.66782 10.6666 2.66682H12.5791L7.08955 8.15641C7.03836 8.20555 6.9975 8.26441 6.96935 8.32955C6.94119 8.39469 6.92632 8.46478 6.9256 8.53574C6.92488 8.60669 6.93832 8.67708 6.96514 8.74277C6.99196 8.80847 7.03162 8.86815 7.0818 8.91833C7.13197 8.9685 7.19166 9.00816 7.25735 9.03498C7.32304 9.0618 7.39343 9.07525 7.46439 9.07453C7.53534 9.0738 7.60544 9.05893 7.67057 9.03078C7.73571 9.00263 7.79457 8.96176 7.84372 8.91057L13.3333 3.42099V5.33349C13.3323 5.40416 13.3454 5.47433 13.3717 5.53991C13.3981 5.6055 13.4372 5.66519 13.4868 5.71552C13.5364 5.76585 13.5956 5.80581 13.6608 5.83309C13.726 5.86037 13.796 5.87442 13.8666 5.87442C13.9373 5.87442 14.0073 5.86037 14.0725 5.83309C14.1377 5.80581 14.1968 5.76585 14.2465 5.71552C14.2961 5.66519 14.3352 5.6055 14.3616 5.53991C14.3879 5.47433 14.401 5.40416 14.4 5.33349V2.2012C14.4106 2.12441 14.4043 2.04623 14.3817 1.97211C14.359 1.89798 14.3204 1.82968 14.2687 1.77198C14.2169 1.71427 14.1532 1.66854 14.082 1.63796C14.0107 1.60739 13.9337 1.59271 13.8562 1.59495ZM3.19997 3.73349C2.617 3.73349 2.1333 4.21719 2.1333 4.80016V12.8002C2.1333 13.3831 2.617 13.8668 3.19997 13.8668H11.2C11.7829 13.8668 12.2666 13.3831 12.2666 12.8002V7.46682V6.09182L11.2 7.15849V8.53349V12.8002H3.19997V4.80016H7.46663H8.5333H8.84163L9.9083 3.73349H8.5333H7.46663H3.19997Z" />
    </Icon>
  )
}