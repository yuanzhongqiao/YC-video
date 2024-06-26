import {FFmpegExporterClient, ImageExporter} from '../app';
import {makePlugin} from './makePlugin';

/**
 * The default plugin included in every Motion Canvas project.
 *
 * @internal
 */
export default makePlugin({
  name: '@revideo/core/default',
  exporters() {
    return [FFmpegExporterClient, ImageExporter];
  },
});
