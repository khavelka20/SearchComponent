import { connect } from "react-redux";
import { searchChange } from "../actions/actions";
import SearchBar from "../components/SearchBar";

function mapStateToProps(state) {
  return { search: state.search };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      console.log(event);
       dispatch(searchChange(event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
