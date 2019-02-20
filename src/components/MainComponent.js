import React from 'react'
import Form from '../uforms/FormComponent'

const fields = [
    {
        label: 'My name is ',
        id: 'name',
        type: 'text',
        value: 'John Doe',
    },
    {
        label: 'I agree.',
        id: 'agree',
        type: 'checkbox',
        value: true,
    },
    {
        label: '',
        id: 'feel',
        type: 'radio',
        value: 'good',
        options: [
            {
                label: 'Feels good.',
                value: 'good',
            },
            {
                label: 'Feels bad.',
                value: 'bad',
            },
        ],
    },
]

const submit = (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    const keys = data.keys()
    const entries = data.entries()

    console.log('SUBMIT')

    while (!keys.next().done) {
        console.log(entries.next().value)
    }
}

const change = (event) => {
    console.log('CHANGE')

    console.log([
        event.target.name,
        new FormData(event.target.form).get(event.target.name)
    ])
}

class MainComponent extends React.Component {
    render() {
        return (
            <Form fields={fields} submit={submit} change={change}>
                <br/><hr/><br/>
                <button>Send</button>
            </Form>
        )
    }
}

export default MainComponent
