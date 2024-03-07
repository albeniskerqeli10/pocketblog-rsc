'use client';
import { useEffect, useRef } from 'react';
import { DropdownItem } from './DropdownItem';

type DropdownProps = {
  buttonTitle?: string;
  isOpen: boolean;
  open: () => void;
  align?: 'start' | 'center' | 'end';
  width?: string;
  onClose: () => void;
};

const Dropdown = ({ buttonTitle = 'User', isOpen, open, align = 'start', width = '350px', onClose }: DropdownProps) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!ref) {
      return;
    }
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as HTMLBodyElement)) {
        onClose();
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  });

  return (
    <div
      style={{
        alignItems: align,
      }}
      className={`flex justify-center flex-col flex-wrap `}
    >
      <button aria-haspopup='listbox' aria-expanded={isOpen} onClick={() => open()}>
        {buttonTitle}
      </button>
      {isOpen && (
        // <div className='min-h-[100px] shadow-lg  absolute top-[70px]  w-full max-w-[200px] '>
        //   <ul className='relative  bg-black shadow-lg w-full flex justify-center item-center  flex-col  h-full   z-10 '>
        //     <li className='w-full cursor-pointer px-2 hover:bg-black height-full py-2'>Profile</li>
        //     <li className='w-full px-2 hover:bg-black height-full py-2'>Settings</li>
        //     <li className='w-full px-2 hover:bg-black height-full py-2'>Logout</li>
        //   </ul>
        // </div>
        <ul
          role='listbox'
          ref={ref}
          className={`flex-1 min-h-[100px] shadow-lg  absolute top-[70px]  w-[200px] max-w-full  bg-black shadow-lg  flex justify-center item-center  flex-col    z-10 `}
        >
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
          {/* <li role='option' tabIndex={0} className='w-full px-2 hover:bg-black height-full py-2'>
            Settings
          </li>
          <li role='option' tabIndex={0} className='w-full px-2 hover:bg-black height-full py-2'>
            Logout
          </li> */}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
