import React from 'react';
import logo from './images/logo_dog_64.png';
import heroImage from './images/dog1.jpg';
import photo2 from './images/dog2.jpg';
import photo3 from './images/dog3.jpg';
import photo4 from './images/dog4.jpg';
import photo5 from './images/dog5.jpg';
import photo6 from './images/dog6.jpg';
import photo7 from './images/dog7.jpg';

const Carousel = () => {
  return (
    <div className="grid-cols-3 p-20 mt-4 bg-base-200 rounded-lg space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
      <div className="w-full rounded">
        <img src={photo2} alt="dog2" />
      </div>
      <div className="w-full col-span-2 row-span-2 rounded">
        <img src={photo3} alt="dog3" />
      </div>
      <div className="w-full rounded">
        <img src={photo4} alt="dog4" />
      </div>
      <div className="w-full rounded">
        <img src={photo5} alt="dog5" />
      </div>
      <div className="w-full rounded ">
        <img src={photo6} alt="dog6" />
      </div>
      <div className="w-full rounded">
        <img src={photo7} alt="dog7" />
      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-base-300 text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">
          Roxynho
          </span>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-1">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="container mx-auto m-4">
      <NavBar />
      <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" alt="hero" />
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              Roxynho
          </h1>
            <p className="mb-5">
              A la mémoire de Roxy.
          </p>
            <div className="shadow stats">
              <div className="stat">
                <div className="stat-value italic">21-10-21</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <footer class="p-4 mt-4 rounded-lg footer bg-base-300 text-base-content footer-center">
        <div>
          <p>Copyright © 2021 - All right reserved by Roxy</p>
        </div>
      </footer>
    </div >
  );
}

export default App;
