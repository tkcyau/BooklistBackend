import { list } from '@keystone-next/keystone/schema';

import { integer, text, relationship } from '@keystone-next/fields';

export const Book = list({
  fields: {
    title: text({ isRequired: true }),
    year: integer({
      isRequired: true,
    }),
    author: relationship({
      ref: 'Author.book',

      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'dateOfBirth'],
        inlineCreate: { fields: ['name', 'dateOfBirth'] },
        inlineEdit: { fields: ['name', 'dateOfBirth'] },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['title', 'year', 'author'],
    },
  },
});
