import React from 'react';
import {images} from '../../constants'
import { SubHeading } from "../../components"

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className="app__chef-content">
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ratione soluta recusandae, saepe ipsum animi nesciunt aspernatur accusantium nam sint.</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis voluptates quo rem modi eius soluta ratione doloremque saepe excepturi.</p>
      </div>
      
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
