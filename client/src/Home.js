import React from 'react'
import {Link} from 'react-router-dom'
import './index.css';

const Home = () => {
  return (
    <div>
      <nav className='navbar bg-dark'> 
        <h1 style={{marginLeft:"1rem"}}> <Link to='/' ><i className='fas fa-code'></i> Developers Hub</Link></h1>
        <ul style={{display:"flex" , marginRight:"1rem"}}>
        <ol><Link to='/register' >Register</Link></ol>
        <ol><Link to='/login' >Login</Link></ol>
       </ul>
      </nav>
      <section className="landing">
        <div className="dark-overlay">
           <div className="landing-inner">
            <h1 className="x-large">Developers Hub</h1>
            <p className="lead">
                Create a developer profile/portfolio, share posts and get help from other developers
            </p>
            <div className="buttons">
              <Link to ="/register" className='btn btn-primary'>Sign Up</Link>
              <Link to ="/login" className='btn btn-light'>Login</Link>
            </div>
           </div>
        </div>
      </section> 
    </div>
  )
}

export default Home
