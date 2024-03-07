'use client';
import Link from 'next/link';
import { useDisclosure } from '../hooks/hooks';
import Dropdown from './Dropdown';
const Header = () => {
  // const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();
  const { isOpen: isDropdownOpen, open: openDropdown, close: closeDropdown } = useDisclosure();

  return (
    <header className='px-10 sticky z-10 top-0 bg-deepskyblue border-b border-[#333333] shadow-lg w-full flex items-center flex-row justify-between py-3'>
      <Link prefetch={false} className='font-bold' href='/'>
        PB
      </Link>
      {/* <Dropdown isOpen={isDropdownOpen} open={openDropdown} dropdownAlign='end' /> */}

      <div className='flex flex-row gap-5 items-center justify-center'>
        {/* <h1>User</h1> */}
        {/* <button onClick={() => openModal()} className='bg-rose-600 py-1.5 px-5 rounded-sm shadow-lg'>
          Edit
        </button>
        <Modal isOpen={isModalOpen} onClose={() => closeModal()} /> */}
        <Link href='/create' passHref>
          <button className='bg-black py-1.5 px-3 rounded-sm shadow-lg'>Create</button>
        </Link>
        <Dropdown onClose={closeDropdown} isOpen={isDropdownOpen} open={openDropdown} align='end' />
      </div>
    </header>
  );
};
export default Header;
