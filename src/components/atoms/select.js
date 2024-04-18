import React from 'react'
import * as Sel from '@radix-ui/react-select';
// import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './select.css';


const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
      <Sel.Item className='SelectItem' {...props} ref={forwardedRef}>
        <Sel.ItemText>{children}</Sel.ItemText>
        <Sel.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Sel.ItemIndicator>
      </Sel.Item>
    );
  });

  const Select = ({options}) => {

   const  choosableOptions= options.map((option)=>{
    const op = `${option}`;
    return <SelectItem value={op}>option</SelectItem>

   })

    return (
      <div>
         <Sel.Root>
      <Sel.Trigger className="inline-flex" aria-label="Food">
        <Sel.Value placeholder="Select value" />
        <Sel.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Sel.Icon>
      </Sel.Trigger>
      <Sel.Portal>
        <Sel.Content className="SelectContent">
          <Sel.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Sel.ScrollUpButton>
          <Sel.Viewport className="SelectViewport">
         
              {choosableOptions}
  
            
  
           
          </Sel.Viewport>
          <Sel.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Sel.ScrollDownButton>
        </Sel.Content>
      </Sel.Portal>
    </Sel.Root>
      </div>
    )
  }

   
 
  



export default Select