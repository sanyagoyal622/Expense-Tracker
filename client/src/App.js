import React from 'react';
import {IncomeExpenses} from './components/IncomeExpenses';
import {Balance} from './components/Balance';
import {Header} from './components/header';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      
      
     <Header />
     <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
