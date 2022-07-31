import React from 'react';
import LayoutComponent from './components/LayoutComponentTwo';
// import ContextApi from './components/ContextAPI';
// import RenderProps from './components/renderProps';
// import Calculator from './components/TempConvater';
// import Clock from './components/Clock';
// import Converter from './components/TempConvater';
// import Props from './components/EventHandler';
// import Inheritance from './components/compositonVsInheritance/Inheritance';
// import Composition from './components/compositonVsInheritance/Compositon';
// import HeigherOrderComponent from './components/HigherOrderComp';
// import ThemeContext from './components/contexts/ThemeContext';


const App = () => {
  // const [theme, setTheme] = React.useState({ theme: 'dark' });
  return <>
    <LayoutComponent />
    {/* <HeigherOrderComponent /> */}
    {/* <Composition /> */}
    {/* <Inheritance /> */}
    {/* <Calculator /> */}
    {/* <Converter /> */}
    {/* <Props /> */}
    {/* <Clock /> */}
    {/* <RenderProps /> */}


  </>
}

export default App;


// <ThemeContext.Provider value={theme}>
//       <ThemeContext.Consumer>
//         {({ theme }) => <button>{theme}</button>}
//       </ThemeContext.Consumer>
//       <button onClick={() => setTheme(({ theme }) => ({ theme: theme === 'dark' ? 'light' : 'dark' }))}>Button2</button>
//     </ThemeContext.Provider>