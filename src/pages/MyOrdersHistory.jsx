import React from "react";
import '@styles/MyOrdersHistory.scss';
import ArrowIcon from '@icons/flechita.svg';

const MyOrdersHistory = () => {
    return (
      <>
        <main>
          <section className="my-orders">
            <div className="my-orders-container">
              <h1 className="my-orders-title">My orders</h1>

              <div className="my-orders-content">
                <div className="orders">
                  <p>
                    <span>03.25.22</span>
                    <span>6 articles</span>
                  </p>
                  <p>$560.00</p>
                  <img src={ArrowIcon} alt="arrow" />
                </div>
                <div className="orders">
                  <p>
                    <span>03.25.22</span>
                    <span>6 articles</span>
                  </p>
                  <p>$560.00</p>
                  <img src={ArrowIcon} alt="arrow" />
                </div>
                <div className="orders">
                  <p>
                    <span>03.25.22</span>
                    <span>6 articles</span>
                  </p>
                  <p>$560.00</p>
                  <img src={ArrowIcon} alt="arrow" />
                </div>
                <div className="orders">
                  <p>
                    <span>03.25.22</span>
                    <span>6 articles</span>
                  </p>
                  <p>$560.00</p>
                  <img src={ArrowIcon} alt="arrow" />
                </div>
                <div className="orders">
                  <p>
                    <span>03.25.22</span>
                    <span>6 articles</span>
                  </p>
                  <p>$560.00</p>
                  <img src={ArrowIcon} alt="arrow" />
                </div>
                <div className="orders">
                  <p>
                    <span>03.25.22</span>
                    <span>6 articles</span>
                  </p>
                  <p>$560.00</p>
                  <img src={ArrowIcon} alt="arrow" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );

}

export default MyOrdersHistory;