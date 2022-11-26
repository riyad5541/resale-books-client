import React from 'react';

const BookingModal = ({ selectBook, setSelectBook }) => {
    const { title ,resaleprice, location, mobileNum} = selectBook;
      
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const email = form.email.value;

        console.log(phone,location,email)
        setSelectBook(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={title} className="input w-full input-bordered " />
                        <input type="text" disabled value={resaleprice} className="input w-full input-bordered " />
                        <input name='email' type="email" className="input w-full input-bordered " />
                        <input name='phone' type="text" value={mobileNum} placeholder="Phone Number" className="input w-full input-bordered " />
                        <input name='location' type="text" value={location} placeholder="location" className="input w-full input-bordered " />
                        <input className='btn btn-accent w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;