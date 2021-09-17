module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  base: '/',
  themeConfig: {
    docsDir: 'docs',
    repo: 'blackswanhouse/blackswanhouse.github.io',
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}