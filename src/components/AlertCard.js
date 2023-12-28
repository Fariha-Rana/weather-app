import React from "react";

const AlertCard = ({ alert }) => {
  return (
    <section className="mt-8">
      <h1 className="text-center text-3xl font-sans text-white">📢Alerts</h1>
      <div className="max-w-md mx-auto bg-cyan-800 rounded-md overflow-hidden shadow-md my-4 text-white text-wrap">
        <div className="p-4">
          <h2 className="text-lg font-serif mb-2">{alert?.headline}</h2>
          <div className="flex flex-col text-xs mb-2 font-sans">
            <p>Category: {alert?.category || "none"}</p>
            <p>Event: {alert?.even || "none"}</p>
            <p>severity: {alert?.severity || "none"}</p>
          </div>
          <p className="mb-4 text-sm border border-white p-2">📃 {alert?.desc || "not available"}</p>
          <div className="flex flex-col text-xs mt-2">
            <p>Effective: {alert?.effective}</p>
            <p>Expires: {alert?.expires}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertCard;
