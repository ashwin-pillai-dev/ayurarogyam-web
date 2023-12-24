"use strict";
exports.id = 2846;
exports.ids = [2846];
exports.modules = {

/***/ 65478:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ packageVersion)
/* harmony export */ });
const packageVersion = "4.9.3"; //# sourceMappingURL=packageVersion.js.map


/***/ }),

/***/ 7499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ schemaIsSubgraph)
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41327);

function schemaIsSubgraph(schema) {
    const serviceType = schema.getType("_Service");
    if (!(0,graphql__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(serviceType)) {
        return false;
    }
    const sdlField = serviceType.getFields().sdl;
    if (!sdlField) {
        return false;
    }
    let sdlFieldType = sdlField.type;
    if ((0,graphql__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(sdlFieldType)) {
        sdlFieldType = sdlFieldType.ofType;
    }
    if (!(0,graphql__WEBPACK_IMPORTED_MODULE_0__.isScalarType)(sdlFieldType)) {
        return false;
    }
    return sdlFieldType.name == "String";
} //# sourceMappingURL=schemaIsSubgraph.js.map


/***/ }),

/***/ 62846:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApolloServerPluginSchemaReporting: () => (/* binding */ ApolloServerPluginSchemaReporting)
});

// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(22037);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/internalPlugin.js
var internalPlugin = __webpack_require__(43854);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 1 modules
var v4 = __webpack_require__(99215);
// EXTERNAL MODULE: ./node_modules/graphql/index.js
var graphql = __webpack_require__(41327);
// EXTERNAL MODULE: ./node_modules/node-fetch/lib/index.js
var lib = __webpack_require__(62485);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/generated/packageVersion.js
var packageVersion = __webpack_require__(65478);
;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/schemaReporting/schemaReporter.js


const schemaReportGql = `#graphql
  mutation SchemaReport($report: SchemaReport!, $coreSchema: String) {
    reportSchema(report: $report, coreSchema: $coreSchema) {
      __typename
      ... on ReportSchemaError {
        message
        code
      }
      ... on ReportSchemaResponse {
        inSeconds
        withCoreSchema
      }
    }
  }
`;
class SchemaReporter {
    constructor(options){
        this.headers = {
            "Content-Type": "application/json",
            "x-api-key": options.apiKey,
            "apollographql-client-name": "ApolloServerPluginSchemaReporting",
            "apollographql-client-version": packageVersion/* packageVersion */.b
        };
        this.endpointUrl = options.endpointUrl || "https://schema-reporting.api.apollographql.com/api/graphql";
        this.schemaReport = options.schemaReport;
        this.coreSchema = options.coreSchema;
        this.isStopped = false;
        this.logger = options.logger;
        this.initialReportingDelayInMs = options.initialReportingDelayInMs;
        this.fallbackReportingDelayInMs = options.fallbackReportingDelayInMs;
        this.fetcher = options.fetcher ?? lib;
    }
    stopped() {
        return this.isStopped;
    }
    start() {
        this.pollTimer = setTimeout(()=>this.sendOneReportAndScheduleNext(false), this.initialReportingDelayInMs);
    }
    stop() {
        this.isStopped = true;
        if (this.pollTimer) {
            clearTimeout(this.pollTimer);
            this.pollTimer = undefined;
        }
    }
    async sendOneReportAndScheduleNext(sendNextWithCoreSchema) {
        this.pollTimer = undefined;
        if (this.stopped()) return;
        try {
            const result = await this.reportSchema(sendNextWithCoreSchema);
            if (!result) {
                return;
            }
            if (!this.stopped()) {
                this.pollTimer = setTimeout(()=>this.sendOneReportAndScheduleNext(result.withCoreSchema), result.inSeconds * 1000);
            }
            return;
        } catch (error) {
            this.logger.error(`Error reporting server info to Apollo during schema reporting: ${error}`);
            if (!this.stopped()) {
                this.pollTimer = setTimeout(()=>this.sendOneReportAndScheduleNext(false), this.fallbackReportingDelayInMs);
            }
        }
    }
    async reportSchema(withCoreSchema) {
        const { data, errors } = await this.apolloQuery({
            report: this.schemaReport,
            coreSchema: withCoreSchema ? this.coreSchema : null
        });
        if (errors) {
            throw new Error(errors.map((x)=>x.message).join("\n"));
        }
        function msgForUnexpectedResponse(data) {
            return [
                "Unexpected response shape from Apollo when",
                "reporting schema. If this continues, please reach",
                "out to support@apollographql.com.",
                "Received response:",
                JSON.stringify(data)
            ].join(" ");
        }
        if (!data || !data.reportSchema) {
            throw new Error(msgForUnexpectedResponse(data));
        }
        if (data.reportSchema.__typename === "ReportSchemaResponse") {
            return data.reportSchema;
        } else if (data.reportSchema.__typename === "ReportSchemaError") {
            this.logger.error([
                "Received input validation error from Apollo:",
                data.reportSchema.message,
                "Stopping reporting. Please fix the input errors."
            ].join(" "));
            this.stop();
            return null;
        }
        throw new Error(msgForUnexpectedResponse(data));
    }
    async apolloQuery(variables) {
        const request = {
            query: schemaReportGql,
            variables
        };
        const httpResponse = await this.fetcher(this.endpointUrl, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(request)
        });
        if (!httpResponse.ok) {
            throw new Error([
                `An unexpected HTTP status code (${httpResponse.status}) was`,
                "encountered during schema reporting."
            ].join(" "));
        }
        try {
            return await httpResponse.json();
        } catch (error) {
            throw new Error([
                "Couldn't report schema to Apollo.",
                "Parsing response as JSON failed.",
                "If this continues please reach out to support@apollographql.com",
                error
            ].join(" "));
        }
    }
} //# sourceMappingURL=schemaReporter.js.map

// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/plugin/schemaIsSubgraph.js
var schemaIsSubgraph = __webpack_require__(7499);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/utils/computeCoreSchemaHash.js
var computeCoreSchemaHash = __webpack_require__(80622);
;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/schemaReporting/index.js








function ApolloServerPluginSchemaReporting({ initialDelayMaxMs, overrideReportedSchema, endpointUrl, fetcher } = Object.create(null)) {
    const bootId = (0,v4/* default */.Z)();
    return (0,internalPlugin/* internalPlugin */.U)({
        __internal_plugin_id__: "SchemaReporting",
        __is_disabled_plugin__: false,
        async serverWillStart ({ apollo, schema, logger }) {
            const { key, graphRef } = apollo;
            if (!key) {
                throw Error("To use ApolloServerPluginSchemaReporting, you must provide an Apollo API " + "key, via the APOLLO_KEY environment variable or via `new ApolloServer({apollo: {key})`");
            }
            if (!graphRef) {
                throw Error("To use ApolloServerPluginSchemaReporting, you must provide your graph ref (eg, " + "'my-graph-id@my-graph-variant'). Try setting the APOLLO_GRAPH_REF environment " + "variable or passing `new ApolloServer({apollo: {graphRef}})`.");
            }
            if (overrideReportedSchema) {
                try {
                    const validationErrors = (0,graphql.validateSchema)((0,graphql.buildSchema)(overrideReportedSchema, {
                        noLocation: true
                    }));
                    if (validationErrors.length) {
                        throw new Error(validationErrors.map((error)=>error.message).join("\n"));
                    }
                } catch (err) {
                    throw new Error("The schema provided to overrideReportedSchema failed to parse or " + `validate: ${err.message}`);
                }
            }
            if ((0,schemaIsSubgraph/* schemaIsSubgraph */.X)(schema)) {
                throw Error([
                    "Schema reporting is not yet compatible with Apollo Federation subgraphs.",
                    "If you're interested in using schema reporting with subgraphs,",
                    "please contact Apollo support. To set up managed federation, see",
                    "https://go.apollo.dev/s/managed-federation"
                ].join(" "));
            }
            if (endpointUrl !== undefined) {
                logger.info(`Apollo schema reporting: schema reporting URL override: ${endpointUrl}`);
            }
            const baseSchemaReport = {
                bootId,
                graphRef,
                platform: process.env.APOLLO_SERVER_PLATFORM || "local",
                runtimeVersion: `node ${process.version}`,
                userVersion: process.env.APOLLO_SERVER_USER_VERSION,
                serverId: process.env.APOLLO_SERVER_ID || process.env.HOSTNAME || external_os_.hostname(),
                libraryVersion: `@apollo/server@${packageVersion/* packageVersion */.b}`
            };
            let currentSchemaReporter;
            return {
                schemaDidLoadOrUpdate ({ apiSchema, coreSupergraphSdl }) {
                    if (overrideReportedSchema !== undefined) {
                        if (currentSchemaReporter) {
                            return;
                        } else {
                            logger.info("Apollo schema reporting: schema to report has been overridden");
                        }
                    }
                    const coreSchema = overrideReportedSchema ?? coreSupergraphSdl ?? (0,graphql.printSchema)(apiSchema);
                    const coreSchemaHash = (0,computeCoreSchemaHash/* computeCoreSchemaHash */.n)(coreSchema);
                    const schemaReport = {
                        ...baseSchemaReport,
                        coreSchemaHash
                    };
                    currentSchemaReporter?.stop();
                    currentSchemaReporter = new SchemaReporter({
                        schemaReport,
                        coreSchema,
                        apiKey: key,
                        endpointUrl,
                        logger,
                        initialReportingDelayInMs: Math.floor(Math.random() * (initialDelayMaxMs ?? 10000)),
                        fallbackReportingDelayInMs: 20000,
                        fetcher
                    });
                    currentSchemaReporter.start();
                    logger.info("Apollo schema reporting: reporting a new schema to Studio! See your graph at " + `https://studio.apollographql.com/graph/${encodeURI(graphRef)}/ with server info ${JSON.stringify(schemaReport)}`);
                },
                async serverWillStop () {
                    currentSchemaReporter?.stop();
                }
            };
        }
    });
} //# sourceMappingURL=index.js.map


/***/ })

};
;