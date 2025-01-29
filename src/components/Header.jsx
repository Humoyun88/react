import React from 'react'
import logo from '../assets/images/PROWEB.png'
function Header() {
  return (
<header className="header">
    <nav className="nav">
        <div className="container">
            <a href="" className="logo"><img src={logo} alt="" /></a>
            <ul className='list'>
                <li><a href="" className="link">Обо мне</a></li>
                <li><a href="" className="link">Мои работы</a></li>
                <li><a href="" className="link">Контакты</a></li>
            </ul>
        </div>
    </nav>
    <div className="header__content">
      <h1 className="header__title">Добро пожаловать на мой сайт</h1>
      <a href="" className="header__btn">Позвонить</a>
    </div>
</header>
  )
}

export default Header