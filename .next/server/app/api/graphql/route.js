(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 59388:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 59388;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 53524:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 85158:
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 6005:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 73857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./graphql/types/index.ts
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, {
  AdminInput: () => (AdminInput),
  AdminLoginResponse: () => (AdminLoginResponse),
  AdminMutation: () => (AdminMutation),
  AdminRole: () => (AdminRole),
  AdminRoleQueryQuery: () => (AdminRoleQueryQuery),
  AdminRolesMutation: () => (AdminRolesMutation),
  Admins: () => (Admins),
  Categories: () => (Categories),
  File: () => (File),
  GQLDate: () => (GQLDate),
  GQLDateTime: () => (GQLDateTime),
  GQLTime: () => (GQLTime),
  ImageObjectType: () => (ImageObjectType),
  Query: () => (Query),
  S3PresignedUrl: () => (S3PresignedUrl),
  Upload: () => (Upload),
  User: () => (User),
  categoriesQuery: () => (categoriesQuery),
  userQuery: () => (userQuery)
});

// NAMESPACE OBJECT: ./app/api/graphql/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/@as-integrations/next/dist/index.js
var dist = __webpack_require__(99352);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/index.js + 59 modules
var esm = __webpack_require__(1432);
// EXTERNAL MODULE: ./lib/prisma.ts
var prisma = __webpack_require__(94734);
;// CONCATENATED MODULE: ./graphql/context.ts

async function createContext(req, res) {
    const headersMap = req.headers;
    const bearerToken = headersMap.get("authorization") ?? "";
    const token = bearerToken.split(" ")[1];
    // console.log(token);
    // let admin = null
    // if (token !== '') {
    //     const decodedToken = await jwt.verify(token, process.env.NEXTAUTH_SECRET);
    //     if (decodedToken || decodedToken.adminId) {
    //         admin = await prisma.admin.findUnique({
    //             where: { id: decodedToken.adminId },
    //         });
    //     }
    // }
    return {
        prisma: prisma/* default */.Z,
        token
    };
}

// EXTERNAL MODULE: ./node_modules/nexus/dist/index.js
var nexus_dist = __webpack_require__(7525);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
;// CONCATENATED MODULE: ./graphql/types/user.ts

const User = (0,nexus_dist.objectType)({
    name: "User",
    definition (t) {
        t.nonNull.string("id");
        t.nonNull.string("email");
    // t.nonNull.string('createdAt');
    // t.nonNull.string('updatedAt');
    }
});
const userQuery = (0,nexus_dist.extendType)({
    type: "Query",
    definition (t) {
        t.nonNull.list.nonNull.field("users", {
            type: "User",
            async resolve (_parent, _args, ctx) {
                try {
                    console.log("Resolver executed");
                    const users = await ctx.prisma.user.findMany();
                    console.log(users); // Log the result
                    return users;
                } catch (error) {
                    console.error("Error in resolver:", error);
                    throw error;
                }
            }
        });
    }
});

;// CONCATENATED MODULE: ./graphql/types/categories.ts

const Categories = (0,nexus_dist.objectType)({
    name: "Categories",
    definition (t) {
        t.nonNull.string("name");
        t.nonNull.string("image");
    }
});
const categoriesQuery = (0,nexus_dist.extendType)({
    type: "Query",
    definition (t) {
        t.nonNull.list.nonNull.field("categories", {
            type: "Categories",
            async resolve (_parent, _args, ctx) {
                try {
                    const categories = ctx.prisma.category.findMany();
                    return categories;
                } catch (error) {
                    console.error("Error in resolver:", error);
                    throw error;
                }
            }
        });
    }
});

// EXTERNAL MODULE: ./node_modules/@aws-sdk/client-s3/dist-cjs/index.js
var dist_cjs = __webpack_require__(11332);
// EXTERNAL MODULE: ./node_modules/@paralleldrive/cuid2/index.js
var cuid2 = __webpack_require__(33399);
// EXTERNAL MODULE: ./lib/s3Client.ts
var s3Client = __webpack_require__(80400);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/s3-request-presigner/dist-cjs/index.js
var s3_request_presigner_dist_cjs = __webpack_require__(45066);
;// CONCATENATED MODULE: ./graphql/types/imageUpload.ts





const ImageObjectType = (0,nexus_dist.objectType)({
    name: "Image",
    definition (t) {
        t.nullable.string("url");
    }
});
const S3PresignedUrl = (0,nexus_dist.extendType)({
    type: "Query",
    definition (t) {
        t.nonNull.field("getPreSignedUrl", {
            args: {
                file: "File"
            },
            type: "String",
            async resolve (_parent, { file }, ctx) {
                let fileKey = (0,cuid2/* createId */.Mc)();
                const command = new dist_cjs.PutObjectCommand({
                    Bucket: process.env.AWS_S3_BUCKET_NAME,
                    Key: `${fileKey}.${file.ext}`
                });
                console.log("key: " + fileKey);
                try {
                    const response = await (0,s3_request_presigner_dist_cjs.getSignedUrl)(s3Client/* default */.Z, command, {
                        expiresIn: 3600
                    });
                    console.log(response);
                    return response;
                } catch (err) {
                    console.error(err);
                    throw Error(err.message);
                }
            }
        });
    }
}) // export const Mutation = objectType({
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
;

// EXTERNAL MODULE: ./node_modules/graphql-upload/GraphQLUpload.mjs + 1 modules
var GraphQLUpload = __webpack_require__(32627);
;// CONCATENATED MODULE: ./graphql/types/scalar.ts


// export const Upload = GraphQLUpload
const Upload = (0,nexus_dist.scalarType)({
    name: "Upload",
    asNexusMethod: "upload",
    description: "A file upload",
    parseValue (value) {
        return GraphQLUpload/* default */.Z.parseValue(value);
    },
    serialize (value) {
        return GraphQLUpload/* default */.Z.serialize(value);
    },
    parseLiteral (ast) {
        return GraphQLUpload/* default */.Z.parseLiteral(ast);
    }
});
//////
const File = (0,nexus_dist.scalarType)({
    name: "File",
    asNexusMethod: "file",
    description: "A custom scalar type for file information",
    serialize (value) {
        // Implement the serialization logic here
        return value; // For simplicity, just return the value as is
    },
    parseValue (value) {
        // Implement the parseValue logic here
        return value; // For simplicity, just return the value as is
    }
}); // Export the scalar type as a Nexus method

// EXTERNAL MODULE: ./node_modules/graphql-scalars/esm/scalars/iso-date/Date.js
var iso_date_Date = __webpack_require__(60273);
// EXTERNAL MODULE: ./node_modules/graphql-scalars/esm/scalars/iso-date/Time.js
var Time = __webpack_require__(67378);
// EXTERNAL MODULE: ./node_modules/graphql-scalars/esm/scalars/iso-date/DateTime.js
var DateTime = __webpack_require__(20117);
;// CONCATENATED MODULE: ./graphql/types/dateTime.ts


const GQLDate = (0,nexus_dist.asNexusMethod)(iso_date_Date/* GraphQLDate */.z, "date");
const GQLTime = (0,nexus_dist.asNexusMethod)(Time/* GraphQLTime */.j, "time");
const GQLDateTime = (0,nexus_dist.asNexusMethod)(DateTime/* GraphQLDateTime */.Y, "dateTime");

// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(12305);
var bcryptjs_default = /*#__PURE__*/__webpack_require__.n(bcryptjs);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(39518);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
;// CONCATENATED MODULE: ./graphql/util.ts

const verifyToken = async (token, ctx)=>{
    try {
        const decodedToken = jsonwebtoken_default().verify(token, process.env.NEXTAUTH_SECRET);
        if (!decodedToken || !decodedToken.adminId) {
            throw new Error("Invalid token.");
        }
        return true;
    // const admin = await ctx.prisma.admin.findUnique({
    //     where: { id: decodedToken.adminId },
    // });
    // if (!admin) {
    //     throw new Error('Admin not found.');
    // }
    // return admin;
    } catch (error) {
        // console.error('Invalid or expired token:', error);
        throw new Error("Invalid or expired token");
    }
};

;// CONCATENATED MODULE: ./graphql/types/admin.ts




//Admin Object Type
const Admins = (0,nexus_dist.objectType)({
    name: "Admin",
    definition (t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nullable.string("profile");
        t.nonNull.boolean("enabled");
        t.nonNull.boolean("deleted");
        t.nonNull.string("password");
        t.int("adminRoleId");
        // t.dateTime('createdAt');
        // t.dateTime('updatedAt');
        t.field("role", {
            type: "AdminRole"
        });
    }
});
// Input type for creating or updating an admin
const AdminInput = (0,nexus_dist.inputObjectType)({
    name: "AdminInput",
    definition (t) {
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nullable.string("profile");
        t.nonNull.string("password");
        t.nonNull.int("adminRoleId");
    }
});
//Admin Response for token mutation
const AdminLoginResponse = (0,nexus_dist.objectType)({
    name: "AdminLoginResponse",
    definition (t) {
        t.string("token");
    }
});
//Queries
const Query = (0,nexus_dist.extendType)({
    type: "Query",
    definition (t) {
        t.nonNull.list.nonNull.field("admins", {
            type: "Admin",
            resolve: async (_parent, _args, ctx)=>{
                try {
                    // Verify the token
                    // await verifyToken(ctx.token, ctx);
                    try {
                        const admins = await ctx.prisma.admin.findMany({
                            include: {
                                role: true
                            }
                        });
                        return admins;
                    } catch (error) {
                        throw new Error("Unable to fetch admins");
                    }
                } catch (error) {
                    throw new Error("Token verification failed");
                }
            }
        });
        t.field("adminById", {
            type: "Admin",
            args: {
                id: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)())
            },
            resolve: async (_parent, { id }, ctx)=>{
                try {
                    await verifyToken(ctx.token, ctx);
                    const admin = await ctx.prisma.admin.findUnique({
                        include: {
                            role: true
                        },
                        where: {
                            id
                        }
                    });
                    if (!admin) {
                        throw new Error(`Admin with ID ${id} not found.`);
                    }
                    return admin;
                } catch (error) {
                    console.error("Error in resolver:", error);
                    throw error;
                }
            }
        });
    // You can add more admin-related queries here as needed
    }
});
const AdminMutation = (0,nexus_dist.extendType)({
    type: "Mutation",
    definition (t) {
        // Create Admin
        t.field("createAdmin", {
            type: "Admin",
            args: {
                input: (0,nexus_dist.nonNull)("AdminInput")
            },
            resolve: async (_, { input }, ctx)=>{
                try {
                    const { password, ...rest } = input;
                    const hashedPassword = await bcryptjs_default().hash(password, 10);
                    const admin = await ctx.prisma.admin.create({
                        data: {
                            ...rest,
                            password: hashedPassword
                        },
                        include: {
                            role: true
                        }
                    });
                    return admin;
                } catch (error) {
                    console.error("Error in createAdmin resolver:", error);
                    throw error;
                }
            }
        });
        //Update admin
        t.field("updateAdmin", {
            type: "Admin",
            args: {
                id: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)()),
                input: (0,nexus_dist.nonNull)("AdminInput")
            },
            resolve: async (_, { id, input }, ctx)=>{
                try {
                    // const inputdata: any = input
                    const admin = await ctx.prisma.admin.update({
                        where: {
                            id
                        },
                        data: input
                    });
                    return admin;
                } catch (error) {
                    console.error("Error in updateAdmin resolver:", error);
                    throw error;
                }
            }
        });
        // Delete Admin
        t.field("deleteAdmin", {
            type: "Admin",
            args: {
                id: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)())
            },
            resolve: async (_, { id }, ctx)=>{
                try {
                    const admin = await ctx.prisma.admin.delete({
                        where: {
                            id
                        }
                    });
                    return admin;
                } catch (error) {
                    console.error("Error in deleteAdmin resolver:", error);
                    throw error;
                }
            }
        });
        // Login admin
        t.field("loginAdmin", {
            type: "AdminLoginResponse",
            args: {
                email: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)()),
                password: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)())
            },
            resolve: async (_, { email, password }, ctx)=>{
                try {
                    const admin = await ctx.prisma.admin.findUnique({
                        where: {
                            email
                        }
                    });
                    if (!admin) {
                        throw new Error("Admin not found.");
                    }
                    const passwordMatch = await bcryptjs_default().compare(password, admin.password);
                    if (!passwordMatch) {
                        throw new Error("Invalid password.");
                    }
                    const token = jsonwebtoken_default().sign({
                        adminId: admin.id
                    }, process.env.NEXTAUTH_SECRET, {
                        expiresIn: "7 days"
                    });
                    return {
                        token
                    };
                } catch (error) {
                    throw new Error("Login failed:" + error.message);
                }
            }
        });
        // Verify Admin
        t.field("verifyAdmin", {
            type: "Admin",
            args: {
                token: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)())
            },
            resolve: async (_, { token }, ctx)=>{
                try {
                    const decodedToken = jsonwebtoken_default().verify(token, process.env.NEXTAUTH_SECRET);
                    if (!decodedToken || !decodedToken.adminId) {
                        throw new Error("Invalid token.");
                    }
                    const admin = await ctx.prisma.admin.findUnique({
                        where: {
                            id: decodedToken.adminId
                        }
                    });
                    if (!admin) {
                        throw new Error("Admin not found.");
                    }
                    return admin;
                } catch (error) {
                    console.error("Error in verifyAdmin resolver:", error);
                    throw error;
                }
            }
        });
    }
});

;// CONCATENATED MODULE: ./graphql/types/adminRole.ts

const AdminRole = (0,nexus_dist.objectType)({
    name: "AdminRole",
    definition (t) {
        t.int("id");
        t.string("roleName");
    // t.dateTime('createdAt');
    // t.dateTime('updatedAt');
    }
});
const AdminRoleQueryQuery = (0,nexus_dist.extendType)({
    type: "Query",
    definition (t) {
        t.nonNull.list.nonNull.field("adminRoles", {
            type: "AdminRole",
            resolve: async (_parent, _args, ctx)=>{
                try {
                    const adminRoles = await ctx.prisma.adminRole.findMany();
                    return adminRoles;
                } catch (error) {
                    console.error("Error in resolver:", error);
                    throw error;
                }
            }
        });
        t.field("adminRoleById", {
            type: "AdminRole",
            args: {
                id: (0,nexus_dist.nonNull)((0,nexus_dist.intArg)())
            },
            resolve: async (_parent, { id }, ctx)=>{
                try {
                    const adminRole = await ctx.prisma.adminRole.findUnique({
                        where: {
                            id: Number(id)
                        }
                    });
                    if (!adminRole) {
                        throw new Error(`Admin Role with ID ${id} not found.`);
                    }
                    return adminRole;
                } catch (error) {
                    console.error("Error in resolver:", error);
                    throw error;
                }
            }
        });
    // You can add more admin-related queries here as needed
    }
});
const AdminRolesMutation = (0,nexus_dist.extendType)({
    type: "Mutation",
    definition (t) {
        // Create AdminRole
        t.field("createAdminRole", {
            type: "AdminRole",
            args: {
                roleName: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)())
            },
            resolve: async (_, { roleName }, ctx)=>{
                try {
                    const adminRole = await ctx.prisma.adminRole.create({
                        data: {
                            roleName
                        }
                    });
                    return adminRole;
                } catch (error) {
                    console.error("Error in createAdminRole resolver:", error);
                    throw error;
                }
            }
        });
        // Update AdminRole
        t.field("updateAdminRole", {
            type: "AdminRole",
            args: {
                id: (0,nexus_dist.nonNull)((0,nexus_dist.intArg)()),
                roleName: (0,nexus_dist.nonNull)((0,nexus_dist.stringArg)())
            },
            resolve: async (_, { id, roleName }, ctx)=>{
                try {
                    const adminRole = await ctx.prisma.adminRole.update({
                        where: {
                            id
                        },
                        data: {
                            roleName
                        }
                    });
                    return adminRole;
                } catch (error) {
                    console.error("Error in updateAdminRole resolver:", error);
                    throw error;
                }
            }
        });
        // Delete AdminRole
        t.field("deleteAdminRole", {
            type: "AdminRole",
            args: {
                id: (0,nexus_dist.nonNull)((0,nexus_dist.intArg)())
            },
            resolve: async (_, { id }, ctx)=>{
                try {
                    const adminRole = await ctx.prisma.adminRole.delete({
                        where: {
                            id
                        }
                    });
                    return adminRole;
                } catch (error) {
                    console.error("Error in deleteAdminRole resolver:", error);
                    throw error;
                }
            }
        });
    }
});

;// CONCATENATED MODULE: ./graphql/types/index.ts








;// CONCATENATED MODULE: ./graphql/schema.ts



const schema = (0,nexus_dist.makeSchema)({
    types: types_namespaceObject,
    outputs: {
        typegen: (0,external_path_.join)(process.cwd(), "node_modules", "@types", "nexus-typegen", "index.d.ts"),
        schema: (0,external_path_.join)(process.cwd(), "graphql", "schema.graphql")
    },
    contextType: {
        export: "Context",
        module: (0,external_path_.join)(process.cwd(), "graphql", "context.ts")
    }
});

;// CONCATENATED MODULE: ./app/api/graphql/route.ts




const server = new esm/* ApolloServer */.f({
    schema: schema
});
const handler = (0,dist.startServerAndCreateNextHandler)(server, {
    context: createContext
});
async function GET(request) {
    return handler(request);
}
async function POST(request) {
    return handler(request);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fgraphql%2Froute&name=app%2Fapi%2Fgraphql%2Froute&pagePath=private-next-app-dir%2Fapi%2Fgraphql%2Froute.ts&appDir=D%3A%5Cprojects%5Cayurarogyam-web%5Capp&appPaths=%2Fapi%2Fgraphql%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/graphql/route","pathname":"/api/graphql","filename":"route","bundlePath":"app/api/graphql/route"},"resolvedPagePath":"D:\\projects\\ayurarogyam-web\\app\\api\\graphql\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/graphql/route"

    

/***/ }),

/***/ 94734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ }),

/***/ 80400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11332);
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

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3763,3851,1476,6133,188,5981,3353,1605], () => (__webpack_exec__(73857)));
module.exports = __webpack_exports__;

})();