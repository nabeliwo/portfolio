import { palette } from '../../../themes'
import { getRandomNum } from './lib'

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

export class NoiseLineRenderer {
  stepSize = 10
  nextWeakShakeFrame: number
  weakShakeFlag = false
  nextStrongShakeFrame: number
  strongShakeFlag = false
  nextNoiseFrame: number
  noiseFlag = false
  noiseSize: number
  noiseStartPoint: number

  constructor() {
    this.nextWeakShakeFrame = this.getNextActionFrame(actionType.weakShake, 0)
    this.nextStrongShakeFrame = this.getNextActionFrame(actionType.strongShake, 0)
    this.nextNoiseFrame = this.getNextActionFrame(actionType.noise, 0)
  }

  getNextActionFrame(type: ActionType, currentFrame: number) {
    let randomNum = 0

    if (type === 'weakShake') {
      randomNum = getRandomNum(100, 400)
    } else if (type === 'strongShake') {
      randomNum = getRandomNum(600, 1000)
    } else if (type === 'noise') {
      randomNum = getRandomNum(300, 600)
    }

    return currentFrame + randomNum
  }

  draw(ctx: CanvasRenderingContext2D, startPosition: Position, endPosition: Position, frame: number, canvasSize: number) {
    if (startPosition.x !== endPosition.x && startPosition.y !== endPosition.y) {
      throw new Error('"draw" only supports straight lines.')
    }

    const lineDirection = startPosition.x === endPosition.x ? lineDirectionType.vertical : lineDirectionType.horizontal
    let baseLine: number
    let noiseArray: Position[]

    ctx.lineWidth = 3
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
        ctx.lineTo(firstPosition.x - this.stepSize, baseLine)

        noiseArray.forEach(({ x, y }) => {
          ctx.lineTo(x, y)
        })

        ctx.lineTo(lastPosition.x + this.stepSize, baseLine)
      } else if (lineDirection === lineDirectionType.vertical) {
        ctx.lineTo(baseLine, firstPosition.y - this.stepSize)

        noiseArray.forEach(({ x, y }) => {
          ctx.lineTo(x, y)
        })

        ctx.lineTo(baseLine, lastPosition.y + this.stepSize)
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
      position = getRandomNum(position - 10, position + 10)
    }

    if (frame >= this.nextWeakShakeFrame + 10) {
      this.weakShakeFlag = false
      this.nextWeakShakeFrame = this.getNextActionFrame('weakShake', frame)
    }

    return position
  }

  getStrongShakeLine(frame: number, position: number) {
    if (frame >= this.nextStrongShakeFrame) {
      this.strongShakeFlag = true
    }

    if (this.strongShakeFlag) {
      position = getRandomNum(position - 50, position + 50)
    }

    if (frame >= this.nextStrongShakeFrame + 20) {
      this.strongShakeFlag = false
      this.nextStrongShakeFrame = this.getNextActionFrame('strongShake', frame)
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
    const endNoiseFrame = 50
    const noiseArray: Position[] = []

    if (frame >= this.nextNoiseFrame) {
      if (!this.noiseFlag) {
        this.noiseSize = getRandomNum(300, canvasSize - startPoint - (canvasSize - endPoint) - this.stepSize * 2)
        this.noiseStartPoint = getRandomNum(startPoint + this.stepSize, endPoint - this.stepSize - this.noiseSize)
        this.noiseFlag = true
      }
    }

    if (this.noiseFlag) {
      for (let i = this.noiseStartPoint; i <= this.noiseStartPoint + this.noiseSize; i += this.stepSize) {
        const diff = (this.nextNoiseFrame + endNoiseFrame - frame) * 1.5
        let position = baseLine

        if ((i / 10) % 2 === 0) {
          position = getRandomNum(baseLine, baseLine + diff)
        } else {
          position = getRandomNum(baseLine - diff, baseLine)
        }

        if (lineDirection === 'horizontal') {
          noiseArray.push({ x: i, y: position })
        } else if (lineDirection === 'vertical') {
          noiseArray.push({ x: position, y: i })
        }
      }
    }

    if (frame >= this.nextNoiseFrame + endNoiseFrame) {
      this.noiseFlag = false
      this.nextNoiseFrame = this.getNextActionFrame('noise', frame)
    }

    return noiseArray
  }
}
