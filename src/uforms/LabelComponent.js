import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
}

const defaultProps = {
    className: 'label-component',
}

class Label extends React.Component {
    render() {
        return (
            <label className={this.props.className} htmlFor={this.props.id}>
                {this.props.children}
            </label>
        )
    }
}

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label
