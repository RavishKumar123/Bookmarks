import { Component, State, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { addData } from '../../redux/actions/data';
import { configureStore } from '../../redux/index';

export interface Validation {
  valid: boolean;
  message: string;
}

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: false,
})
export class Form {
  @State() name: string;
  @State() link: string;
  @State() tags: string;

  @State() loading: boolean;
  @State() error: any;

  @State() formValidation: Validation = { valid: true, message: '' };
  addData: (...args: any) => any;

  componentWillLoad() {
    store.setStore(configureStore({}));
    store.mapStateToProps(this, state => {
      const {
        bookmarkReducer: { loading, error },
      } = state;
      return {
        loading,
        error,
      };
    });
    store.mapDispatchToProps(this, {
      addData,
    });
  }

  handleNameChange(event) {
    this.name = event.target.value;
    console.log(this.name);
  }

  handleLinkChange(event) {
    this.link = event.target.value;
  }

  handleTagsChange(event) {
    this.tags = event.target.value;
  }

  emptyForm() {
    this.name = '';
    this.link = '';
    this.tags = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const body = {
        name: this.name,
        tags: this.transformTags(this.tags.split(',')),
        link: this.link,
        createdAt: Math.round(Date.now() / 1000),
      };
      this.addData(body);
      setTimeout(() => {
        if (!this.loading && this.error === null) {
          this.emptyForm();
        }
      }, 1000);
    }
  }
  transformTags(tags) {
    return tags.map((tag, index) => {
      return { index: index, tag: tag };
    });
  }

  validateForm() {
    if (!this.name || !this.link || !this.tags) {
      this.formValidation = { valid: false, message: 'Please fill all the fields' };
      return false;
    }
    this.formValidation = { valid: true, message: '' };
    return true;
  }

  render() {
    return (
      <div class="app-form">
        <div class="container">
          <h2>Add</h2>
          {!this.formValidation.valid && <span class="errorMsg">{this.formValidation.message}</span>}
          {!this.loading && this.error !== null && <span class="errorMsg">{this.error.message}</span>}

          <div class="formContainer">
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type="text" placeholder="Name" value={this.name} onInput={e => this.handleNameChange(e)} />
              <input type="text" placeholder="Link" value={this.link} onInput={e => this.handleLinkChange(e)} />
              <input type="text" placeholder="Tags" value={this.tags} onInput={e => this.handleTagsChange(e)} />
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
