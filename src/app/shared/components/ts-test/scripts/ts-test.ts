/**
 * Description of TsTest.
 * Class properties and decorators are supported.
 *
 * @module TsTest
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import Component from '@veams/component';

class TsTest extends Component {
	/**
	* Class Properties
	*/

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj: any) {
		let options = {
			selectors: {},
			classes: {}
		};

		super(obj, options);
	}

	didMount() {
		console.log('Component TsTest mounted!');
		alert('nonen');
		let emil: string = 'Emil';
		console.log(emil);
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}
}

export default TsTest;
