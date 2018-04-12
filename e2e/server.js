const express = require('express');
const proxy = require('http-proxy-middleware');
const ngApimockRequest = require('ng-apimock/lib/utils');
const ngApimock = require('ng-apimock')();

/**
 * - Register all available mocks
 * - Generate interface
 * - Watch mocks
 */
const ngApimockConfig = {
    src: "./e2e/mocks",
    outputDir: ".tmp/ngApimock",
};
ngApimock.run(ngApimockConfig);
ngApimock.watch(ngApimockConfig.src);

const app = express();

const proxyOptions = {
    target: 'https://nodejs-example-app.herokuapp.com/heroes',
    changeOrigin: true,
    ws: false,
};
const rtcProxy = proxy(proxyOptions);

app.set('port', (process.env.PORT || 3000));
app.use('/mocking', express.static('.tmp/ngApimock'));

app.use(ngApimockRequest.ngApimockRequest);
app.on('proxyRes', function (proxyRes, req, res) {
    res.setHeader('Origin', 'https://angularexampleapp.com');
});
app.use('/', rtcProxy);
app.listen(app.get('port'), function () {
    console.log('app running on port', app.get('port'));
});
