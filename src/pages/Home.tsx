import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, setHeaderSubTitle } from '../redux/actions/BooksAction';
import Book from '../components/Book';
import { INITIAL_BOOKS_COUNT } from '../util/helper';

const Home = () => {
    const { books, isError, isLoading } = useSelector((state: any) => state.books);
    const [booksCount, setBooksCount] = useState(INITIAL_BOOKS_COUNT);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBook() as any);
        dispatch(setHeaderSubTitle('') as any);
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (isError) {
        return <h1>Error</h1>;
    }

    const handleLoadMore = () => {
        setBooksCount(booksCount + INITIAL_BOOKS_COUNT);
    };

    return (
        <>
            <div className="bookList" >
                {books.slice(0, booksCount).map((bookValue: any) => (<Book key={bookValue.id} book={bookValue} />))}
            </div >
            {books.length > booksCount ?
                <div className="loadMore">
                    <button className="btn btn-noBg" onClick={handleLoadMore}>Show More...</button>
                </div>
                : null
            }
        </>

    );
};

export default Home;
