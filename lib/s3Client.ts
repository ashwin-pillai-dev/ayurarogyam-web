import {S3Client} from "@aws-sdk/client-s3";

let s3Clinet: S3Client;

let accessKeyId:string = process.env.AWS_ACCESS_KEY_ID!;
let secretAccessKey:string = process.env.AWS_SECRET_ACCESS_KEY!;

s3Clinet = new S3Client({
    region: process.env.APP_AWS_REGION,
    credentials:{
        accessKeyId:accessKeyId,
        secretAccessKey:secretAccessKey,
    }
});

export default s3Clinet;