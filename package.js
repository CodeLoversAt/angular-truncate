var options = {
  "version": "0.1.2",
  "where": "client",
  "packageName": "codelovers:angular-truncate"
};

Package.describe({
  name: options.packageName,
  version: options.version,
  summary: 'Angular Truncate - Ellipsis for your templates',
  git: 'https://github.com/sparkalow/angular-truncate.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0', 'METEOR@1.0');
  api.use('angular:angular@1.2.0', options.where);
  api.addFiles('src/truncate.js', options.where);
});
