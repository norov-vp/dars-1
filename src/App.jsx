import './App.css'

function Tugma() {
  return (
    <button>
      salom
    </button>
  )
}

function Bos() {
  alert('bosildi')
}

function App() {

  return (
    <>
      <h1 className='sarlavha'>salom</h1>
      <Tugma></Tugma>


      <button onClick={Bos}>Boos!!!</button>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, tempora!</p>
    </>
  )
}

export default App
