import React from 'react'

import { path } from '../constants/application'

import { Head } from '../components/Head'

const AboutPage = () => (
  <>
    <Head title="アバウト" description="nabeliwo.com や nabeliwo 自身について" slug={path.about} />
    <p>アバウトページ</p>
  </>
)

export default AboutPage
