import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
           
            
             <div className='row p-3 m-3' >
                <div className='col-6  p-3'>
                    <h4  className='mb-5'>Support Portal</h4>
                    <h1 className='fs-3'>Search for an answer or browse help topics <br/> to create a ticket</h1><br/>
                    <input placeholder='Eg. how do i activate F&O'/><br/><br/>
                    <a href=''>Track account opening</a>&nbsp;&nbsp;
                    <a href=''>Track egment activation</a>&nbsp;&nbsp;
                    <a href=''>Intraday margins</a>&nbsp;&nbsp;
                    <a href=''>Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className='col-6 p-3 d-flex flex-column' >
                    <a href='' style={{marginLeft: "250px"}} className='  mb-5' >Track Tickets</a>
                    <h1>Featured</h1>
                    <ol style={{lineHeight: "2.5"}}>
                        <li><a href=''>Current Takeovers and Delisting- january 2024</a><br/></li>
                        <li><a href=''>Latest Intraday leverages- MIS &amp; CO</a></li>
                    </ol>
                    
                    
                </div>
               
                </div>
        </section>
     );
}

export default Hero;