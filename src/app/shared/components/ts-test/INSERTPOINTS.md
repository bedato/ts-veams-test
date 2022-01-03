
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: ts-test, @tag: component-partial }}
{{#with ts-test.variations.default}}
	{{> ts-test}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-modules-@1 //
Veams.modules.add({namespace: 'ts-test', module: TsTest});
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for TsTest
 */
EVENTS.tsTest = {
	eventName: 'tsTest:eventName'
};
// @INSERT :: END
```
