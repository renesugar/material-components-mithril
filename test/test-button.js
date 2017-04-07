/*eslint-env mocha, browser*/

import assert from "assert";
import m from "mithril";
import button from "../components/button";

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

describe("component-button", () => {
    var parent1;
    var parent2;
    beforeEach(() => {
        parent1 = document.createElement("div");
        parent2 = document.createElement("div");
    });
    it("should draw default button.", () => {
        m.render(parent1, m(button, "MDCButton"));
        var actual = parent1.innerHTML;
        m.render(parent2, m({view(){return m("button.mdc-button", "MDCButton");}}));
        var expected = parent2.innerHTML;
        assert.equal(actual, expected);
    });
    it("should draw customized DOM when tagName and classNames supplied.", () => {
        m.render(parent1, m(button, {tagName: "a", class: "test"}, "Link Button"));
        var actual = parent1.innerHTML;
        m.render(parent2, m({view(){return m("a.test.mdc-button", "Link Button");}}));
        var expected = parent2.innerHTML;
        assert.equal(actual, expected);
    });
    it("should trigger events when event methods are supplied.", () => {
        var output = "";
        m.render(parent1, m(button, {onclick(){output+="clicked.";}}));
        eventFire(parent1.childNodes[0], "click");
        assert.equal(output, "clicked.");
    });
    it("should trigger each lifecycle events when lifecycle methods are supplied.", done => {
        var output = "";
        m.render(parent1, m(button, {oncreate(){output+="created.";}}));
        assert.equal(output, "created.");
        setTimeout(() => {
            console.log(parent1.innerHTML);
            done();
        }, 1000);
    });
});