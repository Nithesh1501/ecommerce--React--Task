import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Order from '../components/Order';
import { setHeaderSubTitle } from '../redux/actions/BooksAction';

const Orders = () => {
    const { orders } = useSelector((store: any) => store.store);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaderSubTitle('Orders') as any);
    });

    return (
        <div className="orders">
            {
                orders.map((order: any, index: any) => (
                    <Order key={index} order={order} />
                ))
            }
        </div>
    );
};

export default Orders;
