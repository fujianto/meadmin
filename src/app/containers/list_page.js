import React, { PureComponent } from 'react'
import async_fetch from 'app/helpers/async_fetch';
import { API_URL } from 'app/config';
import { connect } from 'react-redux'
import { fetchPosts } from 'app/actions/dashboard';
import ReactPaginate from 'react-paginate';
import Style from './list_page.css';

class ListPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    }
  }

  componentDidMount() {
    this.fetchPosts(this.state.page);
  }

  async fetchPosts(page) {
    const url = `${API_URL}/?_limit=10&_page=${page}`;
    const res = await async_fetch(url);
    this.props.fetchPosts(res);
  }

  async handlePaginationClick(pos) {
    await this.setState({
      page: pos
    });

    await this.fetchPosts(this.state.page);
  }

  render() {
    return (
      <div className="wrap">
        <h2 className="page-title">List of items with pagination</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
            </tr>
          </thead>

          <tbody>
           {
             this.props.posts !== null && typeof this.props.posts !== 'undefined' ?
              this.props.posts.map((post, index) => {
                return (
                  <tr key={ post.id }>
                    <td>{ post.id } </td>
                    <td>{ post.userId }</td>
                    <td>{ post.title }</td>
                  </tr>
                )
              }) : null
           }
          </tbody>
        </table>

        <ReactPaginate 
          initialPage={ 0 }
          onPageChange={ (page) => this.handlePaginationClick(page.selected + 1) }
          pageCount={ 10 }
          pageRangeDisplayed={ 2 }
          marginPagesDisplayed={ 2 }
          containerClassName="table-nav"
          pageClassName="nav-item"
          previousClassName="prev-nav"
          nextClassName="next-nav"
          previousLabel={ <i className="fa fa-chevron-left"></i> }
          nextLabel={ <i className="fa fa-chevron-right"></i> }
        />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    posts: state.Dashboard.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (posts) => dispatch(fetchPosts(posts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
export { ListPage };