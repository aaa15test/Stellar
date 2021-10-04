import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThumbsUp, faExternalLinkAlt, faDove } from '@fortawesome/free-solid-svg-icons'

export default observer(function BreakpointHeader ({ style }) {
  return pug`
    View.root
      View.links
        Text.name Stellar
        View.devices
          TouchableOpacity.device
            Text.backTitle Desktop
          TouchableOpacity.device
            Text.backTitle Tablet
          TouchableOpacity.device
            Text.backTitle Tablet (Portrait)
          TouchableOpacity.device
            Text.backTitle Mobile
        View.share
          FontAwesomeIcon.linkIcon(icon=faExternalLinkAlt color='#fff' size=16)
      View.links
        View.share
          View.facebook
            FontAwesomeIcon.linkIcon(icon=faThumbsUp color='#fff' size=14)
            Text.like Like
          View.twitter
            FontAwesomeIcon.linkIcon(icon=faDove color='#fff' size=14)
            Text.like Tweet
        View.back
          View.share
            Text.backTitle Back
          View.download
            Text.downloadTitle
              Text.backTitle= 'Download '
              Text (149,876)
  `
})
