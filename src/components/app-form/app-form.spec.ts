import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { AppForm } from './app-form';

describe('app-home', () => {
  let pageProperties: SpecPage;

  beforeEach(async () => {
    pageProperties = await newSpecPage({
      components: [AppForm],
      html: `<app-form></app-form>`,
    });
  });

  it('should have heading', () => {
    const { root } = pageProperties;
    expect(root.querySelector('h2').textContent).toEqual('Add');
  });

  it('renders input fields', async () => {
    const { root } = pageProperties;
    expect(root.querySelector('input[placeholder="Name"]')).toBeTruthy();
    expect(root.querySelector('input[placeholder="Link"]')).toBeTruthy();
    expect(root.querySelector('input[placeholder="Tags"]')).toBeTruthy();
  });

  it('has a button for formsubmit', async () => {
    const { root } = pageProperties;
    expect(root.querySelector('input[type="submit"]')).toBeTruthy();
  });

  it('should contain handleNameChange() method that changes the variable name to given input', () => {
    const { rootInstance } = pageProperties;
    const value = 'Gmail';
    rootInstance.handleNameChange({ target: { value } });
    expect(rootInstance.name).toBe(value);
  });

  it('should contain emptyForm() method that empties all form variables', () => {
    const { rootInstance } = pageProperties;
    rootInstance.emptyForm();
    expect(rootInstance.name).toBe('');
  });


});
