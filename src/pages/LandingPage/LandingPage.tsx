import React from 'react';
import ShuffledText from "../../components/ShuffledText/ShuffledText";
import './LandingPage.scss';
import Button from "../../components/Button/Button";

const names = ['onboarding', 'something', 'else']

const LandingPage: React.FC = () => {
  return (
    <main className='landingPage'>
      <div className="container">
        <div className="landingPage__info">
          <h1>Transform Funnels into Flywheels</h1>
          <p>
            Build evergreen flows to drive
            <ShuffledText names={names}/>
          </p>
        </div>
        <div className="landingPage__form">
          <input
            className='filter__input'
            type='text'
            placeholder='Enter your site URL'
            // value={search}
            // onChange={(e) => onChangeSearch(e)}
          />
          <Button
            title='Get Started - It’s Free'
            color='primary'
            doAction={() => {}}
          />
        </div>
      </div>

    </main>
  );
};

export default LandingPage;