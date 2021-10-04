import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Layout } from '@startupjs/ui'

export default observer(function ({ children }) {
  return pug`
    Layout
      Div.body= children
  `
})
