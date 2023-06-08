import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
  return (
    <div className="Nav">
        <img src="https://cdn-icons-png.flaticon.com/512/3498/3498122.png" alt="Hair Story" />
        <h1 className="animate__animated animate__fadeInDown" onClick={() => setCurrentPage('home')}>HAIR STORY SALON<br /><span>FAYETTEVILLE, NORTH CAROLINA</span></h1>

        <ul className="animate__animated animate__fadeInUp">
            <li className="nav-link hover" onClick={() => setCurrentPage('services')}>services</li>
            <li className="nav-link hover" onClick={() => setCurrentPage('about')}>about</li>
            <li className="nav-link hover" onClick={() => setCurrentPage('contact')}>contact</li>
        </ul>
    </div>
  );
}