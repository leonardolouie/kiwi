export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Open',
        query: '*[_type == "article" && editorialState == "open"] | order(_updatedAt desc) [0...10]'
      },
      layout: {
        width: 'small',
        height: 'large'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Re-Opened',
        query: '*[_type == "article" && editorialState == "reopened"] | order(_updatedAt desc) [0...10]'
      },
      layout: {
        width: 'small',
        height: 'large'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Needs Review',
        query: '*[_type == "article" && editorialState == "review"] | order(_updatedAt desc) [0...10]'
      },
      layout: {
        width: 'small',
        height: 'large'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Awaiting Publication',
        query: '*[_type == "article" && editorialState == "awaiting"] | order(_updatedAt desc) [0...10]'
      },
      layout: {
        width: 'small',
        height: 'large'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Published',
        query: '*[_type == "article" && editorialState == "published"] | order(_updatedAt desc) [0...10]'
      },
      layout: {
        width: 'small',
        height: 'small'
      }
    },
    {name: 'structure-menu',
      layout: {
        width: 'small',
        height: 'small'
      }
    },
    {
      name: 'project-info',
      layout: {
        width: 'small'
      },
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d48a837401c8b84b17fec33',
                  title: 'Editor Studio',
                  name: 'kiwi-studio',
                  apiId: '9fc42bf9-cbf9-4a21-bf23-058d1ad120d6'
                },
                {
                  buildHookId: '5d48a837401c8b84b17fec34',
                  title: 'The Manila Times',
                  name: 'kiwi-web',
                  apiId: '5931ff20-4f9e-4cb6-839c-da86f27ba912'
                },
                {
                  buildHookId: '5d4b972738b7e69fb248d192',
                  title: 'Journalist Studio',
                  name: 'kiwi-app',
                  apiId: 'e5d4743d-8921-4f11-b908-7236c9d904d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/1601/kiwi',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kiwi-web.netlify.com', category: 'apps'}
        ]
      }
    }
  ]
}
