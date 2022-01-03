/**
 * Main entry file for styles.
 */
import './app.scss';
/**
 * Main entry file for application.
 */

import { Veams } from "./app.veams";
import TsTest from "./shared/components/ts-test/scripts/ts-test"; // Initialize modules with Veams


Veams.modules.add({namespace: 'ts-test', module: TsTest});
/* @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true */

/* @INSERTPOINT :: @ref: js-init-once, @keep: true */