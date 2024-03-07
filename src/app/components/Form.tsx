'use client';

import { useFormState } from 'react-dom';
import { createBlogAction } from '../actions/createBlog';

type InitialStateType = {
  message: string | null;
};
const initialState: InitialStateType = {
  message: null,
};

const Form = () => {
  const [state, formAction] = useFormState(createBlogAction, initialState);
  return (
    <form
      action={formAction}
      className='w-[500px] gap-6 flex items-center justify-center 
         flex-col flex-wrap'
    >
      <h1 className='text-lg font-bold'>Create a blog</h1>
      <label className='w-full flex flex-col gap-3 self-center text-sm' htmlFor='title'>
        Title
        <input
          className='w-full py-3.5 px-2 bg-neutral-900 shadow-sm'
          type='text'
          name='title'
          id=''
          placeholder='Write a title'
        />
      </label>
      <label className='w-full flex flex-col gap-3 self-center text-sm' htmlFor='content'>
        Content
        <input
          className='w-full py-3.5 px-2 bg-neutral-900 shadow-sm'
          type='text'
          name='content'
          id=''
          placeholder='Write Content'
        />
      </label>
      <label className='w-full flex flex-col gap-3 self-center text-sm' htmlFor='image'>
        Image
        <input
          className='w-full py-3.5 px-2 bg-neutral-900 shadow-sm'
          type='text'
          name='image'
          id=''
          placeholder='Image'
        />
      </label>
      <button
        type='submit'
        className='w-full py-3.5 px-2 my-1 bg-sky-500 shadow-sm hover:bg-sky-600   active:bg-sky-800'
      >
        Submit
      </button>
      {state && state.message !== null && (
        <div className='w-full bg-red-600  px-2 py-3 text-white shadow-md flex items-center justify-start flex-wrap rounded-sm'>
          {state.message}
        </div>
      )}
    </form>
  );
};

export default Form;
