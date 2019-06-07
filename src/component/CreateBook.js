import React from 'react';
import {NotificationManager} from 'react-notifications';

import {db, storage} from '../fire-base';

class CreateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        title: '',
        author: '',
        rating: 1,
        link: '',
        image: '',
      },
      formErrors: {
        title: false,
        author: false,
        rating: false,
        link: false,
      },
      formValidity: {
        title: false,
        author: false,
        rating: false,
        link: false,
      },
      isSubmitting: false,
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      NotificationManager.warning(
        'You need to login first',
        'Anauthorized access'
      );
      this.props.history.push('/');
    }
  }

  handleInputChange = ({target}) => {
    const {formValues} = this.state;
    formValues[target.name] = target.value;
    this.setState({formValues});
    this.handleValidation(target);
  };

  handleFileChange = ({target}) => {
    const {formValues} = this.state;
    formValues['image'] = target.files[0];
    this.setState({formValues});
  };

  handleValidation = target => {
    const {name, value} = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isImage = name === 'image';

    if (!isImage) {
      validity[name] = value.length > 0;
      fieldValidationErrors[name] = validity[name]
        ? ''
        : `${name} is required and cannot be empty`;

      this.setState({
        formErrors: fieldValidationErrors,
        formValidity: validity,
      });
    }
  };

  handleSubmit = event => {
    if (!this.props.user) {
      NotificationManager.warning(
        'You need to login first',
        'Anauthorized access'
      );
      this.props.history.push('/login');
      return;
    }
    event.preventDefault();
    this.setState({isSubmitting: true});
    const {formValues, formValidity} = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      // create firebase storage ref
      const storageRef = storage.ref();
      const {image} = formValues;
      if (image) {

        const uploadTask = storageRef.child(image.name).put(image);
        uploadTask.on('state_changed', {
          error: () => {
            NotificationManager.error(
              'Please try again',
              'Something went wrong with image upload'
            );
          },
          complete: () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              console.log('File available at', downloadURL);
              this.addBook(downloadURL);
            });
          },
        });
      } else {
        this.addBook(null);
      }
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

  addBook = downloadURL => {
    const data = {
      ...this.state.formValues,
      uid: new Date().getTime(),
      userUid: this.props.user.uid,
      image: downloadURL,
    };
    db.collection('books')
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        NotificationManager.success(
          'A new book has been added to the store',
          'Success'
        );
        this.props.history.push('/');
      })
      .catch(error => {
        NotificationManager.error(error.message, 'Create Book failed');
        this.setState({isSubmitting: false});
      });
  };

  render() {
    const {formValues, formErrors, isSubmitting} = this.state;
    return (
      <>
        <div className='row mb-5'>
          <div className='col-lg-12 text-center'>
            <h1 className='mt-5'>Create a new book</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group row'>
                <div className='col-sm-2'>Title</div>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className={`form-control ${
                      formErrors.title ? 'is-invalid' : ''
                    }`}
                    placeholder='Book title'
                    name='title'
                    value={formValues.title}
                    onChange={this.handleInputChange}
                  />
                  <div className='invalid-feedback'>{formErrors.title}</div>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-sm-2'>Author</div>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className={`form-control ${
                      formErrors.author ? 'is-invalid' : ''
                    }`}
                    placeholder='Book author'
                    name='author'
                    value={formValues.author}
                    onChange={this.handleInputChange}
                  />
                  <div className='invalid-feedback'>{formErrors.author}</div>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-sm-2'>Rating</div>
                <div className='col-sm-10'>
                  <input
                    type='number'
                    className={`form-control ${
                      formErrors.rating ? 'is-invalid' : ''
                    }`}
                    placeholder='From 1 to 10'
                    name='rating'
                    value={formValues.rating}
                    onChange={this.handleInputChange}
                  />
                  <small className='form-text text-muted'>
                    Rate from 1 to 10
                  </small>
                </div>
                <div className='invalid-feedback'>{formErrors.rating}</div>
              </div>
              <div className='form-group row'>
                <div className='col-sm-2'>Link</div>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className={`form-control ${
                      formErrors.link ? 'is-invalid' : ''
                    }`}
                    placeholder='Buy link'
                    name='link'
                    value={formValues.link}
                    onChange={this.handleInputChange}
                  />
                  <div className='invalid-feedback'>{formErrors.link}</div>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-sm-2'>Image</div>
                <div className='col-sm-10'>
                  <input
                    type='file'
                    name='image'
                    className='form-control-file'
                    onChange={this.handleFileChange}
                  />
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-primary btn-block'
                disabled={isSubmitting}>
                {isSubmitting ? 'Please wait...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateBook;
