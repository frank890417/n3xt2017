module.exports = {
  pluginOptions: {
    prerenderSpa: {
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
