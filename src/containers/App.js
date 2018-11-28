import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = ({ isSignedIn }) => ({ isSignedIn });

export default connect(mapStateToProps)(App);
