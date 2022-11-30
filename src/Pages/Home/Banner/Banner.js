import React from 'react';

const Banner = () => {
    return (
        <div>
             <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BwuaAWilXR1JDbdHYnto-GqNh-L6mS5NGQ&usqp=CAU" className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Resale Books</h1>
                    <p className="py-6">In this website you can find any kind of books like math,physics,chemistry which is used or old books.You can find this book for small amount of money.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;