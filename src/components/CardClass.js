import React, { useState } from 'react';







export default class HelloUser extends React.Component {
  constructor() {
    super(),
      this.state = {
        name: 'xxxxx xxxxxxx',
        number: '0000000000000000',
        month: 'xx',
        year: 'xx',
        ccv: 'CCV'
      }
  }

  //Name of Card Owner
  nameChange(n) {
    this.setState({
      name: n.target.value
    });
  }
  //Card Number
  numberChange(c) {
    this.setState({
      number: c.target.value
    });
  }
  //Expiration
  monthChange(m) {
    this.setState({
      month: m.target.value
    });
  }
  yearChange(y) {
    this.setState({
      year: y.target.value
    });
  }
  //CCV 
  cvvChange(v) {
    this.setState({
      ccv: v.target.value
    });
  }


  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="credit">
            <h1 className="credit__title">Best Bank</h1>
            <span className="credit__number">{this.state.number}</span>
            <div className="credit__info">
              <div className="credit__info__card-holder">
                <h3 className="credit__info__card-holder__title">Card Holder</h3>
                <span className="credit__info__card-holder__name">{this.state.name}</span>
              </div>
              <div className="credit__info__expires">
                <h3 className="credit__info__expires__title">Expires</h3>
                <div className="credit__info__expries__date">
                  <span className="credit__info__expires__date__month">{this.state.month}/</span>
                  <span className="credit__info__expires__date__year">{this.state.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <form action="" className="form">
            <section className="form-row">
              <label htmlFor="num" className="col-form-label">Number</label>
              <input type="number" name="num" id="num" maxLength="16" onChange={this.numberChange.bind(this)}/>
            </section>
            <section className="form-row">
              <label htmlFor="name" className="col-form-label">Name</label>
              <input type="text" name="name" id="name" onChange={this.nameChange.bind(this)}/>
            </section>
            <section className="form-row">
              <label htmlFor="mon" className="col-form-label">Month</label>
              <input type="number" name="mon" id="mon" maxLength="2" onChange={this.monthChange.bind(this)}/>
              <label htmlFor="year" className="col-form-label">Year</label>
              <input type="number" name="year" id="year" maxLength="2" onChange={this.yearChange.bind(this)}/>
            </section>
            <section className="form-row">
              <label htmlFor="cvv" className="col-form-label">CVV</label>
              <input type="number" name="cvv" id="cvv" onChange={this.cvvChange.bind(this)}/>
            </section>
          </form>
        </div>
      </div>
   
    </div>
   
  }
}






