import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <div class="container">
          <div class="row centerHeader">
            <h2>Bookmarks</h2>
          </div>
          <div class="dataContainer">
            <div class="col-md-8">
              <app-bookmarks></app-bookmarks>
            </div>
            <div class="col-md-4">
              <app-form></app-form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
