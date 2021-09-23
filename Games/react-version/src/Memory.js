import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';

function Memory () {

  const [element, SetElement] = useState({})
    const cardArray = [   
        {  
            id: 0,
            name: 'image1',
            img:'images/image1.png'
        },
        {   
            id: 1,
            name: 'image1',
            img:'images/image1.png'
        },
        {
            id: 2,
            name: 'image2',
            img:'images/image2.png'
        },
        {
            id: 3,
            name: 'image2',
            img:'images/image2.png'
        },
        {
            id: 4,
            name: 'image3',
            img:'images/image3.png'
        },
        {
            id: 5,
            name: 'image3',
            img:'images/image3.png'
        },
        {
            id: 6,
            name: 'image4',
            img:'images/image4.png'
        },
        {
            id: 7,
            name: 'image4',
            img:'images/image4.png'
        },
        {
            id: 8,
            name: 'image5',
            img:'images/image5.png'
        },
        {
            id: 9,
            name: 'image5',
            img:'images/image5.png'
        },
        {
            id: 10,
            name: 'image6',
            img:'images/image6.png'
        },
        {
            id: 11,
            name: 'image6',
            img:'images/image6.png'
        }
      ]

      useEffect(() => {
        const ele = document.querySelector('grid');
        SetElement(ele);

     }, []);

        return (
            <Fragment>
            <h3> Score:<span id="result"></span></h3>
            <div className="grid">
            <img
    src='images/image6.png'
    style={{width:'100%', height:'100%'}}
/>
            </div>
            </Fragment>
            
        );
   
}

export default Memory;