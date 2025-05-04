import { useState, useEffect } from 'react';
import './App.css';
import Cards from './ComponentList/Cards';
import Bottun from './ComponentList/Bottun';
import ExtesionsList from './ComponentList/ExtensionsList';



function App() {


  return (
    <div className="bg-blue-50 dark:bg-gray-900 min-h-screen flex justify-center items-center text-black dark:text-white">
      <ExtesionsList />
    </div>

  );
}

export default App;
