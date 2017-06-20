import React from 'react';
import Router from 'next/router'

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '/join-subscriber-success',
      form: {
        email: ''
      }
    }
  }

  sendData(email) {
    const { redirect } = this.state
    Router.push(redirect)
  }

  onFormSubmit(e) {
    e.preventDefault()
    const email = this.state.form.email
    this.sendData(email)
  }

  handleChange(e) {
    const form = this.state.form
    form.email = e.target.value
    this.setState({
      form: form
    });
  }

  render() {
    return (
      <section className="subscription">
        <div className="wrap">
          <h2 className="subscription__title">
            { this.props.title }
          </h2>
          <p className="subscription__subtitle">
            { this.props.subtitle }
          </p>
          <div>
            <form
              className="subscription__form validate"
              id="subscribe"
              name="subscribe"
              onSubmit={ this.onFormSubmit.bind(this) }
            >

              <input
                className="email subscription__form__email"
                type="email"
                id="email"
                placeholder="Your e-mail address" required
                onChange={ this.handleChange.bind(this) }
              />

              <input
                type="submit"
                value="Subscribe"
                name="submit_form"
                className="button subscription__form__submit"
              />

            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscription;
