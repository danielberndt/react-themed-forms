import React from 'react'
import {Form, ReformContext} from 'react-reform'
import defaultValidators from 'react-reform/opt/validators'
import {Text} from 'react-reform/opt/inputs'
import defaultTheme from '../default-theme'

export default class ExampleForm extends React.Component {

  handleSubmit = (data) => {
    console.log('data', data)
  }

  render() {
    return (
      <ReformContext themes={{default: defaultTheme}} validations={defaultValidators}>
        <div>
          <h4>Form</h4>
          <Form onSubmit={this.handleSubmit}>
            <Text name="firstName" label="First Name" is-required/>
          </Form>
        </div>
      </ReformContext>
    )
  }
}
