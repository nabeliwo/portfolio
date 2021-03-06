export const path = {
  root: '/',
  about: '/about',
  aboutMe: '/about/me',
  aboutSite: '/about/site',
  life: '/life',
  lifeHealth: '/life/health',
  lifeBeauty: '/life/beauty',
  lifeHousing: '/life/housing',
  hobby: '/hobby',
  link: '/link',
}

export const categories: {
  [key: string]: Array<{
    title: string
    path: string
    exact?: boolean
  }>
} = {
  about: [
    {
      title: 'トップ',
      path: path.about,
      exact: true,
    },
    {
      title: 'nabeliwo',
      path: path.aboutMe,
    },
    {
      title: 'サイト',
      path: path.aboutSite,
    },
  ],
  life: [
    {
      title: 'トップ',
      path: path.life,
      exact: true,
    },
    {
      title: '健康',
      path: path.lifeHealth,
    },
    {
      title: '美容',
      path: path.lifeBeauty,
    },
    {
      title: '住居',
      path: path.lifeHousing,
    },
  ],
}
