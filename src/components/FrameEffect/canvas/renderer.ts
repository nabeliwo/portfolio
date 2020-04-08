import { palette } from '../../../themes'
import { NoiseLineRenderer } from './NoiseLineRenderer'

const MAX_FRAME = 100000

export function renderer() {
  const canvas = document.getElementById('frame-effect') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  let canvasWidth = 0
  let canvasHeight = 0
  let frame = 0

  const topNoiseLine = new NoiseLineRenderer()
  const rightNoiseLine = new NoiseLineRenderer()
  const bottomNoiseLine = new NoiseLineRenderer()
  const leftNoiseLine = new NoiseLineRenderer()
  const aroundMargin = 50

  function resize() {
    canvasWidth = innerWidth * devicePixelRatio
    canvasHeight = innerHeight * devicePixelRatio
    canvas.width = canvasWidth
    canvas.height = canvasHeight
  }

  function tick() {
    requestAnimationFrame(tick)
    render()
  }

  function clearCanvas() {
    ctx.fillStyle = palette.BLACK
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    ctx.beginPath()
  }

  function frameCountUp() {
    frame++
    if (frame >= MAX_FRAME) frame = 0
  }

  function render() {
    clearCanvas()

    const leftTop = { x: aroundMargin, y: aroundMargin }
    const rightTop = { x: canvasWidth - aroundMargin, y: aroundMargin }
    const rightBottom = { x: canvasWidth - aroundMargin, y: canvasHeight - aroundMargin }
    const leftBottom = { x: aroundMargin, y: canvasHeight - aroundMargin }

    topNoiseLine.draw(ctx, leftTop, rightTop, frame, canvasWidth)
    rightNoiseLine.draw(ctx, rightTop, rightBottom, frame, canvasHeight)
    bottomNoiseLine.draw(ctx, leftBottom, rightBottom, frame, canvasWidth)
    leftNoiseLine.draw(ctx, leftTop, leftBottom, frame, canvasHeight)

    frameCountUp()
  }

  window.addEventListener('resize', resize)

  resize()
  tick()
}
