module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('webpack-dev-server no está definido');
        }
        return middlewares;
      }
    }
  };
  