import React from 'react';
import CategoryList from './components/CategoryList';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">Webshop</h1>
      <Header/>
      <CategoryList />

    </div>
  );
};

export default App;
