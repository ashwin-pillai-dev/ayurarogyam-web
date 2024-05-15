"use strict";
exports.id = 9064;
exports.ids = [9064];
exports.modules = {

/***/ 68277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUpload: () => (/* binding */ FileUpload)
/* harmony export */ });
/* unused harmony export getImageFromBucket */
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97271);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43567);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17736);
/* harmony import */ var _lib_s3Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4834);




function getFileExtension(file) {
    // Split the name of the file by periods (.) and take the last part
    const parts = file.name.split(".");
    if (parts.length > 1) {
        return parts[parts.length - 1];
    } else {
        return ""; // No file extension found
    }
}
async function getImageFromBucket(fileKey) {
    try {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileKey
        });
        console.log("fileKey");
        console.log(fileKey);
        const responseUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 3600
        });
        console.log("response url:");
        console.log(responseUrl);
        const response = await fetch(responseUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch object: ${response.status} ${response.statusText}`);
        }
        const data = await response.text(); // Use response.text() or response.blob() depending on the content type
        // Handle or process the fetched data as needed
        console.log("Fetched object data:", data);
        console.log("Fetched object data:", data);
        return data;
    } catch (err) {
        console.error(err);
        throw Error(err.message);
    }
}
async function getSignedS3Url(file) {
    try {
        let fileKey = (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__.createId)(); // You should define the createId function
        const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__.PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: `${fileKey}.${getFileExtension(file)}`,
            ACL: "public-read"
        });
        console.log("key: " + fileKey);
        const response = await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_0__.getSignedUrl)(_lib_s3Client__WEBPACK_IMPORTED_MODULE_2__["default"], command, {
            expiresIn: 3600
        });
        return {
            url: response,
            key: `/${fileKey}.${getFileExtension(file)}`
        };
    } catch (err) {
        console.error(err);
        throw Error(err.message);
    }
}
async function uploadFileToPresignedUrl(presignedUrl, file) {
    try {
        const response = await fetch(presignedUrl, {
            method: "PUT",
            headers: {
                "Content-Type": file.type,
                "x-amz-acl": "public-read"
            },
            body: file
        });
        if (!response.ok) {
            throw new Error(`File upload failed with status: ${response.status}`);
        }
        console.log("File uploaded successfully:", response);
        return response;
    } catch (err) {
        console.error("Error uploading file:", err);
        throw Error(err.message);
    }
}
async function FileUpload(file) {
    try {
        const presignedUrlResponse = await getSignedS3Url(file);
        if (presignedUrlResponse?.url) {
            const response = await uploadFileToPresignedUrl(presignedUrlResponse.url, file);
            return presignedUrlResponse.key;
        } else {
            throw new Error("Error uploading file");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


/***/ }),

/***/ 34611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ }),

/***/ 4834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97271);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);

let s3Client;
let accessKeyId = process.env.AWS_ACCESS_KEY_ID;
let secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
console.log(process.env.APP_AWS_REGION);
s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({
    region: process.env.APP_AWS_REGION,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (s3Client);


/***/ })

};
;