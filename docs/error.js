import path from "path";

export default function errorUtility() {
  return {
    name: 'error-utility',
    configureServer(server) {
      return () => {
        console.log(server.middlewares.eventNames());
        server.middlewares.use(function (err, req, res, next) {
          console.log(`::error file=${err.loc.file},line=${err.loc.line},col=${err.loc.column}::Error in ${path.basename(err.loc.file)} at line ${err.loc.line}: ${err.message}`);
          next(err)
        })
      }
    }
  }
}