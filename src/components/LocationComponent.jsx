const LocationComponent = ({ location }) => {
  return (
    <section className="text-center mb-2 text-white">
      <div className="flex text-4xl align-center justify-center border p-2 mb-1 rounded-full shadow-lg bg-sky-800 ">
        <span className="text-lg font-sans mr-1">🌐 {location?.name}, </span>
        <span className="text-lg font-medium">
          {location && (location?.region, location?.country)}
        </span>
      </div>
      <div className="flex text-sm align-center justify-center border p-2 rounded-full shadow-lg mb-1 bg-sky-800 ">
        <span className="p-1">Timezone: {location?.tz_id}</span>
      </div>
      <div className="flex text-sm align-center justify-center border p-3 rounded-full shadow-lg  bg-sky-800 ">
        <span>
          Current Time {" "}
          {location?.localtime}
        </span>
      </div>
    </section>
  );
};

export default LocationComponent;
