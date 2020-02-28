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
                  buildHookId: '5e58a462164f78932bb9f17c',
                  title: 'Sanity Studio',
                  name: 'blog-sanderjson-studio',
                  apiId: '9be77f18-a022-4070-8d1d-ada300e3aeeb'
                },
                {
                  buildHookId: '5e58a462f1881481d686f24d',
                  title: 'Blog Website',
                  name: 'blog-sanderjson',
                  apiId: '97aa458f-7d65-4a6d-9d72-4f32b0690faa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanderjson/blog-sanderjson',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-sanderjson.netlify.com', category: 'apps'}
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
