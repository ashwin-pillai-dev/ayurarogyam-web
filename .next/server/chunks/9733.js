"use strict";
exports.id = 9733;
exports.ids = [9733];
exports.modules = {

/***/ 89733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38198);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12305);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75714);




const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
const authOptions = {
    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__/* .PrismaAdapter */ .N)(prisma),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const creds = credentials;
                // Create a URL object
                const url = new URL(creds.callbackUrl);
                // Get the value of the "callbackUrl" parameter
                const callbackUrl = url.searchParams.get("callbackUrl");
                console.log("callback url");
                console.log(callbackUrl);
                if (!credentials?.email || !credentials.password) {
                    throw new Error("Email or password not provided");
                }
                const admin = await prisma.admin.findUnique({
                    where: {
                        email: credentials.email
                    },
                    include: {
                        role: true
                    }
                });
                if (!admin) {
                    throw new Error("Admin not found");
                }
                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, admin.password);
                if (!isPasswordValid) {
                    throw new Error("Invalid Password");
                }
                console.log("admin found:");
                console.log({
                    id: admin.id,
                    email: admin.email,
                    name: admin.name,
                    role: admin.role.roleName
                });
                return {
                    id: admin.id,
                    email: admin.email,
                    name: admin.name,
                    role: admin.role.roleName
                };
            }
        })
    ],
    callbacks: {
        session: ({ session, token })=>{
            return {
                ...session,
                user: {
                    ...session.user
                },
                accessToken: token
            };
        },
        jwt: ({ token, user })=>{
            if (user) {
                const userRole = user;
                token.role = userRole.role;
            }
            return token;
        }
    }
};


/***/ })

};
;