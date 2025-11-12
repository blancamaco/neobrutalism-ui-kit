import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button.jsx'
import { Container } from './components/container.jsx'
import { Checkbox } from './components/checkbox.jsx'
import { Toggle } from './components/toggle.jsx'
import { Input } from './components/input.jsx'
import { Dropdown } from './components/dropdown.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
        <div className="w-full flex justify-center mb-21 ">
          <div className="bg-white z-10 w-fit py-5 px-7 border-4 border-black shadow-[8px_8px_0_0_theme('colors.primary.1')] ">
            <p className='font-black text-7xl mb-2'>Neobrutalist UI Kit</p>
            <p>by blancamaco ♥</p>
          </div>
          
        </div>




      <div className="w-full flex justify-left mb-4 mt-21">
        <h1>Colors</h1>
      </div>

      <Container>
        <div className='w-full grid grid-cols-3 gap-10 m-8'>
          <Container direction='col'>
            <div className='h-30 w-full p-0 bg-primary-1 border-4 mb-4'>
            </div>
            <h3>Primary color</h3>
            <h4>#6F00FF</h4>
          </Container>

          <Container direction='col'>
            <div className='h-30 w-full p-0 bg-secondary-1 border-4 mb-4'>
            </div>
            <h3>Secondary color</h3>
            <h4>#FF9BFF</h4>
          </Container>

          <Container direction='col'>
            <div className='h-30 w-full p-0 bg-tertiary-1 border-4 mb-4'>
            </div>
            <h3>Tertiary color</h3>
            <h4>#39BEAB</h4>
          </Container>
        </div>
      </Container>


      {/* BUTTONS */}


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


      {/* CHECKBOXES */}

      <div className="w-full flex justify-left mb-4 mt-21">
        <h1>Selectors</h1>
      </div>

      <Container>

      <div className="grid grid-cols-6 gap-8 gap-x-14 m-4 w-full">
  
          {/* Columna de encabezados */}
          <div className="flex flex-col gap-9 items-end px-4">
            <h2 className=' py-2 invisible'>Label</h2>
            <h2 className=' py-2'>Checkbox</h2>
            <h2 className=' py-2'>Radio</h2>
            <h2 className=' py-2'>Toggle</h2>
          </div>

          {/* Columna Default */}
          <div className="flex flex-col gap-12">
            <h3 className='text-left py-2'>Default</h3>
            <Checkbox type="checkbox" id="checkbox1">Option</Checkbox>
            <Checkbox type="radio" id="radio1">Radio Label</Checkbox>
            <Toggle id="toggle1">Toggle Label</Toggle>
          </div>

          {/* Columna Hover */}
          <div className="flex flex-col gap-12">
            <h3 className='text-left py-2'>Hover</h3>
            <Checkbox type="checkbox" id="checkbox0" hover={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio0" hover={true}>Option</Checkbox>
            <Toggle id="toggle0" hover={true}>Toggle Label</Toggle>
          </div>

          {/* Columna Selected */}
          <div className="flex flex-col gap-12">
            <h3 className='text-left py-2'>Selected</h3>
            <Checkbox type="checkbox" id="checkbox2" selected={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio2" selected={true}>Option</Checkbox>
            <Toggle id="toggle2" selected={true}>Toggle Label</Toggle>
          </div>

          {/* Columna Disabled */}
          <div className="flex flex-col gap-12">
            <h3 className='text-left py-2'>Disabled</h3>
            <Checkbox type="checkbox" id="checkbox3" selected={true} disabled={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio3" selected={true} disabled={true}>Option</Checkbox>
            <Toggle id="toggle3" selected={true} disabled={true}>Toggle Label</Toggle>
          </div>

          {/* Columna Focus */}
          <div className="flex flex-col gap-12">
            <h3 className='text-left py-2'>Focus</h3>
            <Checkbox type="checkbox" id="checkbox4" selected={true} focus={true}>Option</Checkbox>
            <Checkbox type="radio" id="radio4" selected={true} focus={true}>Option</Checkbox>
            <Toggle id="toggle4" selected={true} focus={true}>Toggle Label</Toggle>
          </div>

        </div>
      </Container>

      {/* INPUTS */}


      <div className="w-full flex justify-left mb-4 mt-21">
        <h1>Input field</h1>
      </div>

      <Container >
        
        
        <div className="grid grid-cols-4 grid-rows-[fit_fit]  max-w-fit items-start gap-x-10 gap-y-8 m-4">

          <h3 className='text-left'>Default</h3>
          <h3 className='text-left'>Hover</h3>
          <h3 className='text-left'>Disabled</h3>
          <h3 className='text-left'>Focus</h3>

          
          <Input type="text" id="input1" placeholder="Enter text here" />
          <Input type="text" id="input1" hover={true} placeholder="Enter text here" />
          <Input type="text" id="input1" disabled={true} placeholder="Enter text here" />
          <Input type="text" id="input1" focus={true} placeholder="Enter text here" />

          <Input type="text" id="input1" icon={true} placeholder="Enter text here"> 
            <i class="fa fa-search"></i>
          </Input>
          <Input type="text" id="input1" icon={true} hover={true} placeholder="Enter text here"> 
            <i class="fa fa-search"></i>
          </Input>
          <Input type="text" id="input1" icon={true} disabled={true} placeholder="Enter text here"> 
            <i class="fa fa-search"></i>
          </Input>
          <Input type="text" id="input1" icon={true} focus={true} placeholder="Enter text here"> 
            <i class="fa fa-search"></i>
          </Input>

          
        </div>

      </Container>


      <div className="w-full flex justify-left mb-4 mt-21">
        <h1>Dropdown</h1>
      </div>

      <Container>
        <div className="grid grid-cols-4 grid-rows-[fit_fit] max-w-fit items-start justify-center gap-x-10 gap-y-8 m-4">

          <h3 className='text-left'>Default</h3>
          <h3 className='text-left'>Hover</h3>
          <h3 className='text-left'>Open</h3>
          <h3 className='text-left'>Item hovered</h3>

          <Dropdown />
          <Dropdown hover="true"/>
          <Dropdown defaultHidden='false'/>
          <Dropdown defaultHidden='false' itemHover='true'/>
        </div>


      </Container>

      <div className='p-15'></div>
    </>
  )
}

export default App
