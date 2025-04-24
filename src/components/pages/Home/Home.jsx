import React, { useEffect } from 'react';
import Banner from '../../banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
  useEffect(() => {
    document.title = "Book Vibe | Home";
  }, []);
    const books = useLoaderData()

    return (
        <div>
          <Banner></Banner>
          <Books books={books}></Books>
        </div>
    );
};

export default Home;