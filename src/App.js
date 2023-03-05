// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div style={{ height: "100vh", background: "#2d405f" }}>

//       This is example!!!!
//     </div>
//   );
// }

// export default App;
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


import React, { Component } from 'react';
import './App.css';
import ProjMenuButton from './Components/ProjMenuButton'
import ProjCatButton from './Components/ProjCatButton'
import ProjPlusButton from './Components/ProjPlusButton'

// import { Container, Header, Body, Content, Title, Text } from 'native-base';
class App extends Component {
  render() {
    return (
      <ProSidebarProvider>
        <div style={{ display: 'flex', flexDirection: 'column', height: "100vh", background: "#2d405f", borderRadius: 2, borderColor: 'white' }}>
          {/* Page head */}
          <div style={{ display: 'flex', flexDirection: 'row', height: "10vh", background: "green", alignItems: 'center', }}>
            {/* Logo */}
            <div style={{ width: 120, borderWidth: 1, paddingRight: 150 }}>
              <h1 style={{ alignSelf: 'center', color: 'white' }}>LOGO</h1>
            </div>
            {/* Menu buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', }}>
              <ProjMenuButton text="POS" />
              <ProjMenuButton text="PRODUCTS" />
              <ProjMenuButton text="TASK" />
              <ProjMenuButton text="ACCOUNTING" />
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <Sidebar style={{ height: "100vh", width: 100 }} >
              <Menu>
                <SubMenu label="Category A">
                  <MenuItem> Item1 </MenuItem>
                  <MenuItem> Item2 </MenuItem>
                </SubMenu>
                <MenuItem> Category B </MenuItem>
                <MenuItem> Category C </MenuItem>
              </Menu>
            </Sidebar>
            {/* The secsion about stay the same */}

            {/* Body secsion */}
            {/* Category Button */}
            <div style={{ display: 'flex',width:'100%', flexDirection: 'row', justifyContent:'space-between', paddingLeft:20, paddingTop:20,paddingRight:20 }}>
              <ProjCatButton text="Cat1" />
              <ProjPlusButton text="Plus"/>
            </div>
          </div>
        </div>
      </ProSidebarProvider>
    )
      ;
  } //end render
} //end App

export default App;
