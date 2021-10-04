import React from 'react'
import { observer } from 'startupjs'
import { Text, TouchableOpacity } from 'react-native'
import './index.styl'

export default observer(function LearnMoreButton ({ getStarted, footer }) {
  return pug`
    TouchableOpacity.learnMore(styleName=getStarted)
      Text.learnMoreText(styleName={ getStarted, footer })=getStarted ? 'Get Started' : 'Learn More'
  `
})
