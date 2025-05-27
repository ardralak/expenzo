import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.css'
import AppRoutes from './routes/AppRoutes';

function App() {
  return <AppRoutes />;
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div className="logo-container">
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1 className="expense-heading text-center">
  //       My Expense Tracker
  //     </h1>

  //     <p className="mt-5 text-white-600">
  //     Built with love using <span className="font-bold">React</span> & <span className="text-blue-600">Tailwind</span>
  //     </p>
  //     <div className="p-8 bg-white rounded shadow text-xl font-bold text-green-600">
  //       Tailwind via Vite is working! 🎉
  //     </div>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
          
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App