import React from 'react'
import PropTypes from 'prop-types'
import InputText from './InputTextComponent'
import InputCheckbox from './InputCheckboxComponent'
import InputRadio from './InputRadioComponent'

const propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    submit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        type: PropTypes.oneOf([
            'text', 'checkbox', 'radio',
        ]).isRequired,
        value: PropTypes.oneOfType([
            PropTypes.bool.isRequired,
            PropTypes.string.isRequired,
        ]).isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })),
   })).isRequired,
}

const defaultProps = {
    className: 'form-component',
    children: <input type={'submit'}/>,
    submit: (event) => {},
    change: (event) => {},
}

class Form extends React.Component {
    render() {
        return (
            <form
                className={this.props.className}
                onSubmit={(event) => this.props.submit(event)}>

                {this.props.fields.map((field, key) => {
                    switch (field.type) {
                        case 'checkbox':
                            return <InputCheckbox
                                key={key}
                                id={field.id}
                                value={field.value}
                                change={this.props.change}>
                                {field.label}
                            </InputCheckbox>
                        case 'radio':
                            return <InputRadio
                                key={key}
                                id={field.id}
                                value={field.value}
                                options={field.options}
                                change={this.props.change}>
                                {field.label}
                            </InputRadio>
                        default:
                            return <InputText
                                key={key}
                                id={field.id}
                                value={field.value}
                                change={this.props.change}>
                                {field.label}
                            </InputText>
                    }
                })}

                {this.props.children}
            </form>
        )
    }
}

Form.propTypes = propTypes
Form.defaultProps = defaultProps

export default Form
