FrontendCore.debug=!0,describe("dropdown",function(){var a;beforeEach(function(a){FrontendCore.require(["dropdown"],function(){void 0!==a&&a()})}),it("should exist",function(){a=FrontendCore.instantiate("dropdown"),expect(a).toBeTruthy()}),describe("onStart",function(){var b;beforeEach(function(){b=$('<nav class="navigation" data-fc-modules="dropdown"><ul> <li class="navigation-dropdown"><a title="Fruits" href="#fruits" id="toggle">Fruits</a><ul id="fruits"><li><a title="Oranges" href="#tab1">Oranges</a></li><li><a title="Apples" href="#tab2">Apples</a></li><li><a title="Bananas" href="#tab3">Bananas</a></li></ul></li><li class="navigation-dropdown"><a title="Vegetables" href="#vegetables">Vegetables</a> <ul id="vegetables"><li><a title="Menu item 1" href="#tab1">Oranges</a></li><li><a title="Menu item 2" href="#tab2">Apples</a></li><li><a title="Menu item 3" href="#tab3">Bananas</a></li></ul></li><li><a title="Menu item 3" href="#tab3">Lettuce</a></li></ul></nav>'),spyOn(FrontendTools,"getDataModules"),spyOn(FrontendTools,"trackModule"),a.onStart()}),afterEach(function(){b.remove()}),it("should exist",function(){expect(a.onStart).toBeTruthy()}),it('should call FrontendTools.trackModule with "JS_Libraries", "call", "dropdown"',function(){expect(FrontendTools.trackModule).toHaveBeenCalledWith("JS_Libraries","call","dropdown")})}),describe("slideToggle",function(){var b;beforeEach(function(){b=$('<a href="#toggle-slide" data-fc-modules="toggle" class="button">Click to toggle Class</a><div id="toggle-slide" class="box-invert"><p>Hello World!</p></div>'),spyOn(jQuery.fn,"slideToggle"),a.slideToggle(b[0])}),afterEach(function(){b.remove()}),it("should exist",function(){spyOn(a,"slideToggle"),expect(a.slideToggle).toBeTruthy()}),it("should Call jQuery slideToggle",function(){expect(jQuery.fn.slideToggle).toHaveBeenCalled()})})});