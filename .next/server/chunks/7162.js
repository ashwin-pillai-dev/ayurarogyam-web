"use strict";
exports.id = 7162;
exports.ids = [7162];
exports.modules = {

/***/ 65478:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ packageVersion)
/* harmony export */ });
const packageVersion = "4.9.3"; //# sourceMappingURL=packageVersion.js.map


/***/ }),

/***/ 87162:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApolloServerPluginUsageReporting: () => (/* reexport */ ApolloServerPluginUsageReporting)
});

// EXTERNAL MODULE: ./node_modules/@apollo/usage-reporting-protobuf/generated/esm/protobuf.js
var protobuf = __webpack_require__(46244);
// EXTERNAL MODULE: ./node_modules/@apollo/server/node_modules/@apollo/utils.usagereporting/dist/index.js
var dist = __webpack_require__(46013);
// EXTERNAL MODULE: ./node_modules/async-retry/lib/index.js
var lib = __webpack_require__(4494);
// EXTERNAL MODULE: ./node_modules/graphql/index.js
var graphql = __webpack_require__(41327);
// EXTERNAL MODULE: ./node_modules/node-abort-controller/index.js
var node_abort_controller = __webpack_require__(93464);
// EXTERNAL MODULE: ./node_modules/node-fetch/lib/index.js
var node_fetch_lib = __webpack_require__(62485);
// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(22037);
// EXTERNAL MODULE: external "zlib"
var external_zlib_ = __webpack_require__(59796);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/internalPlugin.js
var internalPlugin = __webpack_require__(43854);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/plugin/traceTreeBuilder.js
var traceTreeBuilder = __webpack_require__(32682);
// EXTERNAL MODULE: ./node_modules/@apollo/server/node_modules/lru-cache/index.mjs
var lru_cache = __webpack_require__(78532);
;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/iterateOverTrace.js
function iterateOverTrace(trace, f, includePath) {
    const rootPath = includePath ? new RootCollectingPathsResponseNamePath() : notCollectingPathsResponseNamePath;
    if (trace.root) {
        if (iterateOverTraceNode(trace.root, rootPath, f)) return;
    }
    if (trace.queryPlan) {
        if (iterateOverQueryPlan(trace.queryPlan, rootPath, f)) return;
    }
}
function iterateOverQueryPlan(node, rootPath, f) {
    if (!node) return false;
    if (node.fetch?.trace?.root && node.fetch.serviceName) {
        return iterateOverTraceNode(node.fetch.trace.root, rootPath.child(`service:${node.fetch.serviceName}`), f);
    }
    if (node.flatten?.node) {
        return iterateOverQueryPlan(node.flatten.node, rootPath, f);
    }
    if (node.parallel?.nodes) {
        return node.parallel.nodes.some((node)=>iterateOverQueryPlan(node, rootPath, f));
    }
    if (node.sequence?.nodes) {
        return node.sequence.nodes.some((node)=>iterateOverQueryPlan(node, rootPath, f));
    }
    return false;
}
function iterateOverTraceNode(node, path, f) {
    if (f(node, path)) {
        return true;
    }
    return node.child?.some((child)=>{
        const childPath = child.responseName ? path.child(child.responseName) : path;
        return iterateOverTraceNode(child, childPath, f);
    }) ?? false;
}
const notCollectingPathsResponseNamePath = {
    toArray () {
        throw Error("not collecting paths!");
    },
    child () {
        return this;
    }
};
class RootCollectingPathsResponseNamePath {
    toArray() {
        return [];
    }
    child(responseName) {
        return new ChildCollectingPathsResponseNamePath(responseName, this);
    }
}
class ChildCollectingPathsResponseNamePath {
    constructor(responseName, prev){
        this.responseName = responseName;
        this.prev = prev;
    }
    toArray() {
        const out = [];
        let curr = this;
        while(curr instanceof ChildCollectingPathsResponseNamePath){
            out.push(curr.responseName);
            curr = curr.prev;
        }
        return out.reverse();
    }
    child(responseName) {
        return new ChildCollectingPathsResponseNamePath(responseName, this);
    }
} //# sourceMappingURL=iterateOverTrace.js.map

;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/durationHistogram.js
class DurationHistogram {
    toArray() {
        let bufferedZeroes = 0;
        const outputArray = [];
        for (const value of this.buckets){
            if (value === 0) {
                bufferedZeroes++;
            } else {
                if (bufferedZeroes === 1) {
                    outputArray.push(0);
                } else if (bufferedZeroes !== 0) {
                    outputArray.push(-bufferedZeroes);
                }
                outputArray.push(Math.floor(value));
                bufferedZeroes = 0;
            }
        }
        return outputArray;
    }
    static durationToBucket(durationNs) {
        const log = Math.log(durationNs / 1000.0);
        const unboundedBucket = Math.ceil(log / DurationHistogram.EXPONENT_LOG);
        return unboundedBucket <= 0 || Number.isNaN(unboundedBucket) ? 0 : unboundedBucket >= DurationHistogram.BUCKET_COUNT ? DurationHistogram.BUCKET_COUNT - 1 : unboundedBucket;
    }
    incrementDuration(durationNs, value = 1) {
        this.incrementBucket(DurationHistogram.durationToBucket(durationNs), value);
        return this;
    }
    incrementBucket(bucket, value = 1) {
        if (bucket >= DurationHistogram.BUCKET_COUNT) {
            throw Error("Bucket is out of bounds of the buckets array");
        }
        if (bucket >= this.buckets.length) {
            const oldLength = this.buckets.length;
            this.buckets.length = bucket + 1;
            this.buckets.fill(0, oldLength);
        }
        this.buckets[bucket] += value;
    }
    combine(otherHistogram) {
        for(let i = 0; i < otherHistogram.buckets.length; i++){
            this.incrementBucket(i, otherHistogram.buckets[i]);
        }
    }
    constructor(options){
        const initSize = options?.initSize || 74;
        const buckets = options?.buckets;
        const arrayInitSize = Math.max(buckets?.length || 0, initSize);
        this.buckets = Array(arrayInitSize).fill(0);
        if (buckets) {
            buckets.forEach((val, index)=>this.buckets[index] = val);
        }
    }
}
DurationHistogram.BUCKET_COUNT = 384;
DurationHistogram.EXPONENT_LOG = Math.log(1.1); //# sourceMappingURL=durationHistogram.js.map

;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/defaultSendOperationsAsTrace.js



function defaultSendOperationsAsTrace() {
    const cache = new lru_cache/* default */.Z({
        maxSize: Math.pow(2, 20),
        sizeCalculation: (_val, key)=>{
            return key && Buffer.byteLength(key) || 0;
        }
    });
    return (trace, statsReportKey)=>{
        const endTimeSeconds = trace.endTime?.seconds;
        if (endTimeSeconds == null) {
            throw Error("programming error: endTime not set on trace");
        }
        const hasErrors = traceHasErrors(trace);
        const cacheKey = JSON.stringify([
            statsReportKey,
            DurationHistogram.durationToBucket(trace.durationNs),
            Math.floor(endTimeSeconds / 60),
            hasErrors ? Math.floor(endTimeSeconds / 5) : ""
        ]);
        if (cache.get(cacheKey)) {
            return false;
        }
        cache.set(cacheKey, true);
        return true;
    };
}
function traceHasErrors(trace) {
    let hasErrors = false;
    function traceNodeStats(node) {
        if ((node.error?.length ?? 0) > 0) {
            hasErrors = true;
        }
        return hasErrors;
    }
    iterateOverTrace(trace, traceNodeStats, false);
    return hasErrors;
} //# sourceMappingURL=defaultSendOperationsAsTrace.js.map

;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/operationDerivedDataCache.js

function createOperationDerivedDataCache({ logger }) {
    let lastWarn;
    let lastDisposals = 0;
    return new lru_cache/* default */.Z({
        sizeCalculation (obj) {
            return Buffer.byteLength(JSON.stringify(obj), "utf8");
        },
        maxSize: Math.pow(2, 20) * 10,
        dispose () {
            lastDisposals++;
            if (!lastWarn || new Date().getTime() - lastWarn.getTime() > 60000) {
                lastWarn = new Date();
                logger.warn([
                    "This server is processing a high number of unique operations.  ",
                    `A total of ${lastDisposals} records have been `,
                    "ejected from the ApolloServerPluginUsageReporting signature cache in the past ",
                    "interval.  If you see this warning frequently, please open an ",
                    "issue on the Apollo Server repository."
                ].join(""));
                lastDisposals = 0;
            }
        }
    });
}
function operationDerivedDataCacheKey(queryHash, operationName) {
    return `${queryHash}${operationName && ":" + operationName}`;
} //# sourceMappingURL=operationDerivedDataCache.js.map

;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/stats.js



class SizeEstimator {
    constructor(){
        this.bytes = 0;
    }
}
class OurReport {
    constructor(header){
        this.header = header;
        this.tracesPreAggregated = false;
        this.tracesPerQuery = Object.create(null);
        this.endTime = null;
        this.operationCount = 0;
        this.sizeEstimator = new SizeEstimator();
    }
    ensureCountsAreIntegers() {
        for (const tracesAndStats of Object.values(this.tracesPerQuery)){
            tracesAndStats.ensureCountsAreIntegers();
        }
    }
    addTrace({ statsReportKey, trace, asTrace, referencedFieldsByType, maxTraceBytes = 10 * 1024 * 1024, nonFtv1ErrorPaths }) {
        const tracesAndStats = this.getTracesAndStats({
            statsReportKey,
            referencedFieldsByType
        });
        if (asTrace) {
            const encodedTrace = protobuf/* Trace */.fM.encode(trace).finish();
            if (!isNaN(maxTraceBytes) && encodedTrace.length > maxTraceBytes) {
                tracesAndStats.statsWithContext.addTrace(trace, this.sizeEstimator, nonFtv1ErrorPaths);
            } else {
                tracesAndStats.trace.push(encodedTrace);
                this.sizeEstimator.bytes += 2 + encodedTrace.length;
            }
        } else {
            tracesAndStats.statsWithContext.addTrace(trace, this.sizeEstimator, nonFtv1ErrorPaths);
        }
    }
    getTracesAndStats({ statsReportKey, referencedFieldsByType }) {
        const existing = this.tracesPerQuery[statsReportKey];
        if (existing) {
            return existing;
        }
        this.sizeEstimator.bytes += estimatedBytesForString(statsReportKey);
        for (const [typeName, referencedFieldsForType] of Object.entries(referencedFieldsByType)){
            this.sizeEstimator.bytes += 2 + 2;
            if (referencedFieldsForType.isInterface) {
                this.sizeEstimator.bytes += 2;
            }
            this.sizeEstimator.bytes += estimatedBytesForString(typeName);
            for (const fieldName of referencedFieldsForType.fieldNames){
                this.sizeEstimator.bytes += estimatedBytesForString(fieldName);
            }
        }
        return this.tracesPerQuery[statsReportKey] = new OurTracesAndStats(referencedFieldsByType);
    }
}
class OurTracesAndStats {
    constructor(referencedFieldsByType){
        this.referencedFieldsByType = referencedFieldsByType;
        this.trace = [];
        this.statsWithContext = new StatsByContext();
        this.internalTracesContributingToStats = [];
    }
    ensureCountsAreIntegers() {
        this.statsWithContext.ensureCountsAreIntegers();
    }
}
class StatsByContext {
    constructor(){
        this.map = Object.create(null);
    }
    toArray() {
        return Object.values(this.map);
    }
    ensureCountsAreIntegers() {
        for (const contextualizedStats of Object.values(this.map)){
            contextualizedStats.ensureCountsAreIntegers();
        }
    }
    addTrace(trace, sizeEstimator, nonFtv1ErrorPaths) {
        this.getContextualizedStats(trace, sizeEstimator).addTrace(trace, sizeEstimator, nonFtv1ErrorPaths);
    }
    getContextualizedStats(trace, sizeEstimator) {
        const statsContext = {
            clientName: trace.clientName,
            clientVersion: trace.clientVersion
        };
        const statsContextKey = JSON.stringify(statsContext);
        const existing = this.map[statsContextKey];
        if (existing) {
            return existing;
        }
        sizeEstimator.bytes += 20 + estimatedBytesForString(trace.clientName) + estimatedBytesForString(trace.clientVersion);
        const contextualizedStats = new OurContextualizedStats(statsContext);
        this.map[statsContextKey] = contextualizedStats;
        return contextualizedStats;
    }
}
class OurContextualizedStats {
    constructor(context){
        this.context = context;
        this.queryLatencyStats = new OurQueryLatencyStats();
        this.perTypeStat = Object.create(null);
    }
    ensureCountsAreIntegers() {
        for (const typeStat of Object.values(this.perTypeStat)){
            typeStat.ensureCountsAreIntegers();
        }
    }
    addTrace(trace, sizeEstimator, nonFtv1ErrorPaths = []) {
        const { fieldExecutionWeight } = trace;
        if (!fieldExecutionWeight) {
            this.queryLatencyStats.requestsWithoutFieldInstrumentation++;
        }
        this.queryLatencyStats.requestCount++;
        if (trace.fullQueryCacheHit) {
            this.queryLatencyStats.cacheLatencyCount.incrementDuration(trace.durationNs);
            this.queryLatencyStats.cacheHits++;
        } else {
            this.queryLatencyStats.latencyCount.incrementDuration(trace.durationNs);
        }
        if (!trace.fullQueryCacheHit && trace.cachePolicy?.maxAgeNs != null) {
            switch(trace.cachePolicy.scope){
                case protobuf/* Trace */.fM.CachePolicy.Scope.PRIVATE:
                    this.queryLatencyStats.privateCacheTtlCount.incrementDuration(trace.cachePolicy.maxAgeNs);
                    break;
                case protobuf/* Trace */.fM.CachePolicy.Scope.PUBLIC:
                    this.queryLatencyStats.publicCacheTtlCount.incrementDuration(trace.cachePolicy.maxAgeNs);
                    break;
            }
        }
        if (trace.persistedQueryHit) {
            this.queryLatencyStats.persistedQueryHits++;
        }
        if (trace.persistedQueryRegister) {
            this.queryLatencyStats.persistedQueryMisses++;
        }
        if (trace.forbiddenOperation) {
            this.queryLatencyStats.forbiddenOperationCount++;
        }
        if (trace.registeredOperation) {
            this.queryLatencyStats.registeredOperationCount++;
        }
        let hasError = false;
        const errorPathStats = new Set();
        const traceNodeStats = (node, path)=>{
            if (node.error?.length) {
                hasError = true;
                let currPathErrorStats = this.queryLatencyStats.rootErrorStats;
                path.toArray().forEach((subPath)=>{
                    currPathErrorStats = currPathErrorStats.getChild(subPath, sizeEstimator);
                });
                errorPathStats.add(currPathErrorStats);
                currPathErrorStats.errorsCount += node.error.length;
            }
            if (fieldExecutionWeight) {
                const fieldName = node.originalFieldName || node.responseName;
                if (node.parentType && fieldName && node.type && node.endTime != null && node.startTime != null && node.endTime >= node.startTime) {
                    const typeStat = this.getTypeStat(node.parentType, sizeEstimator);
                    const fieldStat = typeStat.getFieldStat(fieldName, node.type, sizeEstimator);
                    fieldStat.errorsCount += node.error?.length ?? 0;
                    fieldStat.observedExecutionCount++;
                    fieldStat.estimatedExecutionCount += fieldExecutionWeight;
                    fieldStat.requestsWithErrorsCount += (node.error?.length ?? 0) > 0 ? 1 : 0;
                    fieldStat.latencyCount.incrementDuration(node.endTime - node.startTime, fieldExecutionWeight);
                }
            }
            return false;
        };
        iterateOverTrace(trace, traceNodeStats, true);
        for (const { subgraph, path } of nonFtv1ErrorPaths){
            hasError = true;
            if (path) {
                let currPathErrorStats = this.queryLatencyStats.rootErrorStats.getChild(`service:${subgraph}`, sizeEstimator);
                path.forEach((subPath)=>{
                    if (typeof subPath === "string") {
                        currPathErrorStats = currPathErrorStats.getChild(subPath, sizeEstimator);
                    }
                });
                errorPathStats.add(currPathErrorStats);
                currPathErrorStats.errorsCount += 1;
            }
        }
        for (const errorPath of errorPathStats){
            errorPath.requestsWithErrorsCount += 1;
        }
        if (hasError) {
            this.queryLatencyStats.requestsWithErrorsCount++;
        }
    }
    getTypeStat(parentType, sizeEstimator) {
        const existing = this.perTypeStat[parentType];
        if (existing) {
            return existing;
        }
        sizeEstimator.bytes += estimatedBytesForString(parentType);
        const typeStat = new OurTypeStat();
        this.perTypeStat[parentType] = typeStat;
        return typeStat;
    }
}
class OurQueryLatencyStats {
    constructor(){
        this.latencyCount = new DurationHistogram();
        this.requestCount = 0;
        this.requestsWithoutFieldInstrumentation = 0;
        this.cacheHits = 0;
        this.persistedQueryHits = 0;
        this.persistedQueryMisses = 0;
        this.cacheLatencyCount = new DurationHistogram();
        this.rootErrorStats = new OurPathErrorStats();
        this.requestsWithErrorsCount = 0;
        this.publicCacheTtlCount = new DurationHistogram();
        this.privateCacheTtlCount = new DurationHistogram();
        this.registeredOperationCount = 0;
        this.forbiddenOperationCount = 0;
    }
}
class OurPathErrorStats {
    constructor(){
        this.children = Object.create(null);
        this.errorsCount = 0;
        this.requestsWithErrorsCount = 0;
    }
    getChild(subPath, sizeEstimator) {
        const existing = this.children[subPath];
        if (existing) {
            return existing;
        }
        const child = new OurPathErrorStats();
        this.children[subPath] = child;
        sizeEstimator.bytes += estimatedBytesForString(subPath) + 4;
        return child;
    }
}
class OurTypeStat {
    constructor(){
        this.perFieldStat = Object.create(null);
    }
    getFieldStat(fieldName, returnType, sizeEstimator) {
        const existing = this.perFieldStat[fieldName];
        if (existing) {
            return existing;
        }
        sizeEstimator.bytes += estimatedBytesForString(fieldName) + estimatedBytesForString(returnType) + 10;
        const fieldStat = new OurFieldStat(returnType);
        this.perFieldStat[fieldName] = fieldStat;
        return fieldStat;
    }
    ensureCountsAreIntegers() {
        for (const fieldStat of Object.values(this.perFieldStat)){
            fieldStat.ensureCountsAreIntegers();
        }
    }
}
class OurFieldStat {
    constructor(returnType){
        this.returnType = returnType;
        this.errorsCount = 0;
        this.observedExecutionCount = 0;
        this.estimatedExecutionCount = 0;
        this.requestsWithErrorsCount = 0;
        this.latencyCount = new DurationHistogram();
    }
    ensureCountsAreIntegers() {
        this.estimatedExecutionCount = Math.floor(this.estimatedExecutionCount);
    }
}
function estimatedBytesForString(s) {
    return 2 + Buffer.byteLength(s);
} //# sourceMappingURL=stats.js.map

;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/traceDetails.js

function makeTraceDetails(variables, sendVariableValues, operationString) {
    const details = new protobuf/* Trace */.fM.Details();
    const variablesToRecord = (()=>{
        if (sendVariableValues && "transform" in sendVariableValues) {
            const originalKeys = Object.keys(variables);
            try {
                const modifiedVariables = sendVariableValues.transform({
                    variables: variables,
                    operationString: operationString
                });
                return cleanModifiedVariables(originalKeys, modifiedVariables);
            } catch (e) {
                return handleVariableValueTransformError(originalKeys);
            }
        } else {
            return variables;
        }
    })();
    Object.keys(variablesToRecord).forEach((name)=>{
        if (!sendVariableValues || "none" in sendVariableValues && sendVariableValues.none || "all" in sendVariableValues && !sendVariableValues.all || "exceptNames" in sendVariableValues && sendVariableValues.exceptNames.includes(name) || "onlyNames" in sendVariableValues && !sendVariableValues.onlyNames.includes(name)) {
            details.variablesJson[name] = "";
        } else {
            try {
                details.variablesJson[name] = typeof variablesToRecord[name] === "undefined" ? "" : JSON.stringify(variablesToRecord[name]);
            } catch (e) {
                details.variablesJson[name] = JSON.stringify("[Unable to convert value to JSON]");
            }
        }
    });
    return details;
}
function handleVariableValueTransformError(variableNames) {
    const modifiedVariables = Object.create(null);
    variableNames.forEach((name)=>{
        modifiedVariables[name] = "[PREDICATE_FUNCTION_ERROR]";
    });
    return modifiedVariables;
}
function cleanModifiedVariables(originalKeys, modifiedVariables) {
    const cleanedVariables = Object.create(null);
    originalKeys.forEach((name)=>{
        cleanedVariables[name] = modifiedVariables[name];
    });
    return cleanedVariables;
} //# sourceMappingURL=traceDetails.js.map

// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/generated/packageVersion.js
var packageVersion = __webpack_require__(65478);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/utils/computeCoreSchemaHash.js
var computeCoreSchemaHash = __webpack_require__(80622);
// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/plugin/schemaIsSubgraph.js
var schemaIsSubgraph = __webpack_require__(7499);
;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/plugin.js

















const reportHeaderDefaults = {
    hostname: external_os_.hostname(),
    agentVersion: `@apollo/server@${packageVersion/* packageVersion */.b}`,
    runtimeVersion: `node ${process.version}`,
    uname: `${external_os_.platform()}, ${external_os_.type()}, ${external_os_.release()}, ${external_os_.arch()})`
};
function ApolloServerPluginUsageReporting(options = Object.create(null)) {
    const fieldLevelInstrumentationOption = options.fieldLevelInstrumentation;
    const fieldLevelInstrumentation = typeof fieldLevelInstrumentationOption === "number" ? async ()=>Math.random() < fieldLevelInstrumentationOption ? 1 / fieldLevelInstrumentationOption : 0 : fieldLevelInstrumentationOption ? fieldLevelInstrumentationOption : async ()=>true;
    let requestDidStartHandler = null;
    return (0,internalPlugin/* internalPlugin */.U)({
        __internal_plugin_id__: "UsageReporting",
        __is_disabled_plugin__: false,
        async requestDidStart (requestContext) {
            if (requestDidStartHandler) {
                return requestDidStartHandler(requestContext);
            }
            return {};
        },
        async serverWillStart ({ logger: serverLogger, apollo, startedInBackground, schema }) {
            const logger = options.logger ?? serverLogger;
            const { key, graphRef } = apollo;
            if (!(key && graphRef)) {
                throw new Error("You've enabled usage reporting via ApolloServerPluginUsageReporting, " + "but you also need to provide your Apollo API key and graph ref, via " + "the APOLLO_KEY/APOLLO_GRAPH_REF environment " + "variables or via `new ApolloServer({apollo: {key, graphRef})`.");
            }
            if ((0,schemaIsSubgraph/* schemaIsSubgraph */.X)(schema)) {
                if (options.__onlyIfSchemaIsNotSubgraph) {
                    logger.warn("You have specified an Apollo API key and graph ref but this server appears " + "to be a subgraph. Typically usage reports are sent to Apollo by your Router " + "or Gateway, not directly from your subgraph; usage reporting is disabled. To " + "enable usage reporting anyway, explicitly install `ApolloServerPluginUsageReporting`. " + "To disable this warning, install `ApolloServerPluginUsageReportingDisabled`.");
                    return {};
                } else {
                    logger.warn("You have installed `ApolloServerPluginUsageReporting` but this server appears to " + "be a subgraph. Typically usage reports are sent to Apollo by your Router " + "or Gateway, not directly from your subgraph. If this was unintentional, remove " + "`ApolloServerPluginUsageReporting` from your server's `plugins` array.");
                }
            }
            logger.info("Apollo usage reporting starting! See your graph at " + `https://studio.apollographql.com/graph/${encodeURI(graphRef)}/`);
            const sendReportsImmediately = options.sendReportsImmediately ?? startedInBackground;
            let operationDerivedDataCache = null;
            const reportByExecutableSchemaId = new Map();
            const getReportWhichMustBeUsedImmediately = (executableSchemaId)=>{
                const existing = reportByExecutableSchemaId.get(executableSchemaId);
                if (existing) {
                    return existing;
                }
                const report = new OurReport(new protobuf/* ReportHeader */.UD({
                    ...reportHeaderDefaults,
                    executableSchemaId,
                    graphRef
                }));
                reportByExecutableSchemaId.set(executableSchemaId, report);
                return report;
            };
            const getAndDeleteReport = (executableSchemaId)=>{
                const report = reportByExecutableSchemaId.get(executableSchemaId);
                if (report) {
                    reportByExecutableSchemaId.delete(executableSchemaId);
                    return report;
                }
                return null;
            };
            const overriddenExecutableSchemaId = options.overrideReportedSchema ? (0,computeCoreSchemaHash/* computeCoreSchemaHash */.n)(options.overrideReportedSchema) : undefined;
            let lastSeenExecutableSchemaToId;
            let reportTimer;
            if (!sendReportsImmediately) {
                reportTimer = setInterval(()=>sendAllReportsAndReportErrors(), options.reportIntervalMs || 10 * 1000);
            }
            let sendTraces = options.sendTraces ?? true;
            const sendOperationAsTrace = options.experimental_sendOperationAsTrace ?? defaultSendOperationsAsTrace();
            let stopped = false;
            function executableSchemaIdForSchema(schema) {
                if (lastSeenExecutableSchemaToId?.executableSchema === schema) {
                    return lastSeenExecutableSchemaToId.executableSchemaId;
                }
                const id = (0,computeCoreSchemaHash/* computeCoreSchemaHash */.n)((0,graphql.printSchema)(schema));
                lastSeenExecutableSchemaToId = {
                    executableSchema: schema,
                    executableSchemaId: id
                };
                return id;
            }
            async function sendAllReportsAndReportErrors() {
                await Promise.all([
                    ...reportByExecutableSchemaId.keys()
                ].map((executableSchemaId)=>sendReportAndReportErrors(executableSchemaId)));
            }
            async function sendReportAndReportErrors(executableSchemaId) {
                return sendReport(executableSchemaId).catch((err)=>{
                    if (options.reportErrorFunction) {
                        options.reportErrorFunction(err);
                    } else {
                        logger.error(err.message);
                    }
                });
            }
            const sendReport = async (executableSchemaId)=>{
                let report = getAndDeleteReport(executableSchemaId);
                if (!report || Object.keys(report.tracesPerQuery).length === 0 && report.operationCount === 0) {
                    return;
                }
                report.endTime = (0,traceTreeBuilder/* dateToProtoTimestamp */.F)(new Date());
                report.ensureCountsAreIntegers();
                const protobufError = protobuf/* Report */.yG.verify(report);
                if (protobufError) {
                    throw new Error(`Error verifying report: ${protobufError}`);
                }
                let message = protobuf/* Report */.yG.encode(report).finish();
                report = null;
                if (options.debugPrintReports) {
                    const decodedReport = protobuf/* Report */.yG.decode(message);
                    logger.info(`Apollo usage report: ${JSON.stringify(decodedReport.toJSON())}`);
                }
                const compressed = await new Promise((resolve, reject)=>{
                    (0,external_zlib_.gzip)(message, (error, result)=>{
                        error ? reject(error) : resolve(result);
                    });
                });
                message = null;
                const fetcher = options.fetcher ?? node_fetch_lib;
                const response = await lib(async ()=>{
                    const controller = new node_abort_controller.AbortController();
                    const abortTimeout = setTimeout(()=>{
                        controller.abort();
                    }, options.requestTimeoutMs ?? 30000);
                    let curResponse;
                    try {
                        curResponse = await fetcher((options.endpointUrl || "https://usage-reporting.api.apollographql.com") + "/api/ingress/traces", {
                            method: "POST",
                            headers: {
                                "user-agent": "ApolloServerPluginUsageReporting",
                                "x-api-key": key,
                                "content-encoding": "gzip",
                                accept: "application/json"
                            },
                            body: compressed,
                            signal: controller.signal
                        });
                    } finally{
                        clearTimeout(abortTimeout);
                    }
                    if (curResponse.status >= 500 && curResponse.status < 600) {
                        throw new Error(`HTTP status ${curResponse.status}, ${await curResponse.text() || "(no body)"}`);
                    } else {
                        return curResponse;
                    }
                }, {
                    retries: (options.maxAttempts || 5) - 1,
                    minTimeout: options.minimumRetryDelayMs || 100,
                    factor: 2
                }).catch((err)=>{
                    throw new Error(`Error sending report to Apollo servers: ${err.message}`);
                });
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(`Error sending report to Apollo servers: HTTP status ${response.status}, ${await response.text() || "(no body)"}`);
                }
                if (sendTraces && response.status === 200 && response.headers.get("content-type")?.match(/^\s*application\/json\s*(?:;|$)/i)) {
                    const body = await response.text();
                    let parsedBody;
                    try {
                        parsedBody = JSON.parse(body);
                    } catch (e) {
                        throw new Error(`Error parsing response from Apollo servers: ${e}`);
                    }
                    if (parsedBody.tracesIgnored === true) {
                        logger.debug("This graph's organization does not have access to traces; sending all " + "subsequent operations as stats.");
                        sendTraces = false;
                    }
                }
                if (options.debugPrintReports) {
                    logger.info(`Apollo usage report: status ${response.status}`);
                }
            };
            requestDidStartHandler = ({ metrics, schema, request: { http, variables } })=>{
                const treeBuilder = new traceTreeBuilder/* TraceTreeBuilder */.X({
                    maskedBy: "ApolloServerPluginUsageReporting",
                    sendErrors: options.sendErrors
                });
                treeBuilder.startTiming();
                metrics.startHrTime = treeBuilder.startHrTime;
                let graphqlValidationFailure = false;
                let graphqlUnknownOperationName = false;
                let includeOperationInUsageReporting = null;
                if (http) {
                    treeBuilder.trace.http = new protobuf/* Trace */.fM.HTTP({
                        method: protobuf/* Trace */.fM.HTTP.Method[http.method] || protobuf/* Trace */.fM.HTTP.Method.UNKNOWN
                    });
                    if (options.sendHeaders) {
                        makeHTTPRequestHeaders(treeBuilder.trace.http, http.headers, options.sendHeaders);
                    }
                }
                async function maybeCallIncludeRequestHook(requestContext) {
                    if (includeOperationInUsageReporting !== null) return;
                    if (typeof options.includeRequest !== "function") {
                        includeOperationInUsageReporting = true;
                        return;
                    }
                    includeOperationInUsageReporting = await options.includeRequest(requestContext);
                    if (typeof includeOperationInUsageReporting !== "boolean") {
                        logger.warn("The 'includeRequest' async predicate function must return a boolean value.");
                        includeOperationInUsageReporting = true;
                    }
                }
                let didResolveSource = false;
                return {
                    async didResolveSource (requestContext) {
                        didResolveSource = true;
                        if (metrics.persistedQueryHit) {
                            treeBuilder.trace.persistedQueryHit = true;
                        }
                        if (metrics.persistedQueryRegister) {
                            treeBuilder.trace.persistedQueryRegister = true;
                        }
                        if (variables) {
                            treeBuilder.trace.details = makeTraceDetails(variables, options.sendVariableValues, requestContext.source);
                        }
                        const clientInfo = (options.generateClientInfo || defaultGenerateClientInfo)(requestContext);
                        if (clientInfo) {
                            const { clientName, clientVersion } = clientInfo;
                            treeBuilder.trace.clientVersion = clientVersion || "";
                            treeBuilder.trace.clientName = clientName || "";
                        }
                    },
                    async validationDidStart () {
                        return async (validationErrors)=>{
                            graphqlValidationFailure = validationErrors ? validationErrors.length !== 0 : false;
                        };
                    },
                    async didResolveOperation (requestContext) {
                        graphqlUnknownOperationName = requestContext.operation === undefined;
                        await maybeCallIncludeRequestHook(requestContext);
                        if (includeOperationInUsageReporting && !graphqlUnknownOperationName) {
                            if (metrics.captureTraces === undefined) {
                                const rawWeight = await fieldLevelInstrumentation(requestContext);
                                treeBuilder.trace.fieldExecutionWeight = typeof rawWeight === "number" ? rawWeight : rawWeight ? 1 : 0;
                                metrics.captureTraces = !!treeBuilder.trace.fieldExecutionWeight;
                            }
                        }
                    },
                    async executionDidStart () {
                        if (!metrics.captureTraces) return;
                        return {
                            willResolveField ({ info }) {
                                return treeBuilder.willResolveField(info);
                            }
                        };
                    },
                    async didEncounterSubsequentErrors (_requestContext, errors) {
                        treeBuilder.didEncounterErrors(errors);
                    },
                    async willSendSubsequentPayload (requestContext, payload) {
                        if (!payload.hasNext) {
                            await operationFinished(requestContext);
                        }
                    },
                    async willSendResponse (requestContext) {
                        if (!didResolveSource) return;
                        if (requestContext.errors) {
                            treeBuilder.didEncounterErrors(requestContext.errors);
                        }
                        if (requestContext.response.body.kind === "single") {
                            await operationFinished(requestContext);
                        }
                    }
                };
                async function operationFinished(requestContext) {
                    const resolvedOperation = !!requestContext.operation;
                    await maybeCallIncludeRequestHook(requestContext);
                    treeBuilder.stopTiming();
                    const executableSchemaId = overriddenExecutableSchemaId ?? executableSchemaIdForSchema(schema);
                    if (includeOperationInUsageReporting === false) {
                        if (resolvedOperation) {
                            getReportWhichMustBeUsedImmediately(executableSchemaId).operationCount++;
                        }
                        return;
                    }
                    treeBuilder.trace.fullQueryCacheHit = !!metrics.responseCacheHit;
                    treeBuilder.trace.forbiddenOperation = !!metrics.forbiddenOperation;
                    treeBuilder.trace.registeredOperation = !!metrics.registeredOperation;
                    const policyIfCacheable = requestContext.overallCachePolicy.policyIfCacheable();
                    if (policyIfCacheable) {
                        treeBuilder.trace.cachePolicy = new protobuf/* Trace */.fM.CachePolicy({
                            scope: policyIfCacheable.scope === "PRIVATE" ? protobuf/* Trace */.fM.CachePolicy.Scope.PRIVATE : policyIfCacheable.scope === "PUBLIC" ? protobuf/* Trace */.fM.CachePolicy.Scope.PUBLIC : protobuf/* Trace */.fM.CachePolicy.Scope.UNKNOWN,
                            maxAgeNs: policyIfCacheable.maxAge * 1e9
                        });
                    }
                    if (metrics.queryPlanTrace) {
                        treeBuilder.trace.queryPlan = metrics.queryPlanTrace;
                    }
                    addTrace().catch(logger.error);
                    async function addTrace() {
                        if (stopped) {
                            return;
                        }
                        await new Promise((res)=>setImmediate(res));
                        const executableSchemaId = overriddenExecutableSchemaId ?? executableSchemaIdForSchema(schema);
                        const { trace } = treeBuilder;
                        let statsReportKey = undefined;
                        let referencedFieldsByType;
                        if (!requestContext.document) {
                            statsReportKey = `## GraphQLParseFailure\n`;
                        } else if (graphqlValidationFailure) {
                            statsReportKey = `## GraphQLValidationFailure\n`;
                        } else if (graphqlUnknownOperationName) {
                            statsReportKey = `## GraphQLUnknownOperationName\n`;
                        }
                        const isExecutable = statsReportKey === undefined;
                        if (statsReportKey) {
                            if (options.sendUnexecutableOperationDocuments) {
                                trace.unexecutedOperationBody = requestContext.source;
                                trace.unexecutedOperationName = requestContext.request.operationName || "";
                            }
                            referencedFieldsByType = Object.create(null);
                        } else {
                            const operationDerivedData = getOperationDerivedData();
                            statsReportKey = `# ${requestContext.operationName || "-"}\n${operationDerivedData.signature}`;
                            referencedFieldsByType = operationDerivedData.referencedFieldsByType;
                        }
                        const protobufError = protobuf/* Trace */.fM.verify(trace);
                        if (protobufError) {
                            throw new Error(`Error encoding trace: ${protobufError}`);
                        }
                        if (resolvedOperation) {
                            getReportWhichMustBeUsedImmediately(executableSchemaId).operationCount++;
                        }
                        getReportWhichMustBeUsedImmediately(executableSchemaId).addTrace({
                            statsReportKey,
                            trace,
                            asTrace: sendTraces && (!isExecutable || !!metrics.captureTraces) && !metrics.nonFtv1ErrorPaths?.length && sendOperationAsTrace(trace, statsReportKey),
                            referencedFieldsByType,
                            nonFtv1ErrorPaths: metrics.nonFtv1ErrorPaths ?? []
                        });
                        if (sendReportsImmediately || getReportWhichMustBeUsedImmediately(executableSchemaId).sizeEstimator.bytes >= (options.maxUncompressedReportSize || 4 * 1024 * 1024)) {
                            await sendReportAndReportErrors(executableSchemaId);
                        }
                    }
                    function getOperationDerivedData() {
                        if (!requestContext.document) {
                            throw new Error("No document?");
                        }
                        const cacheKey = operationDerivedDataCacheKey(requestContext.queryHash, requestContext.operationName || "");
                        if (!operationDerivedDataCache || operationDerivedDataCache.forSchema !== schema) {
                            operationDerivedDataCache = {
                                forSchema: schema,
                                cache: createOperationDerivedDataCache({
                                    logger
                                })
                            };
                        }
                        const cachedOperationDerivedData = operationDerivedDataCache.cache.get(cacheKey);
                        if (cachedOperationDerivedData) {
                            return cachedOperationDerivedData;
                        }
                        const generatedSignature = (options.calculateSignature || dist.usageReportingSignature)(requestContext.document, requestContext.operationName || "");
                        const generatedOperationDerivedData = {
                            signature: generatedSignature,
                            referencedFieldsByType: (0,dist.calculateReferencedFieldsByType)({
                                document: requestContext.document,
                                schema,
                                resolvedOperationName: requestContext.operationName ?? null
                            })
                        };
                        operationDerivedDataCache.cache.set(cacheKey, generatedOperationDerivedData);
                        return generatedOperationDerivedData;
                    }
                }
            };
            return {
                async serverWillStop () {
                    if (reportTimer) {
                        clearInterval(reportTimer);
                        reportTimer = undefined;
                    }
                    stopped = true;
                    await sendAllReportsAndReportErrors();
                }
            };
        }
    });
}
function makeHTTPRequestHeaders(http, headers, sendHeaders) {
    if (!sendHeaders || "none" in sendHeaders && sendHeaders.none || "all" in sendHeaders && !sendHeaders.all) {
        return;
    }
    for (const [key, value] of headers){
        if ("exceptNames" in sendHeaders && sendHeaders.exceptNames.some((exceptHeader)=>{
            return exceptHeader.toLowerCase() === key;
        }) || "onlyNames" in sendHeaders && !sendHeaders.onlyNames.some((header)=>{
            return header.toLowerCase() === key;
        })) {
            continue;
        }
        switch(key){
            case "authorization":
            case "cookie":
            case "set-cookie":
                break;
            default:
                http.requestHeaders[key] = new protobuf/* Trace */.fM.HTTP.Values({
                    value: [
                        value
                    ]
                });
        }
    }
}
function defaultGenerateClientInfo({ request }) {
    const clientNameHeaderKey = "apollographql-client-name";
    const clientVersionHeaderKey = "apollographql-client-version";
    if (request.http?.headers?.get(clientNameHeaderKey) || request.http?.headers?.get(clientVersionHeaderKey)) {
        return {
            clientName: request.http?.headers?.get(clientNameHeaderKey),
            clientVersion: request.http?.headers?.get(clientVersionHeaderKey)
        };
    } else if (request.extensions?.clientInfo) {
        return request.extensions.clientInfo;
    } else {
        return {};
    }
} //# sourceMappingURL=plugin.js.map

;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/usageReporting/index.js
 //# sourceMappingURL=index.js.map


/***/ })

};
;