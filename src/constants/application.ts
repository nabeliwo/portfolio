export const path = {
  root: '/',
  about: '/about',
  life: '/life',
  lifeHealth: '/life/health',
  lifeBeauty: '/life/beauty',
  lifeHousing: '/life/housing',
  hobby: '/hobby',
  link: '/link',
}

export const categories = {
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
