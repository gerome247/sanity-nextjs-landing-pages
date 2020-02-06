export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e3c4a5ad53259a2f2995939',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5o492jwm',
                  apiId: 'a114143f-4612-4769-97d4-353b5e2f4b24'
                },
                {
                  buildHookId: '5e3c4a5ba868ee7fc41be9b2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bb922gb6',
                  apiId: 'd2cb3687-1dd0-45dc-954b-333aeb291cca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerome247/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bb922gb6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
