TinyCore.debugMode=!0,describe("code",function(){beforeEach(function(a){TinyCore.AMD.require(["code"],function(){void 0!==a&&a()})}),it("should exist",function(){oTestedModule=TinyCore.Module.instantiate("code"),expect(oTestedModule).toBeTruthy()}),describe("onStart",function(){beforeEach(function(){spyOn(oTools,"getDataModules"),spyOn(oTools,"trackModule"),spyOn(oTestedModule,"autobind"),oTestedModule.onStart()}),it("should exist",function(){expect(oTestedModule.onStart).toBeTruthy()}),it('should call oTools.trackModule with "JS_Libraries", "call", "code"',function(){expect(oTools.trackModule).toHaveBeenCalledWith("JS_Libraries","call","code")})}),describe("autobind",function(){beforeEach(function(){var a=$("<pre><code></code></pre>");spyOn(hljs,"highlightBlock"),oTestedModule.autobind(a[0])}),it("should exist",function(){spyOn(oTestedModule,"autobind"),expect(oTestedModule.autobind).toBeTruthy()}),it("should call hljs highlightBlock",function(){expect(hljs.highlightBlock).toHaveBeenCalled()})})});