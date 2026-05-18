import { useState } from 'react'
import BarraTareas from './BarraTareas' //hay que importar el nuevo componente

function App() {
  return (
    <main className="escritorio-os">
      <BarraTareas /> {/*llamo al componente como si fuera una etiqueta propia de html*/}
      
      <div style={{ padding: '20px', color: '#633c1c' }}>
        <h2>Mi portfolio</h2>
      </div>
    </main>
  )
}

export default App