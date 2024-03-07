import { pb } from '@/lib';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { cache } from 'react';

// const fetchSingleBlog = async (id: string) => {
//   try {
//     const res =
//       await fetch(`https://react-pocketbase-microblog.pockethost.io/api/collections/blogs/records/${id}?expand=user%2C%20comments(blog).user%2C%20tags
//     `);
//     const blog = await res.json();
//     return blog;
//   } catch (err) {
//     console.log(err, 'error');
//   }
// };

const fetchOneBlog = cache(async (id: string) => {
  try {
    const blog = await pb.collection('blogs').getOne(id, {
      expand: 'user, comments(blog)',
    });
    return blog;
  } catch {
    console.log('Blog doesnt exist');
  }
});

type Params = {
  id: string;
};

const SingleBlog = async ({ params }: { params: Params }) => {
  const blogId = params.id;

  const blog = await fetchOneBlog(blogId);

  if (!blog || !blog.id) {
    return redirect('/');
  }

  return (
    <div className='w-full min-h-[80vh] px-10 flex items-start flex-col py-4 flex-wrap gap-5'>
      <Image
        alt='blog image'
        priority={true}
        width='800'
        height='400'
        src={blog.image}
        className='w-full m-w-[100%] h-[400px] max-h-full object-center object-cover border border-neutral-700 shadow-sm overflow-hidden'
      />

      <h1 className='text-lg font-bold'>{blog.title}</h1>
      {/* <p className='leading-6'>{blog.content}</p> */}
    </div>
  );
};
export default SingleBlog;
