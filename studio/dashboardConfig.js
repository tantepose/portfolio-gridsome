export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '601af2abf5f12a17df2f8998',
                  title: 'Sanity Studio',
                  name: 'portfolio-gridsome-studio',
                  apiId: '319cb0e3-c905-4603-9b52-768dbd001800'
                },
                {
                  buildHookId: '601af2acdfc41b10a73ff388',
                  title: 'Blog Website',
                  name: 'portfolio-gridsome-web',
                  apiId: '0898b17d-f1fa-45fe-b14e-f196ec1a8a7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tantepose/portfolio-gridsome',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://portfolio-gridsome-web.netlify.app', category: 'apps'}
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
