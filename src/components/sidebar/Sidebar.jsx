import React from 'react';
import styles from './Sidebar.module.css';
import { Brand } from './Brand';
import { Price } from './Price';
import { Flavor } from './Flavor';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import { useState } from 'react';
export const Sidebar = () => {
  // useState for sidebar initial state width is over 580
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 581);

  // if width goes below 581 update showSidebar state
  const toggleSidebar = () => {
    if (window.innerWidth < 581) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <>
      {/* Always use sidebar class, compine with .open class or not depending on
      showSidebar state. We use this for our toggle button icon that appears
      everytime our width is below 501 giving us the option to toggle our
      sidebar. */}
      <div className={`${styles.sidebar} ${showSidebar ? styles.open : ''}`}>
        <h2>Filter</h2>
        {/* Container containing all our category options */}
        <div className={styles.filter_container}>
          <Brand />
          <Price />
          <Flavor />
        </div>
      </div>
      {/* Toggle icon which appears everytime width goes below 501 */}
      <div className={styles.appear} onClick={toggleSidebar}>
        <BsLayoutSidebarInset className={styles.icon_color} />
      </div>
    </>
  );
};
