import Vue, { PluginObject } from "vue";

declare class VueTelInput implements PluginObject<{}> {
  install(vue: typeof Vue, options?: {}) : void;
}

declare const _plugin: VueTelInput;

export default _plugin;

