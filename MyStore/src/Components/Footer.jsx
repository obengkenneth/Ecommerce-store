import React from 'react'


export default function Footer() {
  return (
    <footer class='footer'>
    <div class='footer-area bg-success text-light'>
      <div class='container'>
        <div class='row section_gap'>
          <div class='col-lg-3 col-md-6 col-sm-6'>
            <div class='single-footer-widget tp_widgets'>
              <h4 class='footer_title large_title'>Our Mission</h4>
              <p>
                To make selling and buying as convenient as possible for all parties involved.
              </p>
            </div>
          </div>
          
          
          <div class='offset-lg-1 col-lg-3 col-md-6 col-sm-6'>
            <div class='single-footer-widget tp_widgets'>
              <h4 class='footer_title'>Contact Us</h4>
              <div class='ml-40'>
                <p class='sm-head'>
                  <span class='fa fa-location-arrow'></span>
                  Head Office
                </p>
                <p>123, Main Street, Your City</p>

                <p class='sm-head'>
                  <span class='fa fa-phone'></span>
                  Phone Number
                </p>
                <p>
                  +123 456 7890 <br />
                  +123 456 7890
                </p>

                <p class='sm-head'>
                  <span class='fa fa-envelope'></span>
                  Email
                </p>
                <p>
                  free@infoexample.com <br />
                  www.infoexample.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </footer>
  )
}