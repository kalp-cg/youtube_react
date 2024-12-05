import React from 'react';
import './App.css';

const Sidebar = () => {
  return (
    <>
    
    <div className="sidebar">
    <div className='logo'>
      <img style={{
        width:'35px',
        marginRight:'10px',
        marginTop:'20px',
      }} src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" />
      <img style={{
        width:'130px',

      }} src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" />
    </div>
    
      <div className="sidebar-section">
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" label="Home" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" label="Explore" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" label="Shorts" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" label="Subscriptions" />
      </div>
      <hr />
      <div className="sidebar-section">
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" label="Library" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" label="History" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" label="Your videos" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" label="Watch later" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" label="Liked videos" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" label="Show more" />
      </div>
      <hr />
      <div className="sidebar-section" id='side1'>
        <h3>SUBSCRIPTIONS</h3>
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" label="Nadir On The Go" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" label="Coke Studio Bangla" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" label="MKBHD" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" label="Figma" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" label="ATC Android ToTo" />
        <SidebarItem icon="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" label="Alux.com" />
      </div>
    </div>
    </>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="sidebar-item">
      <img src={icon} alt={label} className="icon" />
      <span>{label}</span>
    </div>
  );
};

const App2 = () => {
  return <Sidebar />;
};

export default App2;
