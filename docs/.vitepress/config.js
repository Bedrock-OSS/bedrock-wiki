module.exports = {
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
  
    themeConfig: {
      repo: 'vuejs/vitepress',
      docsDir: 'docs',
  
      editLinks: true,
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
  
      algolia: {
        apiKey: 'c57105e511faa5558547599f120ceeba',
        indexName: 'vitepress'
      },
  
      carbonAds: {
        carbon: 'CEBDT27Y',
        custom: 'CKYD62QM',
        placement: 'vuejsorg'
      },
  
      nav: [
        { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
        {
          text: 'Config Reference',
          link: '/config/basics',
          activeMatch: '^/config/'
        },
        {
          text: 'Release Notes',
          link: 'https://github.com/vuejs/vitepress/releases'
        }
      ],
  
      sidebar: {
        '/': getSidebar()
      }
    }
  }
  
  function getSidebar() {
    return [
      {
        text: 'Introduction',
        children: [
          { text: 'Biome Tags', link: '/documentation/biome-tags' }
        ]
      }
    ]
  }
  