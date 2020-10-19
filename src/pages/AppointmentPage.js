import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
import PageHeader from '../components/PageHeader';

class AppointmentPage extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChange = date => this.setState({date})

  render() {
    return (
      <div>
        <PageHeader content="Book a Treatment"/>
        <form className="container m-t-30">
          <div className="row">
            <div className="input-field col s12 m6">
              <input id="firstName" type="text" className="validate"/>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input id="lastName" type="text" className="validate"/>
              <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="input-field col s12 m6">
              <input id="phone" type="text" className="validate"/>
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="input-field col s12 m6">
              <input id="email" type="email" className="validate"/>
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <DatePicker
                className="validate"
                onChange={this.onChange}
                value={this.state.date}/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              This is an inline input field:
              <div className="input-field inline">
                <input id="email_inline" type="email" className="validate"/>
                <label htmlFor="email_inline">Email</label>
                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

};

export default AppointmentPage;