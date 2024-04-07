export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white">
      <img src="/P1.png" alt="Pizza" />
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Pepperoni pizza is a classic and beloved dish that tantalizes the taste
        buds with its perfect blend of flavors. This iconic pizza starts with a
        thin or thick crust, depending on preference, which serves as the
        delicious foundation for the toppings.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart ₱250
      </button>
    </div>
  );
}
