import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import { Introduction, FirstSection, SecondSection, GetStarted, Header } from 'components'
import './index.styl'

export default observer(function Content () {
  return pug`
    View
      Header
      Introduction
      FirstSection
      SecondSection
      GetStarted
  `
})
