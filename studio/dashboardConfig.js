export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f8564c433cc66bd04db0b16',
                  title: 'Sanity Studio',
                  name: 'bd-sapper-sanity-studio',
                  apiId: 'b2d940ee-7b7a-4af6-9bc2-b62ff5661b29'
                },
                {
                  buildHookId: '5f8564c4e0699cb6ed7f8bfa',
                  title: 'Blog Website',
                  name: 'bd-sapper-sanity',
                  apiId: 'dd6b7f85-79bb-47d1-81fb-2ad9d68eae37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GiulianoBD/bd-sapper-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bd-sapper-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
