import { extendType, objectType } from 'nexus';
import {PutObjectCommand} from   "@aws-sdk/client-s3";
import { createId } from '@paralleldrive/cuid2';
import s3Client from '@/lib/s3Client';
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";



export const ImageObjectType = objectType({
  name: 'Image',
  definition(t) {
    t.nullable.string('url');
  },
});


export const S3PresignedUrl  = extendType({
  type: 'Query',
  definition(t) {
      t.nonNull.field('getPreSignedUrl', {
        args: {
          file: 'File',
        },
          type: 'String',
          async resolve(_parent, {file}, ctx) {

            let fileKey = createId()

                const command = new PutObjectCommand({
                  Bucket: process.env.AWS_S3_BUCKET_NAME,
                  Key: `${fileKey}.${file.ext}`,
                });

                console.log("key: " + fileKey);
                

                try {
                  const response = await getSignedUrl(s3Client, command, {expiresIn: 3600});
                  console.log(response);
                  return response;
                } catch (err:any) {
                  console.error(err);
                  throw Error(err.message)
                }

          }
      })
  }
})



// export const Mutation = objectType({
//   name: 'Mutation',
//   definition(t) {
//     t.field('uploadFile', {
//       type: 'Image',
//       args: {
//         file: 'Upload',
//       },
//       resolve: async (_, { file }) => {
//         console.log(file);

//         const s3 = new S3Client({ region: process.env.APP_AWS_REGION });
//         const params = {
//           Bucket: process.env.AWS_S3_BUCKET_NAME,
//           Key: `${Date.now()}_${file}`,
//           Body: Buffer.from(file, 'base64'),
//           ACL: 'public-read', 
//         };
//  try {
//          const data = await  new Upload({
//            client: s3,
//            params
//          }).done();

//          return {
//           url:''
//          };
//  } catch (error) {        
//     console.error('Error uploading image:', error);
//     throw new Error('Error uploading image');
  
//  }
//         // const { Location } = await s3.upload(params).promise();


//         console.log(params);
        

//         // try {
//         //   const { Location } = await s3.upload(params).promise();
//         //   return { url: 'demo' };
//         // } catch (error) {
//         //   console.error('Error uploading image:', error);
//         //   throw new Error('Error uploading image');
//         // }
//       },
//     });
//   },
// });



// import { objectType, mutationType, stringArg } from 'nexus';
// import AWS from 'aws-sdk';

// export const ImageObjectType = objectType({
//   name: 'Image',
//   definition(t) {
//     t.nullable.string('url');
//   },
// });

// export const Mutation = mutationType({
//   definition(t) {
//     t.field('uploadImage', {
//       type: ImageObjectType,
//       args: {
//         file: stringArg(),
//       },
//       resolve: async (_, { file}) => {
//         console.log(file);
        
//         const s3 = new AWS.S3();
//         console.log('bofore params');
        
//         const params = {
//           Bucket: 'YOUR_BUCKET_NAME',
//           Key: `uploads/${Date.now()}_${file}`,
//           Body: Buffer.from("VHV0b3JpYWxzUG9pbnQ=", 'base64'),
//           ACL: 'public-read', 
//         };

//         console.log(params);
        

//         try {
//           const { Location } = await s3.upload(params).promise();
//           return { url: Location };
//         } catch (error) {
//           console.error('Error uploading image:', error);
//           throw new Error('Error uploading image');
//         }
//       },
//     });
//   },
// });


