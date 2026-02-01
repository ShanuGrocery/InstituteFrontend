import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/footer/Footer'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Outlet />  {/* Pages go here */}
      <Footer />
    </div>
  )
}

export default Layout

// import React from 'react';

// const Layout = () => {
//   return (
//     <div style={styles.container}>
//       <p style={styles.text}>
//         Pending developer payment.<br />
//         Please pay the remaining amount to unlock access.
//       </p>

//       <p style={styles.text}>
//         Need help?{' '}
//         <a
//           href="https://webala.in"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={styles.link}
//         >
//           Click Here
//         </a>
//       </p>
//     </div>
//   );
// };



// const styles = {
//   container: {
//     height: '100vh',
//     backgroundColor: '#121212',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   title: {
//     color: '#ff2e2e',
//     fontSize: '3rem',
//     marginBottom: '1rem',
//   },
//   text: {
//     color: '#ff7b7b',
//     fontSize: '1.2rem',
//   },
// };

// export default Layout;



