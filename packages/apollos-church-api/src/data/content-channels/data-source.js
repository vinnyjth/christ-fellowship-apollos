import RockApolloDataSource from 'apollos-church-api/src/connectors/rock/data-source';

export default class ContentChannel extends RockApolloDataSource {
  resource = 'ContentChannels';

  all = () =>
    this.request()
      .expand('ChildContentChannels')
      .get();

  // Parent Content Channels
  getRootChannels = () =>
    this.request()
      .filter('Id eq 11')
      .filter(`Id eq 13`)
      .get();

  getFromId = (id) =>
    this.request()
      .filter(`Id eq ${id}`)
      .expand('ChildContentChannels')
      .top(1)
      .transform((list) => list[0])
      .get();
}
