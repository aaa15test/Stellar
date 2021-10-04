import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import { Content, Footer, Logo } from 'components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      View.main
        Logo
        Content
        Footer
          
  `
})
