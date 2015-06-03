'use strict';

import { DeviceEventEmitter } from 'react-native';
import EventEmitter from 'bh5-emitter';
import { GCM } from 'NativeModules';

export class Client extends EventEmitter {
  constructor() {
    super();
    this._gcm = GCM;
    DeviceEventEmitter.addListener('GCMEvent', (e) => {
      this.emit(e.type, e.data);
    });
  }

  register() {
    this._gcm.register();
  }

  topicSubscribe(topic) {
    this._gcm.topicSubscribe(topic);
  }

  topicUnsubscribe(topic) {
    this._gcm.topicUnsubscribe(topic);
  }

  sendMessage(data) {
    this._gcm.sendMessage(data);
  }
}

export default new Client();
