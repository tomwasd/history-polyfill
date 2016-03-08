// Make sure that polyfilled links are redirected to correct links in 
// supporting browsers. Enables sharing links between IE and non-IE
// e.g. http://example.com/#/some-path -> http://example.com/some-path
var basePath = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '';
history.redirect('/', basePath + '/');