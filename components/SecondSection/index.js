import React from 'react'
import { observer } from 'startupjs'
import { LearnMoreButton } from 'components'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCodeBranch, faFolderOpen, faSignal, faLaptop, faGem } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function SecondSection () {
  const features = [
    {
      icon: faCodeBranch,
      number: '5,120',
      title: 'Etiam'
    },
    {
      icon: faFolderOpen,
      number: '8,182',
      title: 'Magma'
    },
    {
      icon: faSignal,
      number: '2,048',
      title: 'Tempus'
    },
    {
      icon: faLaptop,
      number: '4,096',
      title: 'Aliquam'
    },
    {
      icon: faGem,
      number: '1,024',
      title: 'Nullam'
    }
  ]
  return pug`
    View.root
      Text.title Ipsum consequat
      View.linearLine
      Text.descriptionTitle
        | Donec imperdiet consequat consequat. Suspendisse feugiat congue
        | posuere. Nulla massa urna, fermentum eget quam aliquet.
      View.features
        each feature, index in features
          View.feature(key=index styleName=index)
            FontAwesomeIcon.icon(icon=feature.icon color='#fff' size=78)
            Text.iconTitle= feature.number
            Text.description= feature.title
      Text.textDescription Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
      LearnMoreButton
  `
})
