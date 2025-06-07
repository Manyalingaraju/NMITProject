import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Notebook",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "pen",
          price: 10,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  const orderTotal = useMemo(() => {
    if (!orderDetails) return 0;
    return orderDetails.orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [orderDetails]);

  if (!orderDetails) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Details</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Order ID: #{orderDetails._id}</h3>
        <div className="flex gap-4 mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${orderDetails.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {orderDetails.isPaid ? "Paid" : "Unpaid"}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${orderDetails.isDelivered ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>
            {orderDetails.isDelivered ? "Delivered" : "In Transit"}
          </span>
        </div>
        <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
        <p><strong>Shipping:</strong> {orderDetails.shippingMethod}, {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Unit Price</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.orderItems.map((item) => (
              <tr key={item.productId} className="border-b">
                <td className="py-2 px-4">
                  <Link to={`/product/${item.productId}`} className="text-blue-500 hover:underline">
                    {item.name}
                  </Link>
                </td>
                <td className="py-2 px-4">₹{item.price}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">₹{item.price * item.quantity}</td>
              </tr>
            ))}
            <tr className="font-semibold">
              <td className="py-2 px-4" colSpan={3}>Grand Total</td>
              <td className="py-2 px-4">₹{orderTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to="/my-orders" className="text-blue-500 hover:underline">
        Back to Orders
      </Link>
    </div>
  );
};

export default OrderDetailsPage;
