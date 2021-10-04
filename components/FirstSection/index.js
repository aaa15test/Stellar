import React from 'react'
import { observer } from 'startupjs'
import { LearnMoreButton } from 'components'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCode, faCopy, faGem } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function FirstSection () {
  const features = [
    {
      color: '#efa8b0',
      title: 'Ipsum consequat',
      icon: faCode
    },
    {
      color: '#a89cc8',
      title: 'Amed sed feugiat',
      icon: faCopy
    },
    {
      color: '#8cc9f0',
      title: 'Dolor nullam',
      icon: faGem
    }
  ]

  return pug`
    View.root
      Text.title Magna veroeros
      View.linearLine
      View.features
        each feature, index in features
          View.feature(
            key=index
            styleName=index === 0 ? 'first' : index === features.length-1 ? 'last' : ''
          )
            View.iconContent
              View.iconInside
                FontAwesomeIcon.icon(icon=feature.icon color=feature.color size=60)
            Text.descriptionTitle= feature.title
            Text.description Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
      LearnMoreButton
  `
})
