import React from 'react'
import PropTypes from 'prop-types'
import Label from './LabelComponent'
import Input from './InputComponent'

const propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    value: PropTypes.string,
}

const defaultProps = {
    className: 'input-text-component',
}

class InputText extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <Label id={this.props.id}>{this.props.children}</Label>
                <Input
                    id={this.props.id}
                    value={this.props.value}
                    change={this.props.change}/>
            </div>
        )
    }
}

InputText.propTypes = propTypes
InputText.defaultProps = defaultProps

export default InputText
