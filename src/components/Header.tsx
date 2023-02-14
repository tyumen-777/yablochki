import React from 'react'

const Header = () => {
    return (
        <header className='bg-black py-2'>
            <div className='container mx-auto justify-between text-white flex'>
                <div className='flex gap-9'>
                    <p>Главная</p>
                    <p>Каталог</p>
                    <p>Гарантия</p>
                    <p>Доставка и оплата</p>
                    <p>Отзывы</p>
                    <p>Контакты</p>
                </div>
                <div>
                    <a href="tel:+7(3452)123-456">+7(3452)123-456</a>
                </div>
            </div>
        </header>
    )
}

export default Header