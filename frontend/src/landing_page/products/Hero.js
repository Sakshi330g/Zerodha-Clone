import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5 ' style={{lineHeight: "3"}}>
            <div className='row mt-5 text-center p-3'>
            <h1>Zerodha Products</h1>
            <h3 className='text-muted mt-3 fs-4 mb-3'>Sleek, modern, and intuitive trading platforms</h3>
            <p>Check out our <a href='' style={{textDecoration: "none"}}> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a></p>
        </div>
        </div>
     );
}

export default Hero;