import React from 'react'
import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/dijkstra'
import { Node } from './node/Node'
import './pathfindingVisualizer.css'

const gridList = [
  '..................',
  '.XXXXXXXX.........',
  '..................',
  '......XXXXXX......',
  '....XX......XX....',
  '..................',
  '..................',
  '..................',
  '..................',
  '..................',
]

const grid = gridList.map(item => item.split(''))

const startX = 9
const startY = 8

const endX = 0
const endY = 8


export const PathfindingVisualizer = () => {

  const [initGrid, setGrid] = React.useState([])


  React.useEffect(() => {

    const countRow = grid.length
    const countCol = grid[0].length

    const initGrid = getInitialGrid(countRow, countCol)
    setGrid(initGrid)

  }, [])


  const animationPath = (path) => {
    path.forEach((item, i) => {

      setTimeout(() => {

        document
          .getElementById(`${item.row}-${item.col}`)
          .classList
          .add('node-path')

      }, 50 * i)

    })
  }


  const animationAllNodes = (allVisitedNodes, path) => {

    allVisitedNodes.forEach((item, i) => {

      if (item.isFinish) {
        setTimeout(() => animationPath(path), 10 * allVisitedNodes.length)
      }

      setTimeout(() => {

        document
          .getElementById(`${item.row}-${item.col}`)
          .classList
          .add('node-visited')

      }, 10 * i)

    })
  }

  const handleClick = () => {

    const startNode = initGrid[startX][startY]
    const finishNode = initGrid[endX][endY]

    const allVisitedNodes = dijkstra(initGrid, startNode, finishNode)
    const path = getNodesInShortestPathOrder(finishNode)

    animationAllNodes(allVisitedNodes, path)
  }


  return (
    <div >

      <button
        onClick={handleClick}
        className="button"
      >
        Алгоритм Дейкстры
      </button>

      <div
        style={ { width: grid[0].length * 30 } }
        className="nodes"
      >

        { initGrid.map((item, i) => <Node key={i} nodes={item} />) }

      </div>

    </div>
  )
}


function getInitialGrid(countRow, countCol) {

  const grid = []

  for (let row = 0; row < countRow; row++) {

    const currentRow = []

    for (let col = 0; col < countCol; col++) {
      currentRow.push(createNode(col, row))
    }

    grid.push(currentRow)
  }

  return grid
}


function createNode(col, row) {
  return {
    row,
    col,
    isStart: row === startX && col === startY,
    isFinish: row === endX && col === endY,
    distance: Infinity,
    isVisited: false,
    isWall: grid[row][col] === 'X' ? true : false,
    previousNode: null,
  }
}