'server-only';
import Pocketbase from 'pocketbase';
import { UploadClient } from '@uploadcare/upload-client';

const pb = new Pocketbase(process.env.POCKETBASE_URL as string);

// const db = {
//   blogs: pb.collection('blogs'),
//   users: pb.collection('users'),
// };

const cloudUpload = new UploadClient({ publicKey: '7d632b65646316bf87e8' });

export { pb, cloudUpload };
