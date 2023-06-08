import './Services.css';

export default function Services() {
  return (
    <div className="Services animate__animated animate__fadeIn animate__slow">
        <img src="img/hair.png" alt="Hair Story" />
        <div className="animate__animated animate__fadeInUp">
            <h6>Coloring Services</h6>
            <ul className="services-ul">
              <li>Grey Coverage</li>
              <li>Highlights</li>
              <li>All-Over Color</li>
            </ul>
            <h6>Hairstyling Services</h6>
            <ul className="services-ul">
              <li>Haircuts</li>
              <li>Hairstyling</li>
            </ul>
            <h6>Hair Treatment Services</h6>
            <ul className="services-ul">
              <li>Standard Perms</li>
              <li>Straight Perms</li>
              <li>Brazilian Blowouts</li>
            </ul>
            <h6>Facial Services</h6>
            <ul className="facials">
              <li>Facials</li>
              <li>Facial Massages</li>
              <li>Eye Brow Waxing / Tinting</li>
            </ul>
        </div>
    </div>
  );
}