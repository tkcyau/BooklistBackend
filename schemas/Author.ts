import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Author = list({
  fields: {
    name: text({ isRequired: true }),
    dateOfBirth: text({ isRequired: true }),
    book: relationship({ ref: 'Book.author', many: true }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'dateOfBirth', 'book'],
    },
  },
});
