import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mt-5'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/images/smallcaseLogo.png' style={{height: "5rem" , width: "15rem"}} />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                    
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src='media/images/images/streakLogo.png' style={{height: "5rem" , width: "15rem"}} />
                    <p className='text-small text-muted'>Algo &amp; strategy platform</p>
                   
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src='media/images/images/sensibullLogo.svg'style={{height: "5rem" , width: "15rem"}}  />
                    <p className='text-small text-muted'>Options trading platform</p>  

                </div>
                                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/images/zerodhaFundhouse.png' style={{height: "5rem" , width: "15rem"}} />
                    <p className='text-small text-muted'>Asset management</p>
                    
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src='media/images/images/goldenpiLogo.png' style={{height: "5rem" , width: "15rem"}} />
                    <p className='text-small text-muted'>Bonds trading platform</p>
                   
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src='media/images/images/dittoLogo.png' style={{height: "5rem" , width: "15rem"}} />
                    <p className='text-small text-muted'>Insurance</p>  
                </div>

                 <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width: "20%", margin: "0 auto"}}>Sign up </button>
            </div>
        </div>
     );
}

export default Universe;