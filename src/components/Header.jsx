import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {Link, NavLink} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import { FiChevronDown, FiChevronRight, FiX } from "react-icons/fi"
import { IoPersonCircle, IoMenu } from "react-icons/io5"
import Social from './utils/Social'
import home from '../assets/imgs/icons/mobile-home.svg'
import portfolio from '../assets/imgs/icons/mobile-portfolio.svg'
import about from '../assets/imgs/icons/mobile-about.svg'
import reviews from '../assets/imgs/icons/mobile-reviews.svg'
import blog from '../assets/imgs/icons/mobile-blog.svg'
import contacts from '../assets/imgs/icons/mobile-contacts.svg'
import account from '../assets/imgs/icons/mobile-account.svg'

const Header = () => {
    const {mobile} = useIsMobile('991px')

    const [services, setServices] = useState(false)
    const [sublevel, setSublevel] = useState(0)

    const [mobileMenu, setMobileMenu] = useState(false)
    const handleCloseMM = () => setMobileMenu(false)
    const handleShowMM = () => setMobileMenu(true)

    return (
        <>
            <header>
                <Container className='custom-container h-100 d-flex justify-content-between align-items-center'>
                    <Logo className='logo'/>
                    {
                        (mobile)
                        ? <nav className='main'>
                            <ul>
                                <li>
                                    <Link to='/'>
                                        <IoPersonCircle/>
                                    </Link>
                                </li>
                                <li>
                                    <button type='button' onClick={handleShowMM}>
                                        <IoMenu/>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        : <nav className='main'>
                            <ul>
                                <li>
                                    <NavLink to='/'>??????????????</NavLink>
                                </li>
                                <li>
                                    <a href='/' onMouseEnter={()=>setServices(true)} onMouseLeave={()=>setServices(false)}>
                                        ????????????
                                        <FiChevronDown className='color-2 fs-13'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>??????????????????</a>
                                </li>
                                <li>
                                    <a href='/'>?? ??????</a>
                                </li>
                                <li>
                                    <a href='/'>????????????</a>
                                </li>
                                <li>
                                    <NavLink to='blog'>????????</NavLink>
                                </li>
                                <li>
                                    <a href='/'>????????????????</a>
                                </li>
                                <li>
                                    <a href='/'>???????????? ??????????????</a>
                                </li>
                            </ul>
                        </nav>
                    }
                </Container>
                {
                    (services) &&
                    <div className="services" onMouseEnter={()=>setServices(true)} onMouseLeave={()=>setServices(false)}>
                        <nav className='level-1'>
                            <ul>
                                <li>
                                    <a href="/" onMouseEnter={()=>setSublevel(0)} className={(sublevel === 0)?'active':''}>
                                        <span>Web ????????????????????</span>
                                        <FiChevronRight/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={(sublevel === 1)?'active':''} onMouseEnter={()=>setSublevel(1)}>
                                        <span>?????????????????? ????????????????????</span>
                                        <FiChevronRight/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={(sublevel === 2)?'active':''}>
                                        <span>????????????</span>
                                        <FiChevronRight/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={(sublevel === 3)?'active':''}>
                                        <span>??????????????????????</span>
                                        <FiChevronRight/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={(sublevel === 4)?'active':''}>
                                        <span>?????????????? ?? SMM</span>
                                        <FiChevronRight/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={(sublevel === 5)?'active':''}>
                                        <span>?????? ????????</span>
                                        <FiChevronRight/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className='level-2'>
                            {
                                (sublevel === 0) &&
                                <nav>
                                    <ul>
                                        <li><a href="/">??????????????</a></li>
                                        <li><a href="/">?????????????????????????? ????????</a></li>
                                        <li><a href="/">???????????????? ??????????????</a></li>
                                        <li><a href="/">????????????</a></li>
                                        <li><a href="/">????????/????????????????</a></li>
                                        <li><a href="/">???????????????????????????? ????????????????????</a></li>
                                    </ul>
                                    <img src="imgs/img1.jpg" alt="Web ????????????????????" />
                                </nav>
                            }
                            {
                                (sublevel === 1) &&
                                <nav>
                                    <ul>
                                        <li><a href="/">?????????????????? ???????????????????? 1</a></li>
                                        <li><a href="/">?????????????????? ???????????????????? 2</a></li>
                                        <li><a href="/">?????????????????? ???????????????????? 3</a></li>
                                        <li><a href="/">?????????????????? ???????????????????? 4</a></li>
                                        <li><a href="/">?????????????????? ???????????????????? 5</a></li>
                                    </ul>
                                    <img src="imgs/img2.jpg" alt="?????????????????? ????????????????????" />
                                </nav>
                            }
                        </div>
                    </div>
                }
            </header>
            <Offcanvas show={mobileMenu} placement={'end'} onHide={handleCloseMM}>
                <button type='button' className='close' onClick={handleCloseMM}><FiX/></button>
                <Offcanvas.Body>
                    <nav onClick={handleCloseMM}>
                        <ul>
                            <li>
                                <Link to="/">
                                    <img src={home} alt="??????????????" />
                                    <span>??????????????</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={portfolio} alt="??????????????????" />
                                    <span>??????????????????</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={about} alt="?? ??????" />
                                    <span>?? ??????</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={reviews} alt="????????????" />
                                    <span>????????????</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog">
                                    <img src={blog} alt="????????" />
                                    <span>????????</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={contacts} alt="????????????????" />
                                    <span>????????????????</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={account} alt="???????????? ??????????????" />
                                    <span>???????????? ??????????????</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <figure className='offer'>
                        <img src="imgs/offer-bg-1.jpg" alt="offer" />
                        <figcaption>
                            <h2 className='accent-1'>Lorem ipsum dolor </h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                        </figcaption>
                    </figure>

                    <p className='gray fs-12 mb-3 text-center mt-5'>???? ?? ?????? ??????????:</p>
                    <Social/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header