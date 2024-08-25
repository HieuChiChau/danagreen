import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/dana-removebg-preview.png';
import menuIcon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setMobileMenu(false); 
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='Logo' className='logo cccccc'/>
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li>
          <Link
            to='hero'
            smooth={true}
            offset={0}
            duration={500}
            className={activeItem === 'hero' ? 'btn' : ''}
            onClick={() => handleItemClick('hero')}
          >
            Trang Chủ
          </Link>
        </li>
        <li>
          <Link
            to='program'
            smooth={true}
            offset={-260}
            duration={500}
            className={activeItem === 'program' ? 'btn' : ''}
            onClick={() => handleItemClick('program')}
          >
            Thương Hiệu
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            offset={-150}
            duration={500}
            className={activeItem === 'about' ? 'btn' : ''}
            onClick={() => handleItemClick('about')}
          >
            Cảm Hứng
          </Link>
        </li>
        <li>
          <Link
            to='product'
            smooth={true}
            offset={-260}
            duration={500}
            className={activeItem === 'product' ? 'btn' : ''}
            onClick={() => handleItemClick('product')}
          >
            Sản Phẩm
          </Link>
        </li>
        <li>
          <Link
            to='testimonials'
            smooth={true}
            offset={-260}
            duration={500}
            className={activeItem === 'testimonials' ? 'btn' : ''}
            onClick={() => handleItemClick('testimonials')}
          >
            Đánh Giá
          </Link>
        </li>
        <li>
          <Link
            to='loginsignup'
            smooth={true}
            offset={-260}
            duration={500}
            className={activeItem === 'loginsignup' ? 'btn' : ''}
            onClick={() => handleItemClick('loginsignup')}
          >
            Đăng Nhập
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            offset={-260}
            duration={500}
            className={activeItem === 'contact' ? 'btn' : ''}
            onClick={() => handleItemClick('contact')}
          >
            Liên Hệ
          </Link>
        </li>
      </ul>
      <img src={menuIcon} alt='Menu Icon' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
