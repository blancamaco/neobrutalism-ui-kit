import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button.jsx'
import { Container } from './components/container.jsx'
import { Checkbox } from './components/checkbox.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="w-full flex justify-left mb-8">
        <h2>Checkboxes</h2>
      </div>
      <Container>
        <div className="flex flex-col max-w-fit items-start gap-8 m-4 ">
          <h2 className='px-4 py-2'> </h2>
          <h2 className='px-4 py-2'>Checkbox</h2>
          <h2 className='px-4 py-2'>Radio</h2>
        </div>

        <div className="flex flex-col max-w-fit items-start gap-8 m-4">
          <h3 className=' text-left'>Default</h3>
          <Checkbox type="checkbox" id="checkbox1">Checkbox Label</Checkbox>
          <Checkbox type="radio" id="radio1">Radio Label</Checkbox>
        </div>

        <div className="flex flex-col max-w-fit items-start gap-8 m-4">
          <h3 className=' text-left'>Selected</h3>
          <Checkbox type="checkbox" id="checkbox2" selected={true}>Checkbox Label</Checkbox>
          <Checkbox type="radio" id="radio2" selected={true}>Radio Label</Checkbox>
        </div>

      </Container>


      <div className="w-full flex justify-left mb-8">
        <h2>Buttons</h2>
      </div>
      <Container>
          <div className="flex flex-col max-w-fit items-start gap-15 m-4 ">
            <h2 className='px-4 py-2'> </h2>
            <h2 className='px-4 py-2'>Primary</h2>
            <h2 className='px-4 py-2'>Secondary</h2>
            <h2 className='px-4 py-2'>Tertiary</h2>
          </div>

          <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>Default</h3>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
          </div>


        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>Hover</h3>
          <Button variant="primary" hover="true">Primary Button</Button>
          <Button variant="secondary" hover="true">Secondary Button</Button>
          <Button variant="tertiary" hover="true">Tertiary Button</Button>
        </div>


        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
        <h3 className=' text-left'>Disabled</h3>
          <Button variant="primary" disabled="true">Primary Button</Button>
          <Button variant="secondary" disabled="true">Secondary Button</Button>
          <Button variant="tertiary" disabled="true">Tertiary Button</Button>
        </div>


        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>Active</h3>
          <Button variant="primary" active="true">Primary Button</Button>
          <Button variant="secondary" active="true">Secondary Button</Button>
          <Button variant="tertiary" active="true">Tertiary Button</Button>
        </div>
        



        <div className="flex flex-col max-w-fit items-start gap-15 m-4">
          <h3 className=' text-left'>With icon</h3>
          <Button variant="primary" icon="true">
            <i class="fa-solid fa-star"></i>
            Primary Button</Button>
          <Button variant="secondary" icon="true">
            <i class="fa-solid fa-star"></i>
            Secondary Button</Button>
          <Button variant="tertiary" icon="true">
            <i class="fa-solid fa-star"></i>
            Tertiary Button</Button>
        </div>
      </Container>
    </>
  )
}

export default App
