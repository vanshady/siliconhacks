const React = require('react');
const API = () => (
    <div id="api" className="section">
      <div className="section-wrapper">
          <div className="section-body">
              <h1>APIs</h1>
              <div
                className="container"
                style={{
                  width: '80%',
                  maxWidth: '8=800px',
                  margin: '0 auto',
                  marginTop: '20px',
                  fontSize: '17px',
                }}
              >
                <dl className="dl-horizontal" key={1}>
                  <dt>Wolfram</dt>
                  <dd style={{ textAlign: 'left', lineHeight: '180%' }}>Create a Wolfram ID and get your keys <a href="https://www.wolframcloud.com/access?code=SiliconHacksFRE2017">here</a></dd>
                </dl>
                <dl className="dl-horizontal" key={2}>
                  <dt>.Tech</dt>
                  <dd style={{ textAlign: 'left', lineHeight: '180%' }}>
                    Log onto <a href="https://goo.gl/zwe3by">goo.gl/zwe3by</a> <br />
                    Select “SiliconHacks” and enter the code "siliconhacks.tech" <br />
                    Once you’re approved you’ll get a coupon code to use at checkout on
                    <a href="www.get.tech">www.get.tech</a> for your free .Tech
                    domain and Privacy Protect
                  </dd>
                </dl>
                <dl className="dl-horizontal" key={3}>
                  <dt>Twilio</dt>
                  <dd style={{ textAlign: 'left', lineHeight: '180%' }}>
                    Use the promo code "SiliconHacks 2017"
                  </dd>
                </dl>
              </div>
          </div>
      </div>
    </div>
);

module.exports = API;
