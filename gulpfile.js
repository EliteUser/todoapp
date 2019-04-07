const gulp = require(`gulp`);
const ghpages = require('gh-pages');

gulp.task('gh-pages', function () {
  return ghpages.publish('./build', function (err) {
  });
});