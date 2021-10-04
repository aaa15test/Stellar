import React from 'react'
import { observer } from 'startupjs'
import { BASE_URL } from '@env'
import { View, Image, Text } from 'react-native'
import './index.styl'

export default observer(function Logo () {
  const base = BASE_URL

  return pug`
    View.root
      Image.image(source={ uri: base + '/img/logo.jpg' })
      Text.title Stellar
      View.description
        Text.descriptionText
          | Just another free, fully responsive site template 
          | built by 
          Text.dotted @ajlkn 
          | for 
          Text.dotted HTML5 UP.
  `
})
