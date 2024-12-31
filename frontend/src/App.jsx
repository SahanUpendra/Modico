import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <main className='min-h-screen max-w-7xl mx-auto py-10'>
      <Outlet/>
      </main>
      <Footer/>
    </>
  )

}

export default App
