import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectFetchingSingle  } from 'redux/content/content.selectors';
import WithSpinner from 'components/complex/with-spinner/with-spinner.component';
import PageSingleArticle from './pageSingleArticle.page';

const mapStateToProps = createStructuredSelector({
  // isLoading: (state) => selectFetching(state),
  isLoading: selectFetchingSingle,
});

const ArticleItemContainer = compose(
  connect(mapStateToProps),
  // WithSpinner
)(PageSingleArticle);

export default ArticleItemContainer;
