const { getDatasetFromUri } = require('@semapps/ldp');

const AppStatusService = {
  name: 'app-status',
  dependencies: ['api'],
  started() {
    this.broker.call('api.addRoute', {
      route: {
        name: 'app-status',
        path: '/.well-known/app-status',
        authentication: true,
        aliases: {
          'GET /': 'app-status.get'
        }
      }
    });
  },
  actions: {
    async get(ctx) {
      if (!ctx.meta.impersonatedUser) throw new Error(`This endpoint must be called with an app-specific token`);

      const appUri = ctx.meta.webId;
      const webId = ctx.meta.impersonatedUser;

      ctx.meta.dataset = getDatasetFromUri(webId);

      const localAppData = await ctx.call('ldp.remote.getStored', { resourceUri: appUri, webId });
      const remoteAppData = await ctx.call('ldp.remote.getNetwork', { resourceUri: appUri, webId });

      return { updated: localAppData['dc:modified'] != remoteAppData['dc:modified'] };
    }
  }
};

module.exports = AppStatusService;
