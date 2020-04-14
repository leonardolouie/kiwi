import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdPerson, MdNoteAdd} from 'react-icons'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Articles')
        .icon(MdNoteAdd)
        .child(
          S.list()
            .title('Articles')
            .items([
              S.listItem()
                .title('Open')
                .child(
                  S.documentList()
                    .title('Open')
                    .filter('_type == $type && editorialState == $state')
                    .params({type: 'article', state: 'open'})
                ),
              S.listItem()
                .title('Re-Opened')
                .child(
                  S.documentList()
                    .title('Re-Opened')
                    .filter('_type == $type && editorialState == $state')
                    .params({type: 'article', state: 'reopened'})
                ),
              S.listItem()
                .title('For Review')
                .child(
                  S.documentList()
                    .title('For review')
                    .filter('_type == $type && editorialState == $state')
                    .params({type: 'article', state: 'review'})
                ),
              S.listItem()
                .title('Waiting for Publish')
                .child(
                  S.documentList()
                    .title('Waiting for Publish')
                    .filter('_type == $type && editorialState == $state')
                    .params({type: 'article', state: 'awaiting'})
                ),
              S.listItem()
                .title('Published')
                .child(
                  S.documentList()
                    .title('Published')
                    .filter('_type == $type && editorialState == $state')
                    .params({type: 'article', state: 'published'})
                ),
              S.listItem()
                .title('Drafts'),
              S.listItem()
                .title('All articles')
                .schemaType('article')
                .child(S.documentTypeList('article').title('Articles'))
            ])
        ),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
