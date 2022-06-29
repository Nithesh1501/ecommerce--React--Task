import { CURRENCY } from '../util/helper';

const Order = ({ order }: any) => {
    const TOTAL_PRICE = Number(order.price) * Number(order.count);
    return (
        <div className="order">
            <div className="order-header">
                <span>Order Placed: {order.date}</span>
                <span>Status: Delivered</span>
            </div>
            <div className="order-body">
                <div className="book-order-img">
                    <img src={order.coverPage} alt="Book Cover Page" />
                </div>
                <div className="book-order-info">
                    <div className="book-order-title">
                        <b>{order.title}</b> X {order.count}
                    </div>
                    <div className="book-order-authors">
                        Author(s): {order.author}
                    </div>
                    <div className="book-order-price">
                        Price: {CURRENCY}{Number(TOTAL_PRICE).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
