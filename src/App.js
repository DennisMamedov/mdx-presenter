// src/App.js
import React, {Component, Suspense} from 'react'
import './App.css'
import MDX from './test/bleh.mdx'
import Document from './Components/Document'

class App extends Component {
  render() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
          <Document>
            <MDX />
          </Document>
        </Suspense>
    )
  }
}
export default App
