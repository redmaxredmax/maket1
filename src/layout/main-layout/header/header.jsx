import React from 'react'
import { Phone } from "../../../layout/main-layout/header/assets/icons/phone"
import { Menu } from "../../../layout/main-layout/header/assets/icons/menu"
import { Profile } from "../../../layout/main-layout/header/assets/icons/profile"
import { Like } from "../../../layout/main-layout/header/assets/icons/like"
import { Bin } from "../../../layout/main-layout/header/assets/icons/bin"
import logo from "/public/icons/logo.svg"
import { Button } from "../../../components/ui/button"
// import { Search } from './components/search'
import { Modal } from '../../../components/ui/modal'
import { useModalToggle } from '../../../hooks/useModalToggle'
import { Link } from 'react-router-dom'


export const Header = () => {
  const { close, isOpen, open } = useModalToggle()


  return (
    <div className='container'>
      <ul className='flex justify-end gap-5 pb-[25px]'>
        <li >
          <a className='text-base hover:text-blue-500' href="/">Доставка и оплата</a>
        </li>
        <li >
          <a className='text-base hover:text-blue-500' href="/">Пункты выдачи</a>
        </li>
        <li >
          <a className='text-base hover:text-blue-500' href="/">Поддержка</a>
        </li>
        <li className='flex items-center gap-4'>
          <Phone />
          <a className='text-base hover:text-blue-500' href="/">+998 90 253 77 53</a>
        </li>
      </ul>
      <div className='flex justify-between items-center'>
        <Modal close={close} isOpen={isOpen}>
       
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui ut unde ullam velit praesentium voluptatum, esse modi dolorum quam excepturi. Dolores ipsum, pariatur optio quaerat architecto deleniti maxime illo!</p>
        </Modal>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className='flex items-center gap-[32px]'>
          <Button onClick={open } icon1={<Menu />} variant="catalog">Каталог</Button>
          <div>
            <input className='w-[673px] border outline-none p-3 border-black' type="text" placeholder='Поиск' />
            {/* <Search /> */}
          </div>
        </div>
        <div className='flex gap-[32px]'>
          <Button icon1={<Profile />} variant="header">Войти</Button>
          <Button icon1={<Like />} variant="header">Избранное</Button>
          <Button icon1={<Bin />} variant="header">Корзина</Button>
        </div>
      </div>
    </div>
  )
}
