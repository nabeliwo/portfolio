import React from 'react'

import { categories, path } from '../../constants/application'

import { Head } from '../../components/Head'
import { MainLayout } from '../../components/MainLayout'

const LifePage = () => (
  <>
    <Head title="健康" description="nabeliwo の健康に対する考え方" slug={path.lifeHealth} />
    <MainLayout title="生活" categories={categories.life}>
      <p>
        100歳まで生きたいみたいな目標があるわけではないが、70歳くらいまではやりたいことが健康上の理由でできない状態にはしたくないし、肉体的に健全な状態であることが人生の幸福度に与える影響はでかいと考えているので、最低限健康でいるための努力はしていきたい。
      </p>
      <p>ちなみに基本的に運動は好きではない。</p>
      <h2>運動</h2>
      <p>
        <a href="https://www.nintendo.co.jp/ring/">リングフィットアドベンチャー</a>を毎日やる。
      </p>
      <h2>食事</h2>
      <h2>睡眠</h2>
    </MainLayout>
  </>
)

export default LifePage
