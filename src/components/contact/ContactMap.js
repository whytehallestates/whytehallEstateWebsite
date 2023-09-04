import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="map-area">
                <iframe title="Address" className="iframe-placeholder" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0550799159637!2d77.582985!3d13.0956958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18673bef7799%3A0xb137c76db9196e7a!2s226%2C%203rd%20Floor%2C%205%2C%20Yelahanka%20Satellite%20Town%2C%20Yelahanka%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1687600420145!5m2!1sen!2sin" width="600" height="750" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default ContactMap;