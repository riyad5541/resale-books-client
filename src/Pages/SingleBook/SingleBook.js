import React from 'react';

const SingleBook = ({book,setSelectBook}) => {
    const {img,title,location,resaleprice,yearuse,name,condition,mobileNum,postedTime,description,originalprice} = book;
    return (
        <div>
            <div >
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="font-semibold">Description : {description}</h2>
                    <h2 className="font-semibold text-info">Seller-Name : {name}</h2>
                    <h2 className="font-semibold">Mobil-Number : {mobileNum}</h2>
                    <h2 className="font-semibold">Location : {location}</h2>
                    <h2 className="font-semibold">Resale Price : ${resaleprice}</h2>
                    <h2 className="font-semibold">Original Price{originalprice}</h2>
                    <h2 className="font-semibold">Uses : {yearuse}</h2>
                    <h2 className="font-semibold">Condition : {condition}</h2>
                    <h2 className="font-semibold">Posted Time : {postedTime}</h2>
                    
                    <div className="card-actions">
                        <label 
                             htmlFor="booking-modal" 
                             className="btn btn-primary"
                             onClick={() => setSelectBook(book)}
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;