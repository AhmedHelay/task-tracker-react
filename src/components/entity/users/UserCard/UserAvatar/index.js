import React from 'react'

import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import {useStyle} from './components'

export default function UserAvatar({placement, firstName, lastName}) {
  const shortName = () =>
    firstName && lastName ? firstName.charAt(0) + lastName.charAt(0) : 'A'

  const fullName = () =>
    firstName && lastName ? firstName + ' ' + lastName : 'Anonymous'

  const classes = useStyle()
  return (
    <Tooltip title={fullName()} placement={placement ? placement : 'top'} arrow>
      <Avatar className={classes.avatar}>{shortName()}</Avatar>
    </Tooltip>
  )
}
