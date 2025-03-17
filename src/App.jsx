import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="flex space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mt-6">Vite + React</h1>
      <div className="bg-red-700 p-6 rounded-lg shadow-md mt-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-pink-500 text-blue-300 rounded-lg hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-pink-500 text-blue-300 rounded-lg hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
        <p className="mt-3 text-gray-600">
          Edit <code className="bg-pink-200 px-1 rounded">src/App.jsx</code> and save to test HMRsadsad
        </p>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}


export default App
