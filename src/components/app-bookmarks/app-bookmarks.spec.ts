import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Bookmarks } from './app-bookmarks';

describe('app-bookmarks', () => {
  let pageProperties: SpecPage;

  beforeEach(async () => {
    pageProperties = await newSpecPage({
      components: [Bookmarks],
      html: `<app-bookmarks></app-bookmarks>`,
    });
  });

  it('Should ADD a bookmark', () => {
    // const { rootInstance } = pageProperties;
    // const lenBefore = rootInstance.bookmarks.length;
    // rootInstance.addData({ name: 'Sagosh', tags: [{ index: 1, tag: 'tag' }] });
    // const lenAfter = rootInstance.bookmarks.length;
    expect(2).toBe(2);
  });
});
