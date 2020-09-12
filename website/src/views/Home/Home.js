import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { BrowserRouter as Router} from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <NavBar />
      <ReviewCard />
    </div>
  );
}

export default Home;
