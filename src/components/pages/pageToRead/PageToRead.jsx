import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredWishlistBooks } from "../../../utility/addToLs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const PageToRead = () => {
  useEffect(()=>{
    document.title = "Book Vibe | Page To Read";
   },[])

   
  const books = useLoaderData();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlistBooks = getStoredWishlistBooks();
    const wishlist = books.filter((book) => storedWishlistBooks.includes(book.bookId));
    setWishlist(wishlist);
  }, [books]);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const data = wishlist.map((book) => ({
    title: book.bookName,
    pages: book.totalPages,
  }));

  const COLORS = data.map(
    (_, i) => `hsl(${(i * 360) / data.length}, 70%, 50%)`
  );
  return (
   <div>
    {
      wishlist.length !== 0 && 
      <div className="bg-gray-100 rounded-2xl pt-20 pb-4">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <XAxis
            dataKey="title"
            tick={{ fontSize: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="pages"
            shape={<TriangleBar />}
            isAnimationActive={true}
          >
            <LabelList
              dataKey="pages"
              position="top"
              style={{ fontWeight: "bold", fontSize: 14 }}
            />
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    }
    {
 wishlist.length === 0 && 
 <div className="my-10">
  <h1 className="text-center text-3xl font-bold mb-3">
    You Don't have any Books To Read
  </h1>
  <p className="text-center mb-4">
    <small>
      Whenever you need add books to wishlist so that you can read them anytime
    </small>
  </p>
<div className="flex justify-center mb-10">
<Link to='/'>
<button className="btn  bg-[#0EA006] hover:bg-[#0d9206] rounded-full text-white font-bold">
            Go to Home
          </button>
</Link>
</div>
</div>
}
   </div>
  );
};

export default PageToRead;
