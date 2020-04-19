import { palette, space } from '../../../themes'
import { getRandomNum } from '../../../libs/getRandomNum'

type ActionType = 'weakShake' | 'strongShake' | 'noise'
type Position = {
  x: number
  y: number
}
type LineDirection = 'horizontal' | 'vertical'

const actionType = {
  weakShake: 'weakShake' as const,
  strongShake: 'strongShake' as const,
  noise: 'noise' as const,
}
const lineDirectionType = {
  horizontal: 'horizontal' as const,
  vertical: 'vertical' as const,
}

const dpr = typeof window !== 'undefined' ? devicePixelRatio : 1
const STEP_SIZE = 5 * dpr
const LINE_WIDTH = 1 * dpr
const WEAK_SHAKE_RUNOUT_WIDTH = 5 * dpr
const WEAK_SHAKE_FRAME_BUFFER = 10
const STRONG_SHAKE_RUNOUT_WIDTH = space.m * dpr
const STRONG_SHAKE_FRAME_BUFFER = 20
const MIN_NOISE_SIZE = 150 * dpr
const END_NOISE_FRAME = space.m * dpr

export class NoiseLineRenderer {
  nextWeakShakeFrame: number
  weakShakeFlag = false
  nextStrongShakeFrame: number
  strongShakeFlag = false
  nextNoiseFrame: number
  noiseFlag = false
  noiseSize: number = 0
  noiseStartPoint: number = 0

  constructor() {
    this.nextWeakShakeFrame = this.getNextActionFrame(actionType.weakShake, 0)
    this.nextStrongShakeFrame = this.getNextActionFrame(actionType.strongShake, 0)
    this.nextNoiseFrame = this.getNextActionFrame(actionType.noise, 0)
  }

  getNextActionFrame(type: ActionType, currentFrame: number) {
    let randomNum = 0

    if (type === actionType.weakShake) {
      randomNum = getRandomNum(100, 400)
    } else if (type === actionType.strongShake) {
      randomNum = getRandomNum(600, 1000)
    } else if (type === actionType.noise) {
      randomNum = getRandomNum(300, 600)
    }

    return currentFrame + randomNum
  }

  draw(ctx: CanvasRenderingContext2D, startPosition: Position, endPosition: Position, frame: number, canvasSize: number) {
    if (startPosition.x !== endPosition.x && startPosition.y !== endPosition.y) {
      throw new Error('"draw" only supports straight lines.')
    }

    const lineDirection = startPosition.x === endPosition.x ? lineDirectionType.vertical : lineDirectionType.horizontal
    let baseLine: number = 0
    let noiseArray: Position[] = []

    ctx.lineWidth = LINE_WIDTH
    ctx.strokeStyle = palette.BLUE

    if (lineDirection === lineDirectionType.horizontal) {
      baseLine = this.getWeakShakeLine(frame, startPosition.y)
      baseLine = this.getStrongShakeLine(frame, baseLine)
      ctx.moveTo(startPosition.x, baseLine)
      noiseArray = this.getNoiseArray(frame, startPosition.x, endPosition.x, baseLine, lineDirection, canvasSize)
    } else if (lineDirection === lineDirectionType.vertical) {
      baseLine = this.getWeakShakeLine(frame, startPosition.x)
      baseLine = this.getStrongShakeLine(frame, baseLine)
      ctx.moveTo(baseLine, startPosition.y)
      noiseArray = this.getNoiseArray(frame, startPosition.y, endPosition.y, baseLine, lineDirection, canvasSize)
    }

    if (noiseArray.length > 0) {
      const firstPosition = noiseArray[0]
      const lastPosition = noiseArray[noiseArray.length - 1]

      if (lineDirection === lineDirectionType.horizontal) {
        ctx.lineTo(firstPosition.x - STEP_SIZE, baseLine)

        noiseArray.forEach(({ x, y }) => {
          ctx.lineTo(x, y)
        })

        ctx.lineTo(lastPosition.x + STEP_SIZE, baseLine)
      } else if (lineDirection === lineDirectionType.vertical) {
        ctx.lineTo(baseLine, firstPosition.y - STEP_SIZE)

        noiseArray.forEach(({ x, y }) => {
          ctx.lineTo(x, y)
        })

        ctx.lineTo(baseLine, lastPosition.y + STEP_SIZE)
      }
    }

    if (lineDirection === lineDirectionType.horizontal) {
      ctx.lineTo(endPosition.x, baseLine)
    } else if (lineDirection === lineDirectionType.vertical) {
      ctx.lineTo(baseLine, endPosition.y)
    }

    ctx.stroke()
  }

  getWeakShakeLine(frame: number, position: number) {
    if (frame >= this.nextWeakShakeFrame) {
      this.weakShakeFlag = true
    }

    if (this.weakShakeFlag) {
      position = getRandomNum(position - WEAK_SHAKE_RUNOUT_WIDTH, position + WEAK_SHAKE_RUNOUT_WIDTH)
    }

    if (frame >= this.nextWeakShakeFrame + WEAK_SHAKE_FRAME_BUFFER) {
      this.weakShakeFlag = false
      this.nextWeakShakeFrame = this.getNextActionFrame(actionType.weakShake, frame)
    }

    return position
  }

  getStrongShakeLine(frame: number, position: number) {
    if (frame >= this.nextStrongShakeFrame) {
      this.strongShakeFlag = true
    }

    if (this.strongShakeFlag) {
      position = getRandomNum(position - STRONG_SHAKE_RUNOUT_WIDTH, position + STRONG_SHAKE_RUNOUT_WIDTH)
    }

    if (frame >= this.nextStrongShakeFrame + STRONG_SHAKE_FRAME_BUFFER) {
      this.strongShakeFlag = false
      this.nextStrongShakeFrame = this.getNextActionFrame(actionType.strongShake, frame)
    }

    return position
  }

  getNoiseArray(
    frame: number,
    startPoint: number,
    endPoint: number,
    baseLine: number,
    lineDirection: LineDirection,
    canvasSize: number,
  ) {
    const noiseArray: Position[] = []

    if (frame >= this.nextNoiseFrame) {
      if (!this.noiseFlag) {
        this.noiseSize = getRandomNum(MIN_NOISE_SIZE, canvasSize - startPoint - (canvasSize - endPoint) - STEP_SIZE * 2)
        this.noiseStartPoint = getRandomNum(startPoint + STEP_SIZE, endPoint - STEP_SIZE - this.noiseSize)
        this.noiseFlag = true
      }
    }

    if (this.noiseFlag) {
      let jaggyFlag = true

      for (let i = this.noiseStartPoint; i <= this.noiseStartPoint + this.noiseSize; i += STEP_SIZE) {
        const remainFrame = this.nextNoiseFrame + END_NOISE_FRAME - frame
        let position = baseLine

        if (jaggyFlag) {
          jaggyFlag = false
          position = getRandomNum(baseLine, baseLine + remainFrame)
        } else {
          jaggyFlag = true
          position = getRandomNum(baseLine - remainFrame, baseLine)
        }

        if (lineDirection === lineDirectionType.horizontal) {
          noiseArray.push({ x: i, y: position })
        } else if (lineDirection === lineDirectionType.vertical) {
          noiseArray.push({ x: position, y: i })
        }
      }
    }

    if (frame >= this.nextNoiseFrame + END_NOISE_FRAME) {
      this.noiseFlag = false
      this.nextNoiseFrame = this.getNextActionFrame('noise', frame)
    }

    return noiseArray
  }
}
