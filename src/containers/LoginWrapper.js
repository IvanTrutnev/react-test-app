import { connect } from 'react-redux'
import { setAuth } from '../actions/Login'
import Login from '../components/Login'


const mapDispatchToProps = dispatch => ({
  setAuth: () => dispatch(setAuth(true)),
})

export default connect(null, mapDispatchToProps)(Login)
