"use strict";
exports.id = 9124;
exports.ids = [9124];
exports.modules = {

/***/ 65478:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ packageVersion)
/* harmony export */ });
const packageVersion = "4.9.3"; //# sourceMappingURL=packageVersion.js.map


/***/ }),

/***/ 9124:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApolloServerPluginLandingPageLocalDefault: () => (/* binding */ ApolloServerPluginLandingPageLocalDefault),
  ApolloServerPluginLandingPageProductionDefault: () => (/* binding */ ApolloServerPluginLandingPageProductionDefault)
});

;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/landingPage/default/getEmbeddedHTML.js
function getConfigStringForHtml(config) {
    return JSON.stringify(config).replace("<", "\\u003c").replace(">", "\\u003e").replace("&", "\\u0026").replace("'", "\\u0027");
}
const getEmbeddedExplorerHTML = (explorerCdnVersion, config, apolloServerVersion, nonce)=>{
    const productionLandingPageEmbedConfigOrDefault = {
        displayOptions: {},
        persistExplorerState: false,
        runTelemetry: true,
        ...typeof config.embed === "boolean" ? {} : config.embed
    };
    const embeddedExplorerParams = {
        graphRef: config.graphRef,
        target: "#embeddableExplorer",
        initialState: {
            ..."document" in config || "headers" in config || "variables" in config ? {
                document: config.document,
                headers: config.headers,
                variables: config.variables
            } : {},
            ..."collectionId" in config ? {
                collectionId: config.collectionId,
                operationId: config.operationId
            } : {},
            displayOptions: {
                ...productionLandingPageEmbedConfigOrDefault.displayOptions
            }
        },
        persistExplorerState: productionLandingPageEmbedConfigOrDefault.persistExplorerState,
        includeCookies: config.includeCookies,
        runtime: apolloServerVersion,
        runTelemetry: productionLandingPageEmbedConfigOrDefault.runTelemetry,
        allowDynamicStyles: false
    };
    return `
<div class="fallback">
  <h1>Welcome to Apollo Server</h1>
  <p>Apollo Explorer cannot be loaded; it appears that you might be offline.</p>
</div>
<style nonce=${nonce}>
  iframe {
    background-color: white;
    height: 100%;
    width: 100%;
    border: none;
  }
  #embeddableExplorer {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
  }
</style>
<div id="embeddableExplorer"></div>
<script nonce="${nonce}" src="https://embeddable-explorer.cdn.apollographql.com/${encodeURIComponent(explorerCdnVersion)}/embeddable-explorer.umd.production.min.js?runtime=${encodeURIComponent(apolloServerVersion)}"></script>
<script nonce="${nonce}">
  var endpointUrl = window.location.href;
  var embeddedExplorerConfig = ${getConfigStringForHtml(embeddedExplorerParams)};
  new window.EmbeddedExplorer({
    ...embeddedExplorerConfig,
    endpointUrl,
  });
</script>
`;
};
const getEmbeddedSandboxHTML = (sandboxCdnVersion, config, apolloServerVersion, nonce)=>{
    const localDevelopmentEmbedConfigOrDefault = {
        runTelemetry: true,
        endpointIsEditable: false,
        initialState: {},
        ...typeof config.embed === "boolean" ? {} : config.embed ?? {}
    };
    const embeddedSandboxConfig = {
        target: "#embeddableSandbox",
        initialState: {
            ..."document" in config || "headers" in config || "variables" in config ? {
                document: config.document,
                variables: config.variables,
                headers: config.headers
            } : {},
            ..."collectionId" in config ? {
                collectionId: config.collectionId,
                operationId: config.operationId
            } : {},
            includeCookies: config.includeCookies,
            ...localDevelopmentEmbedConfigOrDefault.initialState
        },
        hideCookieToggle: false,
        endpointIsEditable: localDevelopmentEmbedConfigOrDefault.endpointIsEditable,
        runtime: apolloServerVersion,
        runTelemetry: localDevelopmentEmbedConfigOrDefault.runTelemetry,
        allowDynamicStyles: false
    };
    return `
<div class="fallback">
  <h1>Welcome to Apollo Server</h1>
  <p>Apollo Sandbox cannot be loaded; it appears that you might be offline.</p>
</div>
<style nonce=${nonce}>
  iframe {
    background-color: white;
    height: 100%;
    width: 100%;
    border: none;
  }
  #embeddableSandbox {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
  }
</style>
<div id="embeddableSandbox"></div>
<script nonce="${nonce}" src="https://embeddable-sandbox.cdn.apollographql.com/${encodeURIComponent(sandboxCdnVersion)}/embeddable-sandbox.umd.production.min.js?runtime=${encodeURIComponent(apolloServerVersion)}"></script>
<script nonce="${nonce}">
  var initialEndpoint = window.location.href;
  var embeddedSandboxConfig = ${getConfigStringForHtml(embeddedSandboxConfig)};
  new window.EmbeddedSandbox(
    {
      ...embeddedSandboxConfig,
      initialEndpoint,
    }
  );
</script>
`;
}; //# sourceMappingURL=getEmbeddedHTML.js.map

// EXTERNAL MODULE: ./node_modules/@apollo/server/dist/esm/generated/packageVersion.js
var packageVersion = __webpack_require__(65478);
// EXTERNAL MODULE: ./node_modules/@apollo/utils.createhash/dist/index.js
var dist = __webpack_require__(91605);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 1 modules
var v4 = __webpack_require__(99215);
;// CONCATENATED MODULE: ./node_modules/@apollo/server/dist/esm/plugin/landingPage/default/index.js




function ApolloServerPluginLandingPageLocalDefault(options = {}) {
    const { version, __internal_apolloStudioEnv__, ...rest } = {
        embed: true,
        ...options
    };
    return ApolloServerPluginLandingPageDefault(version, {
        isProd: false,
        apolloStudioEnv: __internal_apolloStudioEnv__,
        ...rest
    });
}
function ApolloServerPluginLandingPageProductionDefault(options = {}) {
    const { version, __internal_apolloStudioEnv__, ...rest } = options;
    return ApolloServerPluginLandingPageDefault(version, {
        isProd: true,
        apolloStudioEnv: __internal_apolloStudioEnv__,
        ...rest
    });
}
function encodeConfig(config) {
    return JSON.stringify(encodeURIComponent(JSON.stringify(config)));
}
const getNonEmbeddedLandingPageHTML = (cdnVersion, config, apolloServerVersion, nonce)=>{
    const encodedConfig = encodeConfig(config);
    return `
 <div class="fallback">
  <h1>Welcome to Apollo Server</h1>
  <p>The full landing page cannot be loaded; it appears that you might be offline.</p>
</div>
<script nonce="${nonce}">window.landingPage = ${encodedConfig};</script>
<script nonce="${nonce}" src="https://apollo-server-landing-page.cdn.apollographql.com/${encodeURIComponent(cdnVersion)}/static/js/main.js?runtime=${apolloServerVersion}"></script>`;
};
function ApolloServerPluginLandingPageDefault(maybeVersion, config) {
    const version = maybeVersion ?? "_latest";
    const apolloServerVersion = `@apollo/server@${packageVersion/* packageVersion */.b}`;
    const scriptSafeList = [
        "https://apollo-server-landing-page.cdn.apollographql.com",
        "https://embeddable-sandbox.cdn.apollographql.com",
        "https://embeddable-explorer.cdn.apollographql.com"
    ].join(" ");
    const styleSafeList = [
        "https://apollo-server-landing-page.cdn.apollographql.com",
        "https://embeddable-sandbox.cdn.apollographql.com",
        "https://embeddable-explorer.cdn.apollographql.com",
        "https://fonts.googleapis.com"
    ].join(" ");
    const iframeSafeList = [
        "https://explorer.embed.apollographql.com",
        "https://sandbox.embed.apollographql.com",
        "https://embed.apollo.local:3000"
    ].join(" ");
    return {
        __internal_installed_implicitly__: false,
        async serverWillStart (server) {
            if (config.precomputedNonce) {
                server.logger.warn("The `precomputedNonce` landing page configuration option is deprecated. Removing this option is strictly an improvement to Apollo Server's landing page Content Security Policy (CSP) implementation for preventing XSS attacks.");
            }
            return {
                async renderLandingPage () {
                    const encodedVersion = encodeURIComponent(version);
                    async function html() {
                        const nonce = config.precomputedNonce ?? (0,dist.createHash)("sha256").update((0,v4/* default */.Z)()).digest("hex");
                        const scriptCsp = `script-src 'self' 'nonce-${nonce}' ${scriptSafeList}`;
                        const styleCsp = `style-src 'nonce-${nonce}' ${styleSafeList}`;
                        const imageCsp = `img-src https://apollo-server-landing-page.cdn.apollographql.com`;
                        const manifestCsp = `manifest-src https://apollo-server-landing-page.cdn.apollographql.com`;
                        const frameCsp = `frame-src ${iframeSafeList}`;
                        return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Security-Policy" content="${scriptCsp}; ${styleCsp}; ${imageCsp}; ${manifestCsp}; ${frameCsp}" />
    <link
      rel="icon"
      href="https://apollo-server-landing-page.cdn.apollographql.com/${encodedVersion}/assets/favicon.png"
    />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
      rel="stylesheet"
    />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Apollo server landing page" />
    <link
      rel="apple-touch-icon"
      href="https://apollo-server-landing-page.cdn.apollographql.com/${encodedVersion}/assets/favicon.png"
    />
    <link
      rel="manifest"
      href="https://apollo-server-landing-page.cdn.apollographql.com/${encodedVersion}/manifest.json"
    />
    <title>Apollo Server</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="react-root">
      <style nonce=${nonce}>
        body {
          margin: 0;
          overflow-x: hidden;
          overflow-y: hidden;
        }
        .fallback {
          opacity: 0;
          animation: fadeIn 1s 1s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          padding: 1em;
        }
        @keyframes fadeIn {
          0% {opacity:0;}
          100% {opacity:1; }
        }
      </style>
    ${config.embed ? "graphRef" in config && config.graphRef ? getEmbeddedExplorerHTML(version, config, apolloServerVersion, nonce) : !("graphRef" in config) ? getEmbeddedSandboxHTML(version, config, apolloServerVersion, nonce) : getNonEmbeddedLandingPageHTML(version, config, apolloServerVersion, nonce) : getNonEmbeddedLandingPageHTML(version, config, apolloServerVersion, nonce)}
    </div>
  </body>
</html>
          `;
                    }
                    return {
                        html
                    };
                }
            };
        }
    };
} //# sourceMappingURL=index.js.map


/***/ })

};
;