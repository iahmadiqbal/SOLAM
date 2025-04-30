import { useMemo } from "react";

const ContactMap = () => {
  const mapIframe = useMemo(() => {
    return (
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3640345975386!2d73.07256491520864!3d33.65898498071202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95582cf7d9fd%3A0xa6e5555b708e05ef!2s6th%20Road%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1689334427334!5m2!1sen!2s"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }, []);

  return (
    <section className="w-full h-[80vh]">
      <div className="w-full h-full">{mapIframe}</div>
    </section>
  );
};

export default ContactMap;
