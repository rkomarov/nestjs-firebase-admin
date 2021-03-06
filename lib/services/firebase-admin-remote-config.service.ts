import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseRemoteConfigService implements admin.remoteConfig.RemoteConfig {
  constructor(public readonly app: admin.app.App) {}

  get remoteConfig() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return this.app.remoteConfig();
  }

  getTemplate(): Promise<admin.remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.getTemplate();
  }
  validateTemplate(
    template: admin.remoteConfig.RemoteConfigTemplate,
  ): Promise<admin.remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.validateTemplate(template);
  }
  publishTemplate(
    template: admin.remoteConfig.RemoteConfigTemplate,
    options?: { force: boolean },
  ): Promise<admin.remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.publishTemplate(template, options);
  }
  createTemplateFromJSON(json: string): admin.remoteConfig.RemoteConfigTemplate {
    return this.remoteConfig.createTemplateFromJSON(json);
  }
}
