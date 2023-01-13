import React from 'react';
import './Footer.scss';
import checkedIcon from '../../assets/images/checked.svg';

const leftList = [
  'Build immersive user flows',
  'Incentivize with integrated perks',
  'Convert users into community'
]

const rightList = [
  'No Code Flow Integration',
  'Branded User Flows',
  'Proven Community Engagement'
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <div className="footer__left">
          <h2>Flows cultivate qualified communities</h2>
          <ol>
            {leftList.map((item: string, i: number) =>
              <li key={i}>{item}</li>
            )}
          </ol>
        </div>
        <div className="footer__right">
          <ul>
            {rightList.map((item: string, i: number) =>
              <li key={i}>
                <img src={checkedIcon} alt="checked"/>
                {item}
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;