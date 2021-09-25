import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { AppRoot } from './app-root';

describe('app-root', () => {
  let pageProperties: SpecPage;

  beforeEach(async () => {
    pageProperties = await newSpecPage({
      components: [AppRoot],
      html: `<app-root></app-root>`,
    });
  });

  it('should have route containg component app-home', () => {
    const { root } = pageProperties;
    expect(root.querySelector('stencil-route[component="app-home"]')).toBeTruthy();
  });

 
});
