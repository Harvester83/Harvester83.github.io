const bs = require("browser-sync");

function browserSyncHTML() {
  bs.init({
    server: {
      baseDir: "./",
      host: "192.168.0.104",
    },
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", function (req, res) {
          res.writeHead(302, {
            location: "404.html",
          });
          res.end("Redirecting!");
        });
      },
    },
    browser: "chrome",
    logPrefix: "BS-HTML:",
    logLevel: "info",
    logConnections: true,
    logFileChanges: true,
    open: true,
  });
}

module.exports = browserSyncHTML;
