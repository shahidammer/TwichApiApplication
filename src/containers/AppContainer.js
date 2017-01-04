import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = ({data}) => ({
  data: data.toJS()
})

const AppContainer = connect(mapStateToProps)(App)
export default AppContainer
