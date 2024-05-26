export const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-sm p-4">
      <div className="text-gray-700">{title}</div>
      <div className="flex justify-between pt-2">
        <div className="font-semibold text-2xl">{amount}</div>
        {orderCount ? (
          <div className="flex cursor-pointer underline font-medium">
            <div className="text-blue-700 ">{orderCount} order(s)</div>
            <div>{">"}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
