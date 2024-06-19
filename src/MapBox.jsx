const MapBox = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.678029201551!2d-113.9573894875375!3d51.07749334190008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164af9563cfc9%3A0x881bb68e57fdee2e!2s5510%2026%20Ave%20NE%2C%20Calgary%2C%20AB%20T1Y%206S1!5e0!3m2!1sen!2sca!4v1718763632161!5m2!1sen!2sca"
          width="full"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default MapBox;
