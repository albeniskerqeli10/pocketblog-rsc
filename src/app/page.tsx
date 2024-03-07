import { pb } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';
export const dynamic = 'force-dynamic';
const getBlogs = cache(async () => {
  try {
    const blogsQuery = await pb.collection('blogs').getList(0, 30, {
      sort: '-created',
      expand: 'user',
      fields: 'id,title,image,expand.user.avatar, expand.user.username, user ',
    });
    return blogsQuery.items;
  } catch (err) {
    console.log(err);
  }
});

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className='w-full min-h-[80vh] px-10 flex items-start flex-col flex-wrap'>
      <h1 className='my-4 text-lg border-b-2 border-deepskyblue py-1'>Blogs</h1>
      <div className='w-full max-w-[500px] flex items-start justify-center flex-col flex-wrap gap-10 py-2'>
        {blogs &&
          blogs.map((blog: any) => (
            <Link prefetch={true} key={blog.id} className='w-full' href={`/blog/${blog.id}`}>
              <div className='w-full bg-neutral-900 shadow-md '>
                <Image
                  src={blog.image}
                  loading={blogs[0].id !== blog.id ? 'lazy' : 'eager'}
                  width='800'
                  height='600'
                  priority={blogs && blogs[0].id === blog.id ? true : false}
                  alt='blog image'
                  className='w-full object-center object-cover h-[250px]  border border-[#313131] drop-shadow-md'
                />
                <div className='w-full pt-3 px-2 gap-3 flex items-center justify-start'>
                  {/* <Image
                    alt='user avatar'
                    width='25'
                    priority={false}
                    height='25'
                    src={blog.expand.user.avatar}
                    className='w-[25px] h-[25px] rounded-full'
                  /> */}
                  <h4 className='text-sm'>{blog.expand.user.username}</h4>
                </div>
                <h1 className='py-4 px-2 font-bold'>{blog.title}</h1>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
