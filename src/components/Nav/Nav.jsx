import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
  return (
    <div className="Nav">
        <h1 className="animate__animated animate__fadeInDown" onClick={() => setCurrentPage('home')}>HAIR STORY SALON</h1>

        <ul>
            <li className="nav-link animate__animated animate__fadeInLeft hover" onClick={() => setCurrentPage('services')}>services</li>
            <li className="nav-link animate__animated animate__fadeInLeft hover" onClick={() => setCurrentPage('about')}>about</li>
            <li className="nav-link animate__animated animate__fadeInRight hover" onClick={() => setCurrentPage('contact')}>contact</li>
            <li className="booking-link animate__animated animate__fadeInRight hover" onClick={() => setCurrentPage('book')}>book now</li>
        </ul>
    </div>
  );
}