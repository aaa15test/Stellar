import React from 'react'
import { observer } from 'startupjs'
import { BASE_URL } from '@env'
import { View, Text, Image } from 'react-native'
import { LearnMoreButton } from 'components'
import './index.styl'

export default observer(function Introduction () {
  const base = BASE_URL

  return pug`
    View.root
      View.image
        Image.phoneImage(source={ uri: base + '/img/phone.jpg' })
      View.textBlock
        Text.title Ipsum sed adipiscing
        View.linearLine
        Text.description Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
        LearnMoreButton
  `
})
