import dados from './dataSite/data.json'

function App() {

  return (
    <div
      className='w-full h-full bg-black'>
        <h1>Exibindo dados do Json</h1>
        {
          JSON.stringify(dados, null, 2)
        }
        <img src='fotos/qrcode.png' />
    </div>
  )
}

export default App
