import './Student.css';
import { Link } from 'react-router-dom';

const Student = () =>{
    return(
        <div className='container1'>
           

               <div className='container-wrapper'>
                <h1 className='student-title'>Students Masters</h1>
                <p className="student-des">Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.</p>
               
                 <div className="search">
                   <svg width="20" height="41" className='searchIcon' viewBox="0 0 20 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5056 26.4612L17.5047 26.4603L13.5088 22.446C14.333 21.3904 14.8287 20.0588 14.8287 18.6186C14.8287 15.1511 12.0077 12.3301 8.54033 12.3301C5.07299 12.3301 2.25195 15.1511 2.25195 18.6185C2.25195 22.0797 5.07299 24.9007 8.54033 24.9007C9.91898 24.9007 11.189 24.4534 12.225 23.6964L16.2397 27.7172L16.2402 27.7177C16.4073 27.8913 16.6396 27.9764 16.8757 27.9764C17.3997 27.9764 17.7507 27.5761 17.7507 27.0831C17.7507 26.8397 17.6649 26.6269 17.5056 26.4612ZM3.5283 18.6185C3.5283 15.8544 5.77611 13.6064 8.54033 13.6064C11.3044 13.6064 13.5462 15.8542 13.5462 18.6185C13.5462 21.3765 11.3044 23.6243 8.54033 23.6243C5.77611 23.6243 3.5283 21.3765 3.5283 18.6185Z" fill="#A1A5B0" stroke="#A1A5B0" stroke-width="0.125984"/>
                   </svg>

                  <input type="text" placeholder="Search for the module" />
           
                 </div>
               </div>
               

               <div className="search-container">
                <ul className="search-list">
                 <li> <img src="Asserts/search_9053180 1.png" alt="Image" />  State </li>
                 <li> <img src="Asserts/receipt_9202739 1.png" alt="Image"/>City</li>
                 <li><img src="Asserts/online-learning_2436805 1.png" alt="Image"/>Campus</li>
                 <li><img src="Asserts/money_2382775 1.png" alt="Image"/>Fee Payment Year</li>
                 <li> <img src="Asserts/peer_17291857 1.png" alt="Image"/> <Link to="/feeHead">Fee Heads</Link>
                 </li>
                 <li><img src="Asserts/family_1416832 1.png" alt="Image"/>Organization</li>
                 <li><img src="Asserts/exam_18893627 1.png" alt="Image"/>Card Type</li>
                 <li> <img src="Asserts/refund_6133337 1.png" alt="Image"/>Stream</li>
                 <li><img src="Asserts/open-book_2702134 1.png" alt="Image"/>Program Name</li>
                 <li><img src="Asserts/bus_13807566 1.png" alt="Image"/>Exam Program</li>
                 <li><img src="Asserts/bus_13807566 1.png"alt="Image"/>Course Track </li>
                </ul>
               </div>

          </div>
            )
}
export default Student;