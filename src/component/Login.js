import React from 'react';
import {auth} from '../fire-base';

import {NotificationManager} from 'react-notifications';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        email: '',
        password: '',
      },
      formErrors: {
        email: '',
        password: '',
      },
      formValidity: {
        email: false,
        password: false,
      },
      isSubmitting: false
    };
  }

  componentDidMount(){
    if(localStorage.getItem('user')){
      this.props.history.push('/')
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({isSubmitting: true})
    const {formValues, formValidity} = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      auth
        .signInWithEmailAndPassword(formValues.email, formValues.password)
        .then(response => {
          NotificationManager.success(
            'You are now logged in',
            'Login Success'
          );
          localStorage.setItem('user', response.user.uid);
          this.props.history.push('/');
        })
        .catch(error => {
          console.log(error.message);
          NotificationManager.error(
            'Please try again',
            'Something wrong happened'
          );
          this.setState({isSubmitting: false});
        });
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key],
        };
        this.handleValidation(target);
      }
      NotificationManager.error(
        'Please check on the validation message below form fields',
        'Validation error'
      );
      this.setState({isSubmitting: false});
    }
  };

  handleChange = ({target}) => {
    const {formValues} = this.state;
    formValues[target.name] = target.value;
    this.setState({formValues});
    this.handleValidation(target);
  };

  handleValidation = target => {
    const {name, value} = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isEmail = name === 'email';
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name]
      ? ''
      : `${name} is required and cannot be empty`;

    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ''
          : `${name} should be a valid email address`;
      }
    }

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
  };

  render() {
    const {formValues, formErrors, isSubmitting} = this.state;
    return (
      <>
        <div className='row mb-5'>
          <div className='col-lg-12 text-center'>
            <h1 className='mt-5'>Please enter your credential for login</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label>Email address</label>
                <input
                  type='email'
                  name='email'
                  className={`form-control ${
                    formErrors.email ? 'is-invalid' : ''
                  }`}
                  placeholder='Enter email'
                  onChange={this.handleChange}
                  value={formValues.email}
                />
                <div className='invalid-feedback'>{formErrors.email}</div>
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  className={`form-control ${
                    formErrors.password ? 'is-invalid' : ''
                  }`}
                  placeholder='Password'
                  onChange={this.handleChange}
                  value={formValues.password}
                />
                <div className='invalid-feedback'>{formErrors.password}</div>
              </div>
              <button type='submit' className='btn btn-primary btn-block' disabled={isSubmitting}>
                { isSubmitting? 'Please wait...': 'Submit' }
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
