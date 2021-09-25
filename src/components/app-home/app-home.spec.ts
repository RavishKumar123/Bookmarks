import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { AppHome } from './app-home';

describe('app-home', () => {
  let pageProperties: SpecPage;

  beforeEach(async () => {
    pageProperties = await newSpecPage({
      components: [AppHome],
      html: `<app-home></app-home>`,
    });
  });

  it('should have app-bookmark and app-form component', () => {
    const { root } = pageProperties;
    expect(root.querySelector('app-bookmarks')).toBeTruthy();
    expect(root.querySelector('app-form')).toBeTruthy();
  });
});
