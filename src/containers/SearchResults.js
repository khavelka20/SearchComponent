import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";

const mapStateToProps = state => ({
  showResults: state.showResults,
  search: state.search
});

export default connect(mapStateToProps)(SearchResults);
