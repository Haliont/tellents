import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });

export default connect(mapStateToProps)(App);
