import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button.jsx'
import { Container } from './components/container.jsx'
import { Checkbox } from './components/checkbox.jsx'
import { Toggle } from './components/toggle.jsx'
import { Input } from './components/input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="w-full flex justify-left mb-4 mt-21">
        <h1>Selectors</h1>
      </div>
      

      <Container>

      <div className="grid grid-cols-6 gap-8 m-4 w-full">
  
          {/* Columna de encabezados */}
          <div className="flex flex-col gap-4 items-end px-4">
            <h2 className=' py-2 invisible'>Label</h2>
            <h2 className=' py-2'>Checkbox</h2>
            <h2 className=' py-2'>Radio</h2>
            <h2 className=' py-2'>Toggle</h2>
          </div>

          {/* Columna Default */}
          <div className="flex flex-col gap-8">
            <h3 className='text-left py-2'>Default</h3>
            <Checkbox type="checkbox" id="checkbox1">Option</Checkbox>
            <Checkbox type="radio" id="radio1">Radio Label</Checkbox>
            <Toggle id="toggle1">Toggle Label</Toggle>
          </div>

          {/* Columna Hover */}
          <div className="flex flex-col gap-8">
            <h3 className='text-left py-2'>Hover</h3>
            <Checkbox type="checkbox" id="checkbox0" hover={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio0" hover={true}>Option</Checkbox>
            <Toggle id="toggle0" hover={true}>Toggle Label</Toggle>
          </div>

          {/* Columna Selected */}
          <div className="flex flex-col gap-8">
            <h3 className='text-left py-2'>Selected</h3>
            <Checkbox type="checkbox" id="checkbox2" selected={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio2" selected={true}>Option</Checkbox>
            <Toggle id="toggle2" selected={true}>Toggle Label</Toggle>
          </div>

          {/* Columna Disabled */}
          <div className="flex flex-col gap-8">
            <h3 className='text-left py-2'>Disabled</h3>
            <Checkbox type="checkbox" id="checkbox3" selected={true} disabled={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio3" selected={true} disabled={true}>Option</Checkbox>
            <Toggle id="toggle3" selected={true} disabled={true}>Toggle Label</Toggle>
          </div>

          {/* Columna Focus */}
          <div className="flex flex-col gap-8">
            <h3 className='text-left py-2'>Focus</h3>
            <Checkbox type="checkbox" id="checkbox4" selected={true} focus={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio4" selected={true} focus={true}>Option</Checkbox>
            <Toggle id="toggle4" selected={true} focus={true}>Toggle Label</Toggle>
          </div>

        </div>
      </Container>


      <div className="w-full flex justify-left mb-4 mt-21">
        <h1>Buttons</h1>
      </div>

      <Container>
        <div className="grid grid-cols-6 gap-6 m-4 w-full">
          <div className="flex flex-col gap-15 items-end px-4">
            <h2 className='py-2 invisible'>Label</h2>
            <h2 className=' py-2'>Primary</h2>
            <h2 className=' py-2'>Secondary</h2>
            <h2 className=' py-2'>Tertiary</h2>
          </div>

          <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>Default</h3>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>


        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>Hover</h3>
          <Button variant="primary" hover="true">Primary</Button>
          <Button variant="secondary" hover="true">Secondary</Button>
          <Button variant="tertiary" hover="true">Tertiary</Button>
        </div>


        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
        <h3 className=' text-left'>Disabled</h3>
          <Button variant="primary" disabled="true">Primary</Button>
          <Button variant="secondary" disabled="true">Secondary</Button>
          <Button variant="tertiary" disabled="true">Tertiary</Button>
        </div>


        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>Active</h3>
          <Button variant="primary" active="true">Primary</Button>
          <Button variant="secondary" active="true">Secondary</Button>
          <Button variant="tertiary" active="true">Tertiary</Button>
        </div>
        



        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>With icon</h3>
          <Button variant="primary" icon="true">
            <i class="fa-solid fa-star"></i>
            Primary</Button>
          <Button variant="secondary" icon="true">
            <i class="fa-solid fa-star"></i>
            Secondary</Button>
          <Button variant="tertiary" icon="true">
            <i class="fa-solid fa-star"></i>
            Tertiary</Button>
        </div>
      </div>
          
      </Container>


      <div className="w-full flex justify-left mb-4 mt-21">
        <h1>Input field</h1>
      </div>
      <Container >
        
        
        <div className="grid grid-cols-5 grid-rows-2 max-w-fit items-start gap-x-10 gap-y-5 m-4">

          <h3 className='text-left'>Default</h3>
          <h3 className='text-left'>Hover</h3>
          <h3 className='text-left'>Disabled</h3>
          <h3 className='text-left'>Active</h3>
          <h3 className='text-left'>Focus</h3>

          
          <Input type="text" id="input1" placeholder="Enter text here" />
          <Input type="text" id="input1" hover={true} placeholder="Enter text here" />
          <Input type="text" id="input1" disabled={true} placeholder="Enter text here" />
          <Input type="text" id="input1" active={true} placeholder="Enter text here" />
          <Input type="text" id="input1" focus={true} placeholder="Enter text here" />

          {/* <Input type="text" id="input1" focus={true} placeholder="Enter text here"> 
          </Input>
           */}
        </div>

      </Container>
    </>
  )
}

export default App
