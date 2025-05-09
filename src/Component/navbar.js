import './navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
   return (
    <div className="navbar">
       <div className= "logo">
           <img src="Asserts/logo.png" alt="chaitanya-icon" /> 
           <div className="searchbar">
           <svg width="20" height="41" className='searchIcon' viewBox="0 0 20 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5056 26.4612L17.5047 26.4603L13.5088 22.446C14.333 21.3904 14.8287 20.0588 14.8287 18.6186C14.8287 15.1511 12.0077 12.3301 8.54033 12.3301C5.07299 12.3301 2.25195 15.1511 2.25195 18.6185C2.25195 22.0797 5.07299 24.9007 8.54033 24.9007C9.91898 24.9007 11.189 24.4534 12.225 23.6964L16.2397 27.7172L16.2402 27.7177C16.4073 27.8913 16.6396 27.9764 16.8757 27.9764C17.3997 27.9764 17.7507 27.5761 17.7507 27.0831C17.7507 26.8397 17.6649 26.6269 17.5056 26.4612ZM3.5283 18.6185C3.5283 15.8544 5.77611 13.6064 8.54033 13.6064C11.3044 13.6064 13.5462 15.8542 13.5462 18.6185C13.5462 21.3765 11.3044 23.6243 8.54033 23.6243C5.77611 23.6243 3.5283 21.3765 3.5283 18.6185Z" fill="#A1A5B0" stroke="#A1A5B0" stroke-width="0.125984"/>
           </svg>

           <input type="text" placeholder="Ask for anything" />
           
       </div>
        </div>

      
          <div className="navbar-right">
            <div className="navbar-user">
            <img src="Asserts/Bell.png" alt="Notify" className="bell"/>
            <img src="Asserts/pic.png" alt="picture" className='user-avatar'/>
          <div className="user-info">                 
            <div className="user-num">HYD 256789</div>
            <div className="user-role">Cashier</div>
          </div>
          <span className="dropdown-arrow">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </span>
        </div>

     </div> 
    </div>

   );
};

export default NavBar;