import React from 'react'
import Page from './Page'
import {MDXProvider} from '@mdx-js/react'

let providedComponents = {
  wrapper: Page,
  pre: props => (<><div style={{clear: "both"}} /><div className="Code"><pre {...props}/></div><div style={{clear: "both"}} /></>),
  Center: (props) => (<div className="Center" {...props} />),
  Left: (props) => (<div className="Left" {...props} />),
  Right: (props) => (<div className="Right" {...props} />),
}

export default (props) => {
  return (
    <MDXProvider components={providedComponents}>
      {props.children}
    </MDXProvider>
  )
}
