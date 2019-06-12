import React from 'react';
import './index.sass';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class Newsletter extends React.Component {
  state = {
    email: null
  };

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    console.log('submit', this.state);

    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        // Check is Subscription failed
        if (result !== 'success') {
          document.querySelector('#subscribeMsg').innerHTML = `
            <article class="message">
              <div class="message-body">
                ${msg}
              </div>
            </article>
          `;
          throw msg;
        }
        document.querySelector('#subscribeMsg').innerHTML = `
          <article class="message">
            <div class="message-body">
              ${msg}
            </div>
          </article>
        `;
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  render() {
    return (
      <section id='newsletter' className='section box-shadow'>
        <div className='container is-my-1 is-my-tablet-5'>
          <div className='columns is-vcentered is-mx-1 is-mx-tablet-5'>
            <div className='column is-mx-3'>
              <h1 className='title is-size-4'>
                Join our not frequent newsletter
              </h1>
              <p>
                Keep up to date on our latest scholarships, programs, and
                opportunities.
              </p>
            </div>
            <div className='column is-mx-3'>
              <form onSubmit={this._handleSubmit}>
                <div className='field is-grouped'>
                  <div className='control is-expanded'>
                    <input
                      onChange={this._handleChange}
                      className='input'
                      type='email'
                      name='email'
                      placeholder='Email address'
                      defaultValue=''
                    />
                  </div>
                  <div className='control clear'>
                    <button
                      className='button btn-sub'
                      type='submit'
                      name='subscribe'
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <div id='subscribeMsg' className='is-mt-3' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
