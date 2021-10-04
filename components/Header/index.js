import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

export default observer(function Header () {
  const sections = ['Introduction', 'First Section', 'Second Section', 'Get Started']
  return pug`
    View.root
      each section, index in sections
        TouchableOpacity.section(key=index styleName=index === 0 ? 'first' : '')
          Text.sectionTitle= section
  `
})
