import { Component, h } from '@stencil/core';
import { configureStore } from '../../redux/index';
import { store } from '@stencil/redux';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  componentWillLoad() {
    store.setStore(configureStore({}));
  }
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
