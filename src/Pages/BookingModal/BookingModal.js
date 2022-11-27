import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ selectBook, setSelectBook }) => {

    const {user} = useContext(AuthContext);
    // console.log(user)

    const { title ,resaleprice, location, mobileNum} = selectBook;
      
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const name = form.name.value;

        // console.log(phone,location,email,title,price);
        const booking = {phone,location,email,title,price,name}
        console.log(booking)

        // fetch('http://localhost:5000/bookings')
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setSelectBook(null);
                // toast.success('Booking confirmed');
                if (data.acknowledged) {
                    setSelectBook(null);
                    toast.success('Booking confirmed');
                   
                }
                else{
                    toast.error(data.message);
                }

            })

        
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='title' type="text" value={title} readOnly className="input w-full input-bordered " />
                        <input name="price" type="text" value={resaleprice} readOnly className="input w-full input-bordered " />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered " />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input w-full input-bordered " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered " />
                        <input name='location' type="text" placeholder="location" className="input w-full input-bordered " />
                        <input className='btn btn-accent w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;