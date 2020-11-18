import React, { useState } from 'react';


export default function CardForm() {
  const [name, setName] = useState('xxxxx xxxxxxx');
  const [number, setNumber] = useState('0000000000000000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvv, setCvv] = useState('000');


  function limitText(limitField, limitNum) {
    if (limitField.length > limitNum) {
      limitField = limitField.substr(0, limitNum);
    }
return limitField;
  }

  /*   value={input} onInput={e => setInput(e.target.value) */
  return <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="credit">
          <h1 className="credit__title">Best Bank</h1>
          <span className="credit__number" >{limitText(number,16) }</span>
          <div className="credit__info">
            <div className="credit__info__card-holder">
              <h3 className="credit__info__card-holder__title">Card Holder</h3>
              <span className="credit__info__card-holder__name" >{name}</span>
            </div>
            <div className="credit__info__expires">
              <h3 className="credit__info__expires__title">Expires</h3>
              <div className="credit__info__expries__date">
                <span className="credit__info__expires__date__month">{limitText(month,2)}/</span>
                <span className="credit__info__expires__date__year">{limitText(year,2)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="credit credit-back">
          <div className="cvv">{limitText(cvv,3)}</div>
        </div>
      </div>
      <div className="col-md-6">
        <form action="" className="form">
          <section className="form-row">
            <label htmlFor="num" className="col-form-label">Number</label>
            <input type="number" name="num" id="num" maxLength="16" /* onKeyDown="limitText(number,16);"
              onKeyUp="limitText(number,16);" */ onInput={e => setNumber(e.target.value)} />
          </section>
          <section className="form-row">
            <label htmlFor="name" className="col-form-label">Name</label>
            <input type="text" name="name" id="name" onInput={e => setName(e.target.value)} />
          </section>
          <section className="form-row">
            <label htmlFor="mon" className="col-form-label">Month</label>
            <input type="number" name="mon" id="mon" maxLength="2" onInput={e => setMonth(e.target.value)} />
            <label htmlFor="year" className="col-form-label">Year</label>
            <input type="number" name="year" id="year" maxLength="2" onInput={e => setYear(e.target.value)} />
          </section>
          <section className="form-row">
            <label htmlFor="cvv" className="col-form-label">CVV</label>
            <input type="number" name="cvv" id="cvv"  onInput={e => setCvv(e.target.value)} maxLength="3" />
          </section>
        </form>
      </div>
    </div>
  </div>
}