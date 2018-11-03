import React from 'react'
import { Link } from 'gatsby'

import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.css' // Path to Flatpickr's theme 'flatpickr/dist/themes/dark.css'

const Booking = () => {
  return (
    <section>
      <form name="booking" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

        <input type="hidden" name="bot-field" />

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your Name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="field">
          <label className="label">Date &amp; Time</label>
          <div className="control">
            <Flatpickr data-enable-time
              options={{
                enableTime: true,
                time_24hr: true,
                altInput: true,
                altFormat: "H:i l, F j, Y",
                dateFormat: "Y-m-d H:i",
                defaultDate: new Date(),
                minDate: "today",
                maxDate: new Date().fp_incr(90),
              }}
              className="input"
              type="text"
              placeholder="Select Date..." />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              I agree to the <Link to="/">terms and conditions</Link>
            </label>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text" type="reset">Cancel</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Booking
