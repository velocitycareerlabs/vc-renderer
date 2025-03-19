// eslint-disable-next-line import/no-extraneous-dependencies
const { TextEncoder, TextDecoder } = require('util');

// eslint-disable-next-line import/no-extraneous-dependencies
const { TestEnvironment } = require('jest-environment-jsdom');

// https://github.com/facebook/jest/blob/v29.4.3/website/versioned_docs/version-29.4/Configuration.md#testenvironment-string
class FixJSDOMEnvironment extends TestEnvironment {
  constructor(...args) {
    super(...args);

    // https://github.com/jsdom/jsdom/issues/1724
    this.global.fetch = fetch;

    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.TextEncoder = TextEncoder;
    this.global.TextDecoder = TextDecoder;
  }
}

module.exports = FixJSDOMEnvironment;
