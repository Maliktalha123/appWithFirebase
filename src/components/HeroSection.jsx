import { useEffect, useState } from "react";
function HeroSection() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(1000);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const filtered = post.filter((data) => {
    return data.title.includes(search) && data.price <= price;
  });

  return (
    <div className="flex flex-wrap m-4">
      <div>
        <h1 className="text-center my-5 text-3xl font-semibold underline">
          Products
        </h1>
        <div className="max-w-lg mx-auto mb-8 flex items-center">
          <div className="mx-10 w-3/4 mx-auto ">
            <input
              placeholder="Search"
              type="search"
              className="w-full border-2  p-3 font-bold"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap m-4">
            <select
              name="prices"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            >
              <option value="100">Items under 100$</option>
              <option value="250">Items under 250$</option>
              <option value="500">Items under 500$</option>
              <option value="750">Items under 750$</option>
              <option value="1000">Items under 1000$</option>
            </select>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((data) => (
            <div
              key={data.id}
              className="bg-white flex flex-col p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-white flex flex-col p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={data.image}
                  />
                </a>
                <div className="mt-4 p-2">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {data.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {data.title}
                  </h2>
                  <p className="mt-1">${data.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
