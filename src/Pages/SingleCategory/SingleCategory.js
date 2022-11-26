import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import SingleBook from '../SingleBook/SingleBook';

const SingleCategory = () => {
    const [selectBook, setSelectBook] = useState(null);
    const books = useLoaderData();
    console.log(books)
    return (
        <div className='my-8'>
            <h1 className='text-4xl font-bold text-center'>All books are here</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
                {
                    // books.map((book) => {
                    //     <SingleBook
                    //     key={book._id}
                    //     book={book}
                    //     ></SingleBook>
                    // })

                    books.map(book => <SingleBook
                        key={book._id}
                        book={book}
                        setSelectBook={setSelectBook}
                    ></SingleBook>
                    )
                }
            </div>
            {
                selectBook &&
                <BookingModal
                    selectBook={selectBook}
                    setSelectBook={setSelectBook}
                ></BookingModal>
            }
        </div>
    );
};

export default SingleCategory;