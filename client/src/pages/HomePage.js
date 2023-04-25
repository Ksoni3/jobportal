import React from 'react'
import '../styles/homepage.scss'
import { FaSearch } from 'react-icons/fa'
import CategoryCard from '../components/CategoryCard'
import EmployersCard from '../components/EmployersCard'
import job from '../Assets/job.jpg'
import Appstore from '../Assets/App-store.png'
import Playstore from '../Assets/Playstore.png'



const data = [
    {
        title:  'Fulltime',
        color: '#e63946'
        
    },
    {
        title:  'Part-time',
        color: '#83c5be'
        
    },
    {
        title:  'Contract',
        color: '#4361ee'
        
    },
    {
        title:  'Sydney',
        color: '#ef476f'
        
    },
    {
        title:  'All Jobs',
        color: '#ef476f'
        
    },
    {
        title:  'Fulltime',
        color: '#e63946'
        
    },
    {
        title:  'Part-time',
        color: '#83c5be'
        
    },
    {
        title:  'Contract',
        color: '#4361ee'
        
    },
    {
        title:  'Sydney',
        color: '#ef476f'
        
    }

]
const HomePage = () => {
  return (
    <div className="home-container">
      <div className="main-wrapper">
        <div className="search-wrapper">
          <input type="text" placeholder="Search Job" />
          <FaSearch
            style={{
              color: 'gray',
              fontSize: '24px',
              position: 'relative',
              right: '60px',
              top: '6px',
            }}
          />
        </div>
        <h2> Your first step towards success begins here</h2>
      </div>
      <div className='sub-wrapper'>
        <h1> Get Notified About Latest Jobs Posts</h1>
        <button> Subscribe Now</button>
      </div>
      <div className='category-wrapper'>
      {
        data.map((item,index)=>{
            return <CategoryCard key={index} item={item} />
        })
      }
      </div>
      <h1> Our Employers</h1>
      <div className='employers-wrapper'>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      <EmployersCard/>
      </div>

      <div className='app-container'>
      <div className='app-wrapper'>
      <div className='left-section'>
      <h1> Download the App Now!</h1>
      <h2> Jobs on your fingertips</h2>
      <h3> Download Job Portal and be able to access, search and apply for jobs from 50+ entities and much more to come.</h3>
      <h3> It is your step toward a promising future.</h3>
      <div className='playstore-wrapper'>
        <img src= {Appstore} alt='#appstore'/>
        <img  className= 'playstore' src= {Playstore} alt='#playstore'/>
      </div>


      </div>
      <div className='right-section'>
      <img src={job} alt='#job_app'/>
       </div>

      </div>
      </div>
     
    </div>
  )
}

export default HomePage
