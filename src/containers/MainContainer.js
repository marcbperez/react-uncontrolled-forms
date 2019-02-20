import { connect } from 'react-redux'
import MainComponent from '../components/MainComponent'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MainContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainComponent)

export default MainContainer
