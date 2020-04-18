import React from 'react'

import { path } from '../constants/application'

import { Head } from '../components/Head'

const AboutPage = () => (
  <>
    <Head title="アバウト" description="nabeliwo やこのサイトについて" slug={path.about} />
    <p>hello, world</p>
  </>
)

export default AboutPage
