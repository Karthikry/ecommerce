import React from 'react';
import NavBar from '../NavBar';
import Announcement from '../Announcement';
import Slider from '../Slider';
import Categories from '../Categories';
import Product from '../Product';
import NewsLetter from '../NewsLetter';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
    <Announcement/>
    <NavBar/>
    <Slider/>
    <Categories/>
    <Product/>
    <NewsLetter/>
    <Footer/>
    </div>
  );
}

export default Home;
