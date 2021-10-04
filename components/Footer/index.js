import React from 'react'
import { observer } from 'startupjs'
import { LearnMoreButton } from 'components'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import './index.styl'

const WHITE_COLOR = '#fff'

export default observer(function Footer () {
  const sections = [
    {
      title: 'Address',
      description: '1234 Somewhere Road • Nashville, TN 00000 • USA'
    },
    {
      title: 'Phone',
      description: '(000) 000-0000 x 0000'
    },
    {
      title: 'Email',
      description: 'information@untitled.tld'
    }
  ]
  const icons = [faTwitter, faFacebookF, faInstagram, faGithub, faDribbble]

  return pug`
    View.root
      View.sections
        Text.title Aliquam sed mauris
        Text.description Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
        LearnMoreButton(footer='footer')
      View.sections(styleName='rightSection')
        Text.title Etiam feugiat
        View.info
          each section, index in sections
            View.options(key=index styleName=index === sections.length-1 ? 'last' : '')
              Text.subSectionTitle= section.title
              Text.sectionDescription(styleName=index === 2 ? 'descriptionEmail' : '')= section.description
        View.icons
          each icon in icons
            TouchableOpacity.iconInside
              FontAwesomeIcon.icon(icon=icon color=WHITE_COLOR size=20)
  `
})
