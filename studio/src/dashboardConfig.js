export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e44220c69278df7667ffba9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2c3hksdg',
                  apiId: 'c9091afc-c6df-46d8-99f5-95104ebfb60d'
                },
                {
                  buildHookId: '5e44220c69278d23237ffba2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-24ufcdk6',
                  apiId: 'a8b08e52-92a0-4995-ab37-590f1b20d7f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rollymaduk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-24ufcdk6.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
