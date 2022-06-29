import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { fetchBookById } from '../redux/actions/BooksAction';
import { addToCart } from '../redux/actions/StoreAction';
import { CURRENCY } from '../util/helper';

const Book = () => {
    const { book } = useSelector((state: any) => state.books);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id: string = params.id!;

    const goToCart = useCallback(() => navigate('/cart/', { replace: false }), [navigate]);

    useEffect(() => {
        dispatch(fetchBookById(id) as any);
    }, [dispatch, id]);

    const handleCartAdd = () => {
        dispatch(addToCart(book) as any);
        document!.querySelector('.btn-cart')!.innerHTML = 'Added to cart✔️';
        setTimeout(() => {
            document!.querySelector('.btn-cart')!.innerHTML = 'Add to cart';
        }, 2000);
    };

    const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(addToCart(book) as any);
        goToCart();
    };

    return (
        <div className="bookInfoCard">
            <div className="bookImg">
                <img src={book.coverPage} alt="Book Cover Page" />
            </div>
            <div className="bookInfo">
                <div className="title">{book.title}</div>
                <div className="price">Price: {CURRENCY} {parseFloat(book.price).toFixed(2)}</div>
                <div className="authors">Author(s): {book.author}</div>
                <div className="pageCount">Pages: {book.pageCount}</div>
                <div className="isbn">ISBN: {book.ISBN}</div>
                <div className="options">
                    <button className="btn btn-primary btn-cart" onClick={handleCartAdd}>Add to cart</button>
                    <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
                </div>
                <div className="desc">{book.description}</div>
            </div>
        </div>
    );
};

export default Book;
