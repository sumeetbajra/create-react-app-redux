import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllPosts } from '../../reducers/postReducer';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.props.getAllPosts();
    this.setState({ loading: false });
  }

  render() {
    const { data } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Your API data</h1>
        <hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  data: store.post.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllPosts,
}, dispatch);

Posts.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  getAllPosts: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
