import React from 'react'
import PropTypes from 'prop-types'
import Label from './LabelComponent'
import Input from './InputComponent'

const propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.string.isRequired,
    ]).isRequired,
    change: PropTypes.func.isRequired,
}

const defaultProps = {
    className: 'input-radio-component',
    value: false,
}

class InputRadio extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
                {this.props.options.map((option, key) =>
                    <div key={key} className={`${this.props.className}-option`}>
                        <Input
                            type={'radio'}
                            id={`${this.props.id}-${key}`}
                            name={this.props.id}
                            value={option.value}
                            checked={this.props.value === option.value}
                            change={this.props.change}/>
                        <Label id={`${this.props.id}-${key}`}>
                            {option.label}
                        </Label>
                    </div>
                )}
            </div>
        )
    }
}

InputRadio.propTypes = propTypes
InputRadio.defaultProps = defaultProps

export default InputRadio
