import React from 'react';
import './style.css'
import icon from '../../../assets/icons/Frame 26.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='icon'>
                <img src={icon} alt=""/>
            </div>
            <div className='header-text'>
                <h3 className='about-me'>Обо мне</h3>
                <h3 className='mb'>Методическое пособие</h3>
                <h3 className='articles'>Статьи</h3>
                <h3 className='test'>Тест</h3>
            </div>
        </div>
    );
};

export default Header;