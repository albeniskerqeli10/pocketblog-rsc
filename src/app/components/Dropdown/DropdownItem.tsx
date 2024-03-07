import { ReactNode } from 'react';

type DropdownItemProps = {
  children: ReactNode;
};

export const DropdownItem = ({ children }: DropdownItemProps) => {
  return (
    <li role='option' tabIndex={0} className='w-full cursor-pointer px-2 hover:bg-deepskyblue height-full py-2'>
      {children}
    </li>
  );
};
