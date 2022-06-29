import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props: any) => {
    const { subTitle } = useSelector((state: any) => state.books);

    return (
        <header data-testid='header-component'>
            <div className="title">
                <div className="main">
                    eCommerce Site
                </div>
                <div className="page">{subTitle}</div>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-orders">My Orders</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
