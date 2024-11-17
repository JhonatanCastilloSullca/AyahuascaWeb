import './index.css'
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaTripadvisor } from 'react-icons/fa';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useContext } from 'react';
import { GeneralContext } from '../../context/general';
import { FaLocationDot, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {

    const { t } = useTranslation();
    const { general } = useContext(GeneralContext);
    const GeneralData = general.whatsapp;
    return (
        <>
            <FloatingWhatsApp
                phoneNumber={GeneralData[0]?.numero}
                accountName={GeneralData[0]?.nombre}
                avatar="https://www.w3schools.com/howto/img_avatar.png"
                chatMessage="Hola soy un agente de Ayahuasca Murayari"
                darkMode={false}
                allowClickAway={true}
                allowEsc={true}
                size="56px"
                backgroundColor="#25D366"
                iconColor="#FFFFFF"
            />
            <div className="footer-prueba ">
            </div>
            <div className="vertigo-trekking-quote ">
                <div className="overlay-vertigo"></div>

            </div>
            <footer className="ftco-footer bg-bottom ftco-no-pt pb-0 footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Sobre nosotros</h2>
                                <p>Con los más altos estándares de calidad, ofrecemos una respuesta cálida, rápida y precisa a sus requerimientos para garantizar el éxito de sus programas.
                                </p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li ><a target="_blank"
                                        rel="noopener noreferrer" href="https://www.facebook.com/ayahuascachamanismoperu" className='d-flex justify-content-center align-items-center' ><FaFacebook /></a></li>
                                    <li ><a target="_blank"
                                        rel="noopener noreferrer" href="https://x.com/ayahuascaplanta" className='d-flex justify-content-center align-items-center' ><FaTwitter /></a></li>
                                    <li ><a target="_blank"
                                        rel="noopener noreferrer" href="https://www.youtube.com/user/awkipuma" className='d-flex justify-content-center align-items-center' ><FaYoutube /></a></li>
                                    <li ><a target="_blank"
                                        rel="noopener noreferrer" href="https://www.instagram.com/ayahuascaenperu/" className='d-flex justify-content-center align-items-center' ><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Categoria de Tours</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink to='/' className="py-2 d-block">
                                            {t("header.home")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/tours' className="py-2 d-block">
                                            TOURS
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/nosotros' className="py-2 d-block">
                                            {t("header.about")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contacto' className="py-2 d-block">
                                            {t("header.contact")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className="py-2 d-block">
                                            {t("header.cart")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/terminos' className="py-2 d-block">
                                            TERMINOS Y CONDICIONES
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Contactanos</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <a href="https://www.google.com/maps/search/?api=1&query=C.+Plateros+394,+Cusco,+Perú" target="_blank" rel="noopener noreferrer">
                                                <FaLocationDot className="text-white" />
                                                <span className="text px-2">Centro Poblado Tamshiyacu s/n - Río Amazonas - Iquitos - Peru </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+51990757584">
                                                <FaPhone className="text-white" />
                                                <span className="text px-2">+51 979 521 819 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@ayahuascamurayari.com">
                                                <FaEnvelope className="text-white" />
                                                <span className="text px-2">info@ayahuascamurayari.com</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:reservas@ayahuascamurayari.com">
                                                <FaEnvelope className="text-white" />
                                                <span className="text px-2">reservas@ayahuascamurayari.com</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:gerencia@ayahuascamurayari.com">
                                                <FaEnvelope className="text-white" />
                                                <span className="text px-2">gerencia@ayahuascamurayari.com</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >

            <Row className='m-0 p-0 bg-dark'>
                <div className="col-md-12 text-center copy-text-footer">
                    <p>
                        Ayahuasca Murayari
                    </p>
                </div>
            </Row>
        </>
    )
}

export default Footer;
