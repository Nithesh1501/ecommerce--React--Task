import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToCart } from '../redux/actions/StoreAction';

const Book = ({ book }: any) => {
    const { title, description, coverPage, id } = book;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateCart = useCallback(() => navigate('/cart/', { replace: false }), [navigate]);

    const handleBookExpand = useCallback(() => navigate(`/book/${  id}`, { replace: false }), [id, navigate]);
    const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(addToCart(book) as any);
        navigateCart();
    };

    return (
        <div className='book' onClick={handleBookExpand}>
            <img src={coverPage} alt="Book Cover Page" />
            <div className="title">
                {title}
            </div>
            <div className="desc">
                {description.slice(0, 75)}...
            </div>
            <button className='btn btn-primary' onClick={handleBuy}>Buy Button</button>
        </div>
    );
};

export default Book;
