import dados from './dataSite/data.json'

function App() {

  return (
    <div
      className='w-3 h-3 bg-black'>
        <h1>Exibindo dados do Json</h1>
        {
          JSON.stringify(dados, null, 2)
        }
    </div>
  )
}

export default App
