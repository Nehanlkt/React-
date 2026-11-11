import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
         <div className='card'>
          <div className='top'>
            <img src="https://brandlogos.sgp1.digitaloceanspaces.com/svg/simple-icons/amazon.svg
            " alt="" srcset="" />
            <button>  Save  <Bookmark  size={12}/></button>
          </div>
          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX designer</h2>
            <div>
              <h4>Part time</h4>
              <h4>Senior level</h4>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>$123/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <div>
           <button>Apply now</button>
           </div>
          </div>
         </div>
    </div>
  )
}

export default App

