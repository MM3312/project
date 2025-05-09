import'./View.css'
import { useNavigate } from 'react-router-dom';

const View = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>View</h2>
          <button className="close-btn" onClick={handleCancel}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M9 8.75L21.5 21.25M9 21.25L21.5 8.75" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="popup-content">
          <div className="field-group">

            {/* Row 1 */}
            <div className="field-row">
              <div className="field-item">
                <label className="field-label">Account ID</label>
                <input type="text" className="field-input" value="2025-2026" readOnly />
              </div>
              <div className="field-item">
                <label className="field-label">Account Name</label>
                <input type="text" className="field-input" placeholder="Enter Value" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="field-row">
              <div className="field-item">
                <label className="field-label">Account Number</label>
                <input type="text" className="field-input" value="2025-2026" readOnly />
              </div>
              <div className="field-item">
                <label className="field-label">Account Type</label>
                <input type="text" className="field-input" placeholder="Enter Value" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="field-row">
              <div className="field-item">
                <label className="field-label">Bank Address</label>
                <input type="text" className="field-input" value="2025-2026" readOnly />
              </div>
              <div className="field-item">
                <label className="field-label">Bank Branch</label>
                <input type="text" className="field-input" placeholder="Enter Value" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="field-row">
              <div className="field-item">
                <label className="field-label">Bank Name</label>
                <input type="text" className="field-input" value="2025-2026" readOnly />
              </div>
            </div>

            {/* Row 5 */}
            <div className="field-row">
              <div className="field-item">
                <label className="field-label">IFSC Code</label>
                <input type="text" className="field-input" value="2025-2026" readOnly />
              </div>
              <div className="field-item">
                <label className="field-label">MICR Code</label>
                <input type="text" className="field-input" placeholder="Enter Value" />
              </div>
            </div>

            {/* Row 6 */}
            <div className="field-row">
              <div className="field-item">
                <label className="field-label">Organization ID</label>
                <input type="text" className="field-input" value="2025-2026" readOnly />
              </div>
              <div className="field-item">
                <label className="field-label">Bank Branch SOI ID</label>
                <input type="text" className="field-input" placeholder="Enter Value" />
              </div>
            </div>

            {/* Row 7 */}
            <div className="field-row">
              <div className="field-item">
                <label className="field-label">Campus ID</label>
                <input type="text" className="field-input" value="2025-2026" readOnly />
              </div>
              <div className="field-item">
                <label className="field-label">Active Status</label>
                <input type="text" className="field-input" placeholder="Enter Value" />
              </div>
            </div>

          </div>

          <div className="popup-footer">
            <button type="button" className="delete-btn1" onClick={handleCancel}>Delete</button>
            <button type="submit" className="edit-btn1">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default View;
