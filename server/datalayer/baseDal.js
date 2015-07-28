var Q = require("q");
/**
 * Directly get simple promise
 * @param  {object} err  error, if err==null, return correct promise. we ignore second parameter.
 * @param  {object} results, if err==null, we deal with results.
 * @return {promise}
 */
function promise(results, err) {
  var deferred = Q.defer();
  // has error here.
  if (err) {
    deferred.reject(err);
  } else {
    deferred.resolve(results);
  }
  return deferred.promise;
}

module.exports = {
  promise: promise
};
