import '../styles/MobileAppPreview.css'

export const MobileAppPreview = () => {
  return (
    <div className='mobile-body'>
      <div className="phone">
        <div className="phone-back">
          <div className="phone-left-side">
            <div className="phone-antena"></div>
            <div className="phone-button top"></div>
            <div className="phone-button"></div>
            <div className="phone-button bottom"></div>
            <div className="phone-antena bottom"></div>
          </div>
          <div className="phone-bottom">
            <div className="phone-antena"></div>
            <div className="bottom-speaker">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="phone-screw">
              <div></div>
            </div>
            <div className="phone-charger">
            </div>
            <div className="phone-screw right">
              <div></div>
            </div>
            <div className="bottom-speaker right">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="phone-antena right"></div>
          </div>
        </div>
        <div className="phone-screen"></div>
        <div className="phone-display">
          <div className="phone-notch">
            <div className="phone-speaker"></div>
          </div>
          <div className="display-content">
            <div className="notifications-bar">
              <div className="time">9:41</div>
              <div className="range"></div>
              <div className="wifi"></div>
              <div className="battery"></div>
            </div>
            <div className="nav">
              <div className="messages"></div>
              <div className="phone-number">LS FOOD co</div>
              <div className="menu"></div>
            </div>
            <div className="current-plan">
              <div className="plan">
                <div>
                  <div className="plan-header">current total</div>
                  <div className="plan-price"><span>$</span>68.40</div>
                </div>
                <div className="plan-date">
                  <div>4 items</div>
                  <div>1 box</div>
                </div>
              </div>
              <div className="text-question"></div>
            </div>
            <div className="plan-box">
              <div className="plan-options">
                <div>
                  <div>Elvio<span> Galeano</span></div>
                  <div>logged user</div>
                </div>
                <div>
                  <div>Bs. As<span> Argentina</span></div>
                  <div>shipping address</div>
                </div>
              </div>
              <div className="plan-text"><strong>Payment method:</strong> credit card</div>
              <a className="change-plan" href="">Proceed to checkout</a>
            </div>
            <div className="plan-list">
              <div className="plan-limit">
                <div className="limit-text">
                  <div><strong>- 10%OFF</strong><span>Applied discount</span></div>
                  <span className="limit-subtext">limited coupon</span>
                </div>
                <div className="limit-icon"></div>
              </div>
              <div className="plan-limit">
                <div className="limit-text">
                  <div><strong>Fast delivery</strong><span>On this location</span></div>
                  <span className="limit-subtext"></span>
                </div>
                <div className="limit-icon upgrade"></div>
              </div>
            </div>
            <div className="bottom-icons">
            </div>
            <div className="home-button"></div>
          </div>
        </div>
        <div className="phone-reflections">
          <div className="reflection-1"></div>
          <div className="reflection-2"></div>
          <div className="reflection-3"></div>
          <div className="reflection-4"></div>
          <div className="reflection-5"></div>
          <div className="reflection-6"></div>
          <div className="reflection-7"></div>
        </div>
      </div>
    </div>
  )
}