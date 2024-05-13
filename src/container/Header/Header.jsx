import React from 'react';

import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='p__opensans' style={{margin: "2rem 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec metus non nisi placerat lacinia. Integer vitae libero id nulla ullamcorper consequat. Morbi auctor neque eget justo volutpat congue.</p>
      <button type='button' className="custom__button">Explore menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome__image" />
    </div>
  </div>
);

export default Header;
