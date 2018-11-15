import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = ({ text }) => ({ text });

export default connect(mapStateToProps)(App);
