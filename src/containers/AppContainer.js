import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = state => ({
  showSearchContainer: state.showSearchContainer
});

export default connect(mapStateToProps)(App);
