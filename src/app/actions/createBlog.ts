'use server';
import { pb } from '@/lib';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createBlogAction = async (_prevState: any, formData: FormData) => {
  'use server';
  const title = formData.get('title');
  const content = formData.get('content');
  const image = formData.get('image');

  if (title !== '' || content !== '' || image !== '') {
    const blog = await pb.collection('blogs').create({
      title: title,
      content: content,
      image: image,
      user: 'tllmd06cxzqersx',
    });

    if (blog) {
      revalidatePath('/');
      redirect('/');
    } else {
      return {
        message: 'Failed to create a blog',
      };
    }
  }

  return {
    message: 'Fill in the required fields',
  };
};
