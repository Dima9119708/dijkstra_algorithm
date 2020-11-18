import React from 'react'
import './node.css'

export const Node = ( { nodes } ) => {

  return <>
    {
      nodes.map( (node, i) => {

        return <div
          key={i}
          className={`node
                    ${node.isStart ? 'node-start' : ''}
                    ${node.isFinish ? 'node-finish' : ''}
                    ${node.isWall ? 'node-wall' : '' }`
                  }
          id={ node.row + '-' + node.col }
        />

      })
    }
  </>
}