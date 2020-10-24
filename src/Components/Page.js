import React from 'react'
import './Page.css'

export default function Page(props) {

  let children = React.Children.toArray(props.children);

  let newLayout = [[]];

  children.forEach(child => {
    let type = child.props ? child.props.mdxType : null

    if(type !== 'hr') {
      newLayout[newLayout.length - 1].push(child);
    } else {
      newLayout.push([])
    }
  })
  return (
    <div className="Total">
    {
      // eslint-disable-next-line
      newLayout.map(page => {
            return (
              <div className="Page">
              {page}
              <div style={{clear: "both"}} />
              </div>
            )
      }
    )
  }

  </div>
)
}
