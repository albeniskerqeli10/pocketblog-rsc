'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FileInput = async () => {
  const [file, setFile] = useState('');
  const router = useRouter();
  return (
    <input
      className='w-full py-3 px-2 bg-neutral-900 shadow-sm'
      type='file'
      value={file}
      onChange={(e) => {
        setFile(e.target.value);
        router.push(`URL?query=${file[0]}`);
      }}
      name='file'
      placeholder='Submit an image'
    />
  );
};

export default FileInput;
