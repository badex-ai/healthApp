import * as Tooltip from '@radix-ui/react-tooltip';
// import { PlusIcon } from '@radix-ui/react-icons';
// import './styles.css';

const TooltipComponent = ({children,text}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className=" tooltip select-none shadow-md rounded-xl p-1 text-2xl bg-white line-height-1" sideOffset={5}>
            {text}
            <Tooltip.Arrow className="" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComponent;


  