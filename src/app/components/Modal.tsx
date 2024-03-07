import { KeyboardEvent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IconX } from '@tabler/icons-react';

type ModalProps = {
  isOpen: boolean;
  onClose: any;
};

// fallbackModalBorderColor:#313131

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (!modalRef.current?.contains(e?.target as HTMLBodyElement)) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent | any) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      console.log('Modal mounted');
      modalRef.current?.focus();
      document.body.addEventListener('click', handleClickOutside);
      document.body.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    isOpen &&
    createPortal(
      <div
        className='w-full h-full z-10 bg-black/60 py-3
      flex items-center px-3 lg:px-1 justify-center flex-row flex-wrap fixed top-[0] left-[0] right-[0] bottom-[0]'
      >
        <div
          ref={modalRef}
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-title'
          tabIndex={-1}
          className='w-full max-w-[448px] px-6 z-10 gap-3  bg-neutral-950 shadow-xl rounded-sm max-h-[400px] min-h-[100px] flex flex-col items-start overflow-hidden  justify-between m-auto text-white border border-[#242323]  '
        >
          <div className='w-full  py-4 flex items-center justify-between flex-row flex-wrap'>
            <h1 className='text-lg'>Modal Title</h1>
            <button onClick={onClose}>
              {' '}
              <IconX size={24} />{' '}
            </button>
          </div>
          <div className='w-full flex flex-col flex-1 overflow-y-auto gap-3  '>
            <h1>Body</h1>
          </div>
          <div className='w-full flex gap-4 flex-row items-center justify-end py-4 '>
            <button className='py-1.5 px-4 bg-[#0085FF] rounded-sm shadow-md'>Submit</button>
            <button onClick={onClose} className='py-1.5 px-4 bg-red-600 text-white rounded-sm shadow-lg'>
              Cancel
            </button>
          </div>
        </div>
      </div>,
      document.getElementById('modal') as HTMLDivElement,
    )
    //   createPortal(<>{children}</>, document.body) : null;
  );
};

export default Modal;
