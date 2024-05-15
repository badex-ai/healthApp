import * as Tooltip from '@radix-ui/react-tooltip';
// import { PlusIcon } from '@radix-ui/react-icons';
import classes from './tooltip.module.css';

const TooltipComponent = ({text,comp}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {comp} 
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className= {classes.TooltipContent} sideOffset={5}>
            {text}    
            <Tooltip.Arrow className={classes.TooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComponent;


  