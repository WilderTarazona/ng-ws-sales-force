import { NgModule } from '@angular/core';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpClientModule} from '@angular/common/http';
import {ProfileService} from './profile.service';
import {environment} from '../../../../../environments/environment';
import {CampaignService} from './campaign.service';
import {OptionService} from './option.service';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [ProfileService, CampaignService, OptionService]
})
export class GraphqlModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: environment.ENDPOINTS.GRAPH_PROFILE }),
      cache: new InMemoryCache()
    });
  }
}
