var args = [ 'start' ];
var opts = { stdio: 'inherit', cwd: 'server', shell: true };
require('cross-spawn').spawn('npm', args, opts);
