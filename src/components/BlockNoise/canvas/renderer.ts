import { BlockNoiseRenderer } from './BlockNoiseRenderer'

const MAX_FRAME = 100000

export function renderer() {
  const canvas = document.getElementById('block-noise') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  let canvasWidth = 0
  let canvasHeight = 0
  let requestId = 0

  const blockNoiseRenderer = new BlockNoiseRenderer()

  function resize() {
    canvasWidth = innerWidth * devicePixelRatio
    canvasHeight = innerHeight * devicePixelRatio
    canvas.width = canvasWidth
    canvas.height = canvasHeight
  }

  function tick() {
    requestId = requestAnimationFrame(tick)
    render()
  }

  function render() {
    if (!ctx) return
    blockNoiseRenderer.draw(ctx, canvasWidth, canvasHeight)
  }

  window.addEventListener('resize', resize)

  resize()
  tick()

  return () => {
    cancelAnimationFrame(requestId)
  }
}
