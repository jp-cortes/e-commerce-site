import React from "react";
import Header from "@components/Header";
import FeedProducts from '@containers/FeedProducts';
import '@styles/Header.scss'
const Home = () => {
    return(
        <>
        <Header />
        <FeedProducts />
        </>
    )
}

export default Home;