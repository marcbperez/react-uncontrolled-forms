import React from 'react'
import PropTypes from 'prop-types'
import Label from './LabelComponent'
import Input from './InputComponent'

const propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    required: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
}

const defaultProps = {
    className: 'input-checkbox-component',
    value: false,
    required: false,
}

class InputCheckbox extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <Input
                    type={'checkbox'}
                    id={this.props.id}
                    required={this.props.required}
                    checked={this.props.value}
                    change={this.props.change}/>
                <Label id={this.props.id}>{this.props.children}</Label>
            </div>
        )
    }
}

InputCheckbox.propTypes = propTypes
InputCheckbox.defaultProps = defaultProps

export default InputCheckbox
