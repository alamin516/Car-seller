import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import GetInTouch from '../GetInTouch/GetInTouch';
import HomeCategory from '../HomeCategory/HomeCategories';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <HomeCategory></HomeCategory>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;