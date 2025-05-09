
import React, { useState } from "react";
import './Feehead.css';
import { useNavigate } from "react-router-dom";

const Feehead = () => {
    const [filter, setFilter] = useState("");
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

   const [data] = useState([
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },
    {Tran_Head_ID:"01",Head_Code:"Andhra Pradesh",Head_Name:"Guntur",Created_On:"01",Created_By:"Updated",Payment_Head:"Updated",Scenario_ID:"Updated",
        OB_Scenario_ID:"Updated",Quick_Payment_Heads:"Updated",Sub_Head_Code:"Updated",Payment_Data:"Updated",Category_ID:"Updated",Daysheet_Head:"Upadated"
    },

]);

    const itemsPerPage = 14;
    const filteredItems = filter
        ? data.filter(payment => payment.receiptStatus === filter)
        : data;
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="fee-head">
            <div className="main-container">
                <div className="sub-container">
                    <h1>Fee Head</h1>
                    <div className="button-group">
                        <button 
                            onClick={() => {}} 
                            className="filter-button"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V8C18.9999 8.26519 18.8946 8.51951 18.707 8.707L14 13.414V17C13.9999 17.2652 13.8945 17.5195 13.707 17.707L11.707 19.707C11.5671 19.8468 11.389 19.942 11.195 19.9806C11.0011 20.0192 10.8 19.9993 10.6173 19.9237C10.4346 19.848 10.2785 19.7199 10.1686 19.5555C10.0587 19.391 10 19.1978 10 19V13.414L5.293 8.707C5.10545 8.51951 5.00006 8.26519 5 8V5Z" fill="#5B6871"/>
                            </svg>
                            Filter<span className="notification">1</span>
                        </button>
                        <button 
                            onClick={() => {}} 
                            className="export-button"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.29303 11.7068C5.10556 11.5193 5.00024 11.265 5.00024 10.9998C5.00024 10.7346 5.10556 10.4803 5.29303 10.2928L11.293 4.29279C11.4806 4.10532 11.7349 4 12 4C12.2652 4 12.5195 4.10532 12.707 4.29279L18.707 10.2928C18.8892 10.4814 18.99 10.734 18.9877 10.9962C18.9854 11.2584 18.8803 11.5092 18.6948 11.6946C18.5094 11.88 18.2586 11.9852 17.9964 11.9875C17.7342 11.9897 17.4816 11.8889 17.293 11.7068L13 7.41379V18.9998C13 19.265 12.8947 19.5194 12.7071 19.7069C12.5196 19.8944 12.2652 19.9998 12 19.9998C11.7348 19.9998 11.4805 19.8944 11.2929 19.7069C11.1054 19.5194 11 19.265 11 18.9998V7.41379L6.70703 11.7068C6.5195 11.8943 6.26519 11.9996 6.00003 11.9996C5.73487 11.9996 5.48056 11.8943 5.29303 11.7068Z" fill="#5B6871"/>
                            </svg>
                            Export
                        </button>
                        <button 
                            onClick={() => navigate('/addnewfield')} 
                            className="add-field-button"
                        >
                            + Add New Field
                        </button>
                    </div>
                </div>

                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th className="firstColumn">
                                    
                                    <input
                                        type="checkbox"
                                        checked={false}
                                        onChange={() => {}}
      

                                    />
                                </th>
                                <th>Tran Head ID</th>
                                <th>Head Code</th>
                                <th>Head Name</th>
                                <th>Created On </th>
                                <th>Created By</th>
                                <th>Payment Head</th>
                                <th>Scenario ID</th>
                                <th> OB Scenario ID</th>
                                <th>Quick Payment Heads</th>
                                <th>Sub Head Code</th>
                                <th>Payment Data</th>
                                <th>Category ID</th>
                                <th className="lastColumn">Daysheet Head</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedItems.length > 0 ? (
                                paginatedItems.map((payment) => (
                                    <tr key={payment.id}>
                                        <td className="firstColumn">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.has(payment.id)}
                                                onChange={() => {
                                                    const newSelectedRows = new Set(selectedRows);
                                                    if (newSelectedRows.has(payment.id)) {
                                                        newSelectedRows.delete(payment.id);
                                                    } else {
                                                        newSelectedRows.add(payment.id);
                                                    }
                                                    setSelectedRows(newSelectedRows);
                                                }}
                                            />
                                        </td>
                                        <td>{payment.Tran_Head_ID}</td>
                                        <td>{payment.Head_Code}</td>
                                        <td>{payment.Head_Name}</td>
                                        <td>{payment.Created_On}</td>
                                        <td>{payment.Created_By}</td>
                                        <td>{payment.Payment_Head}</td>
                                        <td>{payment.Scenario_ID}</td>
                                        <td>{payment.OB_Scenario_ID}</td>
                                        <td>{payment.Quick_Payment_Heads}</td>
                                        <td>{payment.Sub_Head_Code}</td>
                                        <td>{payment.Payment_Data}</td>
                                        <td>{payment.Category_ID}</td>
                                        <td>{payment.Daysheet_Head}</td>
                                        <td className="action-buttons">
                                            <button
                                                onClick={() => {}}
                                                className="action-btn delete-btn"
                                                title="Delete"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.5 4.99935H4.16667M4.16667 4.99935H17.5M4.16667 4.99935V16.666C4.16667 17.108 4.34226 17.532 4.65482 17.8445C4.96738 18.1571 5.39131 18.3327 5.83333 18.3327H14.1667C14.6087 18.3327 15.0326 18.1571 15.3452 17.8445C15.6577 17.532 15.8333 17.108 15.8333 16.666V4.99935H4.16667ZM6.66667 4.99935V3.33268C6.66667 2.89065 6.84226 2.46673 7.15482 2.15417C7.46738 1.84161 7.89131 1.66602 8.33333 1.66602H11.6667C12.1087 1.66602 12.5326 1.84161 12.8452 2.15417C13.1577 2.46673 13.3333 2.89065 13.3333 3.33268V4.99935M8.33333 9.16602V14.166M11.6667 9.16602V14.166" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => {}}
                                                className="action-btn edit-btn"
                                                title="Edit"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_363_16166)">
                                                        <path d="M14.167 2.5009C14.3859 2.28203 14.6457 2.10842 14.9317 1.98996C15.2176 1.87151 15.5241 1.81055 15.8337 1.81055C16.1432 1.81055 16.4497 1.87151 16.7357 1.98996C17.0216 2.10842 17.2815 2.28203 17.5003 2.5009C17.7192 2.71977 17.8928 2.97961 18.0113 3.26558C18.1297 3.55154 18.1907 3.85804 18.1907 4.16757C18.1907 4.4771 18.1297 4.7836 18.0113 5.06956C17.8928 5.35553 17.7192 5.61537 17.5003 5.83424L6.25033 17.0842L1.66699 18.3342L2.91699 13.7509L14.167 2.5009Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_363_16166">
                                                            <rect width="20" height="20" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => navigate('/view')} 
                                                className="action-btn view-btn"
                                                title="View"
                                            >
                                                <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M19.3623 12.864C19.565 13.148 19.6663 13.2907 19.6663 13.5007C19.6663 13.7113 19.565 13.8533 19.3623 14.1373C18.4517 15.4147 16.1257 18.1673 12.9997 18.1673C9.87301 18.1673 7.54767 15.414 6.63701 14.1373C6.43434 13.8533 6.33301 13.7107 6.33301 13.5007C6.33301 13.29 6.43434 13.148 6.63701 12.864C7.54767 11.5867 9.87367 8.83398 12.9997 8.83398C16.1263 8.83398 18.4517 11.5873 19.3623 12.864Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <path d="M15 13.5C15 12.9696 14.7893 12.4609 14.4142 12.0858C14.0391 11.7107 13.5304 11.5 13 11.5C12.4696 11.5 11.9609 11.7107 11.5858 12.0858C11.2107 12.4609 11 12.9696 11 13.5C11 14.0304 11.2107 14.5391 11.5858 14.9142C11.9609 15.2893 12.4696 15.5 13 15.5C13.5304 15.5 14.0391 15.2893 14.4142 14.9142C14.7893 14.5391 15 14.0304 15 13.5Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <path d="M25.6506 8.31818L28.6733 16.8892H28.7926L31.8153 8.31818H33.108L29.3693 18.5H28.0966L24.358 8.31818H25.6506ZM34.5348 18.5V10.8636H35.7081V18.5H34.5348ZM35.1314 9.59091C34.9027 9.59091 34.7055 9.51302 34.5398 9.35724C34.3774 9.20147 34.2962 9.0142 34.2962 8.79545C34.2962 8.5767 34.3774 8.38944 34.5398 8.23366C34.7055 8.07789 34.9027 8 35.1314 8C35.3601 8 35.5556 8.07789 35.718 8.23366C35.8838 8.38944 35.9666 8.5767 35.9666 8.79545C35.9666 9.0142 35.8838 9.20147 35.718 9.35724C35.5556 9.51302 35.3601 9.59091 35.1314 9.59091ZM41.0588 18.6591C40.323 18.6591 39.6883 18.4967 39.1547 18.1719C38.6243 17.8438 38.215 17.3864 37.9267 16.7997C37.6416 16.2098 37.4991 15.5237 37.4991 14.7415C37.4991 13.9593 37.6416 13.2699 37.9267 12.6733C38.215 12.0734 38.6161 11.6061 39.1298 11.2713C39.6468 10.9332 40.2501 10.7642 40.9395 10.7642C41.3372 10.7642 41.7299 10.8305 42.1177 10.9631C42.5055 11.0956 42.8585 11.3111 43.1767 11.6094C43.4949 11.9044 43.7484 12.2955 43.9373 12.7827C44.1262 13.2699 44.2207 13.8698 44.2207 14.5824V15.0795H38.3343V14.0653H43.0275C43.0275 13.6345 42.9413 13.25 42.769 12.9119C42.6 12.5739 42.358 12.3071 42.0431 12.1115C41.7316 11.916 41.3637 11.8182 40.9395 11.8182C40.4721 11.8182 40.0678 11.9342 39.7264 12.1662C39.3883 12.3949 39.1281 12.6932 38.9458 13.0611C38.7636 13.429 38.6724 13.8234 38.6724 14.2443V14.9205C38.6724 15.4972 38.7718 15.986 38.9707 16.3871C39.1729 16.7848 39.4529 17.0881 39.8109 17.2969C40.1689 17.5024 40.5848 17.6051 41.0588 17.6051C41.367 17.6051 41.6454 17.562 41.894 17.4759C42.1459 17.3864 42.363 17.2538 42.5453 17.0781C42.7276 16.8991 42.8684 16.6771 42.9679 16.4119L44.1014 16.7301C43.9821 17.1146 43.7815 17.4527 43.4998 17.7443C43.2181 18.0327 42.8701 18.258 42.4558 18.4205C42.0415 18.5795 41.5758 18.6591 41.0588 18.6591ZM47.7356 18.5L45.4089 10.8636H46.6419L48.2924 16.7102H48.372L50.0027 10.8636H51.2555L52.8663 16.6903H52.9458L54.5964 10.8636H55.8294L53.5027 18.5H52.3493L50.6788 12.6335H50.5595L48.889 18.5H47.7356Z" fill="#7B7B7B"/>
                                                </svg>
 
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="12" className="empty-state">
                                        {/* No data available */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination-container">
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    );
};

export default Feehead;
