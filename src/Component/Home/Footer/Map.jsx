import React from "react";

const Map = () => {
  return (
    <div className="hidden sm:block w-full h-auto border border-slate-900">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.838122973247!2d83.3590911119395!3d18.581335367240253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b9b923432274b%3A0xc4d005be6d757589!2sT%20B%20R%20Cinemas!5e0!3m2!1sen!2sin!4v1719250496566!5m2!1sen!2sin"
        allowFullScreen
        width="100%"
        height="300"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
