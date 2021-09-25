import { Component, State, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { loadData, addData, deleteData } from '../../redux/actions/data';
import { configureStore } from '../../redux/index';

@Component({
  tag: 'app-bookmarks',
  styleUrl: 'app-bookmarks.css',
  shadow: false,
})
export class Bookmarks {
  //Component Variables
  @State() bookmarks: any;
  @State() loading: boolean;
  @State() error: any;
  @State() copiedBookmarks: any;
  @State() search: string;

  //Action to apply on state
  loadData: (...args: any) => any;
  addData: (...args: any) => any;
  deleteData: (...args: any) => any;

  componentWillLoad() {
    console.log('app-bookmarks :: Component loaded');
    store.setStore(configureStore({}));
    store.mapStateToProps(this, state => {
      const {
        bookmarkReducer: { bookmarks, loading, error },
      } = state;
      return {
        bookmarks,
        loading,
        error,
        copiedBookmarks: bookmarks.sort((x, y) => {
          if (y.createdAt < x.createdAt) {
            return -1;
          } else if (y.createdAt > x.createdAt) {
            return 1;
          } else {
            return 0;
          }
        }),
      };
    });
    store.mapDispatchToProps(this, {
      loadData,
      addData,
      deleteData,
    });
    this.loadData();
  }

  // componentDidRender() {
  //   this.loadData();
  // }

  deleteDataHandler(id) {
    console.log('app-bookmarks :: deleteDataHandler called');
    this.deleteData(id);
  }

  handleSearch(e) {
    const value = e.target.value;
    console.log('app-bookmarks :: Value', value);
    if (value) {
      const filter = this.copiedBookmarks.filter(bm => {
        return bm.tags.find(tag => {
          if (tag.tag.toLowerCase().includes(value.toLowerCase())) {
            return true;
          }
        });
      });
      this.copiedBookmarks = filter;
    } else {
      this.copiedBookmarks = this.bookmarks;
    }
  }

  render() {
    return (
      <div class="app-bookmarks">
        <div class="container">
          <input type="text" placeholder="Filter by tags" value={this.search} onInput={e => this.handleSearch(e)} />
          <div class="tableContainer">
            <table>
              <tr>
                <th>Bookmarks</th>
                <th>Tags</th>
                <th>
                  {' '}
                  <i class="fab fa-adobe"></i>
                </th>
              </tr>
              {!this.loading && this.error !== null && <span class="errorMsg">{this.error.message}</span>}
              {this.error === null &&
                this.copiedBookmarks.map(
                  (
                    { link, name, tags, id }, //Object destructring
                  ) => (
                    <tr>
                      <td>
                        <a href={link} target="_blank" class="url">
                          {name}
                        </a>
                      </td>
                      <td>
                        {tags.map(tag => (
                          <h2>{tag.tag}</h2>
                        ))}
                      </td>
                      <td>
                        <button onClick={() => this.deleteDataHandler(id)} disabled={this.loading}>
                          Delete
                        </button>
                        <i class="fab fa-adobe"></i>
                      </td>
                    </tr>
                  ),
                )}
              {!this.loading && this.error === null && this.copiedBookmarks.length === 0 && <span>No bookmark found</span>}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
