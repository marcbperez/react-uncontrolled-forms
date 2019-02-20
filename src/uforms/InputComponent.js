import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    checked: PropTypes.bool,
}

const defaultProps = {
    className: 'input-component',
    type: 'text',
    required: true,
}

class Input extends React.Component {
    render() {
        return (
            <input
                className={this.props.className}
                type={this.props.type}
                id={this.props.id}
                required={this.props.required}
                name={this.props.name || this.props.id}
                defaultValue={this.props.value}
                placeholder={this.props.placeholder}
                defaultChecked={this.props.checked}
                onChange={(event) => this.props.change(event) }/>
        )
    }
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
