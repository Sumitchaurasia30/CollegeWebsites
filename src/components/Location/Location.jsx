//import "./Location.css";
//const location =
//  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13995.595849623665!2d79.50631438453475!3d28.468072042634365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00660778e3a2b%3A0xdace68a60a4bbcb1!2sRajshree%20Institute%20of%20Management%20%26%20Technology!5e0!3m2!1sen!2sin!4v1747315600672!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade";
//
//
//const Location = () => {
//  return (
//    <section className="location">
//      <iframe
//        src={location}
//        width="600"
//        height="450"
//        style={{ border: 0 }}
//        allowFullScreen=""
//        loading="lazy"
//        referrerPolicy="no-referrer-when-downgrade"
//      ></iframe>
//    </section>
//  );
//};
//
//export default Location;

import "./Location.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13995.595849623665!2d79.50631438453475!3d28.468072042634365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00660778e3a2b%3A0xdace68a60a4bbcb1!2sRajshree%20Institute%20of%20Management%20%26%20Technology!5e0!3m2!1sen!2sin!4v1747315600672!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </section>
  );
};

export default Location;

