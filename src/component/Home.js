import React from 'react';
import {Link} from 'react-router-dom';
import {db} from '../fire-base';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchKeyword: '',
    };
  }

  componentDidMount() {
    db.collection('books')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        localStorage.setItem('books', JSON.stringify(data));
        console.log(data);
        this.setState({books: data});
      });
  }

  handleSearchChange = event => {
    this.setState({searchKeyword: event.target.value});
  };

  handleFilterData = () => {
    let {books, searchKeyword} = this.state;

    let filterResult = books;
    if (searchKeyword) {
      filterResult = filterResult.filter(book =>
        book.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    return filterResult;
  };

  buyBook = () => {
    console.log('Buy book function placeholder');
  };

  canEdit = (book) => {
    const userUid = localStorage.getItem('user');
    if(userUid && userUid === book.userUid){
      return (
        <Link to={`edit-book/${book.uid}`}>
          <h3>{book.title}</h3>
        </Link>
      )
    } 
    else {
      return <h3>{book.title}</h3>
    }
  }

  render() {
    const books = this.handleFilterData();
    return (
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-lg-12 text-center'>
            <h1 className='mt-5'>What book will you buy today?</h1>
            <p className='lead'>Here is the latest recommendations</p>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-lg-12 text-center'>
            <form>
              <div className='form-row'>
                <div className='col-8'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search by title'
                    onChange={this.handleSearchChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='row mb-5'>
          {books.map(book => (
            <div key={book.uid} className='col-lg-6 col-md-6 col-s-12 mb-4'>
              <div className='card h-100'>
                <div className='card-horizontal'>
                  <div className='img-wrapper'>
                    <img
                      className='img-fluid'
                      src={
                        book.image
                          ? book.image
                          : 'https://via.placeholder.com/316x499.jpg'
                      }
                      alt={book.title}
                    />
                  </div>
                  <div className='card-body'>
                    {this.canEdit(book)}
                    <h6>{book.author}</h6>
                    <div className='card-text'>
                      <div>Rating: {`${book.rating}/10`}</div>
                      <div>
                        <a
                          className='btn btn-primary'
                          href={book.link}
                          target='_blank'
                          rel='noopener noreferrer'>
                          Buy this
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
