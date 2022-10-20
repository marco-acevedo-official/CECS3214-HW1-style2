(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.cartoonhills = function() {
	this.initialize(img.cartoonhills);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,438);


(lib.house_generated = function() {
	this.initialize(img.house_generated);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1620);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.legR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.447)").s().p("AgShzQgEgtgIgiIgHgaQAbAvAaCRQAOBHAHA/Ig8BzQAUjBgPiPg");
	this.shape.setTransform(23.6691,23.1532,0.8853,0.8853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.447)").s().p("AgkA6QAEjXgXhfIAXgDQAggBAsAKQAVBZgOBYQgRBnhODeQAGhZAChtg");
	this.shape_1.setTransform(23.8427,70.9988,0.8853,0.8853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F4").s().p("AhcAjIA2g0QARgRAXAAQAXABARARIAzAzg");
	this.shape_2.setTransform(15.3915,103.0501,0.8853,0.8853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51A2CF").s().p("AAcDuQgDhOgMheQgWi8guhjIAYgSQAqBaAYCeQAPBkAGBnIgOAZIgOADg");
	this.shape_3.setTransform(19.3754,23.0868,0.8853,0.8853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51A2CF").s().p("AhIE9QAziTAljeQAljQgLgwIgMgIQAWAEAUAJQAGBJgjDIQglDNgvCOQgPgDgQADg");
	this.shape_4.setTransform(21.102,74.057,0.8853,0.8853);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E4").s().p("Ah7kfQAqgcA8gFQA/gGAtAcIASBNQATBYAAA2QgIAvhOCyQgmBZgmBQQgFgDgKAAQgVAAgfAKQAOj0ggltg");
	this.shape_5.setTransform(21.1902,74.282,0.8853,0.8853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E4").s().p("AgWD1Ig6gNQgMgrgYiEIgXh7QAYhEBMhAQA8g0ANAAQApAmAjCbQAdB9AAA/IhBB0QgOAEgXAAQgZAAgigGg");
	this.shape_6.setTransform(16.5424,22.2303,0.8853,0.8853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#062D57").s().p("AhCBDQgbgcAAgnQAAgmAbgcQAcgbAmgBQAnABAbAbQAdAcAAAmQAAAngdAcQgbAbgnAAQgmAAgcgbg");
	this.shape_7.setTransform(8.3534,8.8337,0.8853,0.8853);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#08386B").s().p("AAmAxQABgVgIgSQgOgighgOQgigPgjAOQAMgWAVgMQAWgNAZAAQAbAAAYAQQAYAQAJAbQANAigPAiQgPAigjAMQAKgRABgVg");
	this.shape_8.setTransform(20.4393,46.0592,0.8853,0.8853);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#062852").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_9.setTransform(19.8844,46.3476,0.8853,0.8853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legR, new cjs.Rectangle(0,0,32.1,106.2), null);


(lib.legL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.447)").s().p("AgkBqQAIg/ANhHQAaiRAagvIgGAaQgIAigEAtQgPCPAUDBg");
	this.shape.setTransform(8.3732,23.1532,0.8853,0.8853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.447)").s().p("AgyhFQgOhYAVhZQArgKAhABQAQAAAIADQgXBfADDXQACBtAHBZQhPjegRhng");
	this.shape_1.setTransform(8.2323,70.9988,0.8853,0.8853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F4").s().p("AhcAjIAzgzQAQgRAYgBQAXAAARARIA2A0g");
	this.shape_2.setTransform(16.6286,103.0501,0.8853,0.8853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51A2CF").s().p("AgpDtIgOgZQAGhoAPhjQAYifAqhZIAYASQgtBjgXC8QgLBfgDBNIAAACg");
	this.shape_3.setTransform(12.6669,23.0868,0.8853,0.8853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51A2CF").s().p("AAqE9QgviOgljNQgkjIAHhJQAUgJAWgEIgMAIQgKAwAjDQQAmDeAzCTQgQgDgPADg");
	this.shape_4.setTransform(10.9565,74.057,0.8853,0.8853);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E4").s().p("AA2E4IgQADQglhQgmhZQhOiygIgvQABg2AShYIAShNQAsgcBAAGQA8AFAqAcQghFwAODxQgegKgVAAg");
	this.shape_5.setTransform(10.9405,74.282,0.8853,0.8853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E4").s().p("AhJD3IhBh0QABhAAch8QAkibAogmQAOAAA7A0QBMBAAYBEIgXB7QgXCEgMArQgaAIggAFQgjAGgZAAQgWAAgPgEg");
	this.shape_6.setTransform(15.4998,22.2303,0.8853,0.8853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#062D57").s().p("AgsBTQgigSgMgmQgLglATgiQASgjAmgLQAkgLAjASQAjATALAlQALAlgSAiQgTAjglAMQgPAEgNAAQgWAAgWgMg");
	this.shape_7.setTransform(23.9901,8.9769,0.8853,0.8853);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#08386B").s().p("AhMApQgQgiANgiQAKgbAYgQQAYgQAbAAQAZAAAVANQAWAMAMAWQgjgOgiAPQgiAPgNAhQgHAPAAATQAAAYALATQgjgMgPgig");
	this.shape_8.setTransform(11.6297,46.0592,0.8853,0.8853);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#062852").s().p("Ag/BAQgagbAAglQAAgkAagbQAagaAlAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQglAAgagag");
	this.shape_9.setTransform(12.2021,46.3476,0.8853,0.8853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legL, new cjs.Rectangle(0,0,32.4,106.2), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.157)").s().p("AA/hiIARAPIh6CwQgWAFgQABg");
	this.shape.setTransform(28.3868,18.0377,0.8853,0.8853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.157)").s().p("AhUBpICgjWIAJACIifDag");
	this.shape_1.setTransform(18.8255,14.5629,0.8853,0.8853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.157)").s().p("AhSBAIBsiUQAagJAfgBIiJC9QgPgOgNgRg");
	this.shape_2.setTransform(12.4735,12.6153,0.8853,0.8853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#6CC8F5","#6AC6F3","#65BEEB","#5CB0DE","#4E9DCB","#3D83B2","#286494","#104071","#083566"],[0,0.298,0.459,0.588,0.698,0.8,0.89,0.98,1],0,0,0,0,0,4.5).s().p("AgbAaQgKgLgFgMQgFgNABgQQAPgRAWABQAWABAQARQAKAKAEAMQAFALgBALQgOAXgbAAQgUgBgNgQg");
	this.shape_3.setTransform(12.4836,15.9566,0.8853,0.8853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#6CC8F5","#6AC6F3","#65BEEB","#5CB0DE","#4E9DCB","#3D83B2","#286494","#104071","#083566"],[0,0.298,0.459,0.588,0.698,0.8,0.89,0.98,1],0,0,0,0,0,4.5).s().p("AgcAlQgMgGgGgLQAAgMAEgKQAGgNAJgJQAPgRAXgBQAWAAAOAQQABAQgFANQgEALgKAMQgOAQgTABQgNAAgLgGg");
	this.shape_4.setTransform(28.9322,15.9573,0.8853,0.8853);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#082D57").s().p("AAACBQhTgIg/g5QgugrgKgiQAgguAvgfQA6glBBgBIAAAAQBBABA7AlQAvAfAgAuQgKAjguAqQg/A5hUAIg");
	this.shape_5.setTransform(20.751,15.5367,0.8853,0.8853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F4").s().p("AAAChQhEgGg7gkQg7gjglg6QgKgPAAgSQABgSALgPQAng0A1ggQA9gkBEAAIAAAAQBFAAA+AkQA0AfAnA1QALAPABASQABASgKAPQgmA6g7AjQg7AkhFAGg");
	this.shape_6.setTransform(20.7098,14.2309,0.8853,0.8853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,41.4,28.5), null);


(lib.chest = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6CC8F5","#6AC6F3","#65BEEB","#5CB0DE","#4E9DCB","#3D83B2","#286494","#104071","#083566"],[0,0.298,0.459,0.588,0.698,0.8,0.89,0.98,1],0,0,0,0,0,4.1).s().p("AAAApQgRgBgLgMQgMgLABgRQAAgRAMgLQAMgMAPAAIABAAQAQAAAMAMQAMAMAAAQQAAASgOAMQgLALgQAAIAAAAg");
	this.shape.setTransform(31.9019,31.6332,0.8853,0.8853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08336B").s().p("AgjAkQgQgPABgVQAAgVAPgPQAPgPAUAAQAWAAAPAQQAPAPAAAUIAAAAQAAAWgPAPQgQAPgVAAQgUAAgPgQg");
	this.shape_1.setTransform(31.9012,31.5888,0.8853,0.8853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F4").s().p("AAbBAIhDgaQgIgEgDgHQgEgIAEgHQAAgDADgCIA0hAQAGgGAIAAQAIAAAGAFQAFAFABAGIAQBZQABAIgFAHQgFAGgIABIgEAAIgGAAg");
	this.shape_2.setTransform(15.1881,20.7618,0.8853,0.8853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51A2CF").s().p("AhoBWIgej5IAcgPIAeDzIDTBWIAAACIgKAag");
	this.shape_3.setTransform(14.5057,19.7482,0.8853,0.8853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51A2CF").s().p("AAWEzIARgRQAYhfgQi7QgPiugZgiQgWghhDhKIAWgIIAmArQApAvASAZQAYAiAPCuQARC7gYBfIgbAag");
	this.shape_4.setTransform(19.3404,28.0256,0.8853,0.8853);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgsAMQguijAQg+QBHgqBSgeQgxCIAKDnQAFB0APBYQg8h1gsidg");
	this.shape_5.setTransform(6.9528,25.3476,0.8853,0.8853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E4").s().p("AgLEAQg9h1gsicQguikAQg+QBHgqBSgeIAmArQAqAwASAYQAYAiAPCuQARC8gYBfIgbAZQhZglgggXg");
	this.shape_6.setTransform(13.3368,28.0034,0.8853,0.8853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F4").s().p("AgxA5QgFgHABgIIAPhZQACgGAFgFQAGgGAIABQAJAAAFAHIA0A/IADAFQADAHgDAIQgDAHgIAEIhDAaIgKABQgIgCgFgGg");
	this.shape_7.setTransform(48.5602,20.7644,0.8853,0.8853);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51A2CF").s().p("AiGCZIgBgCIDVhWIAdjzIAcAPIgdD5IjlBdg");
	this.shape_8.setTransform(49.2095,19.7482,0.8853,0.8853);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51A2CF").s().p("AhEEiQgYhfARi7QAPiuAYgiQAdgnBFhMIAVAIQhKBVgPAWQgYAigQCuQgQC7AYBfIARARIgUAJg");
	this.shape_9.setTransform(44.3747,28.0256,0.8853,0.8853);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6E6E4").s().p("AiIEjQgYhfARi8QAPiuAYgiQAdgnBGhMQBRAeBHAqQAQA+guCkQgsCdg9B0QgUAOg0AZIgxAVg");
	this.shape_10.setTransform(50.4005,28.0034,0.8853,0.8853);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#062852").s().p("AhMEKIhSoTIE9AAIhTITg");
	this.shape_11.setTransform(31.8797,29.3756,0.8853,0.8853);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F4").s().p("AhYB7QgPgjgQgsQgghXgDgvICagfICbAfQgDAvggBXQgQAsgQAjg");
	this.shape_12.setTransform(31.924,60.8696,0.8853,0.8853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chest, new cjs.Rectangle(0,0,63.8,71.7), null);


(lib.armR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51A2CF").s().p("AhnB9QgEgKgEgLQBDgIA9gsQA2gnAFgZQgnhGhEgqQAmASAiAcQAuAmAZAvQgGAdg/AqQhGAvhHAAIgFAAg");
	this.shape.setTransform(10.9562,11.7299,0.8853,0.8853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F4").s().p("AhhCBQgagzAJhMQAKhYA7gqQAlANAoAeQA5AqAdA2QgHAdg+AqQhGAvhIAAIgEAAg");
	this.shape_1.setTransform(10.4429,11.3757,0.8853,0.8853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51A2CF").s().p("ABYCcQgYgOg3goQhCgzgZgHIgJgCIAVguIhkhFIADgFQAchAgCgnIAPAGQAAApgZA4IBkBFIgUAqQAcAKA9AvQA2AnAZAPQAtAZAcgCIgGAPQgfAAgtgag");
	this.shape_2.setTransform(41.4785,29.8326,0.8853,0.8853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8E8").s().p("AB3CqQgDgagSgTQgUgUgWgfIgmg3QgegtgxgyQhBhEgwgVQAKgWAGgdQAxAIBMBLQA3A4AlA2IA0BIQAgAqAgAVQgGAigbAjQgQAVgTAPQAOgVgCgag");
	this.shape_3.setTransform(41.6555,32.6213,0.8853,0.8853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F4").s().p("AA+CmQhDgegxgZQhAgfg0guQgmghgHgPQA1hMAchHIARg5QAxAIBLBMQA3A3AmA3IA0BIQAgAqAgAVQgGAnghAnIggAeQgggcgzgZg");
	this.shape_4.setTransform(38.0035,32.7762,0.8853,0.8853);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#08386B").s().p("AgrA1QgDgDAKgRQAKgSASgVQASgWAPgOQAPgNAEADQADADgKARQgKASgSAVQgSAWgPAOQgMALgFAAIgCgBg");
	this.shape_5.setTransform(22.6427,25.9593,0.8853,0.8853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08386B").s().p("AgwA7QgDgDAMgUQALgSAUgYQAUgZAQgPQARgOAEADQADACgMATQgLAUgUAXQgUAYgQAQQgOAMgFAAIgCAAg");
	this.shape_6.setTransform(20.1638,24.233,0.8853,0.8853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#08386B").s().p("AgyA+QgDgDAMgUQAMgUAWgZQATgZASgRQARgPAEACQAEADgNAVQgMAUgVAYQgUAagSAQQgPANgFAAIgBAAg");
	this.shape_7.setTransform(18.1797,22.5287,0.8853,0.8853);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#08386B").s().p("AgyBFQgEgCANgXQAMgWAVgbQAVgdARgSQASgTADADQAEACgMAXQgNAWgVAcQgVAdgRASQgPAQgFAAIgBgBg");
	this.shape_8.setTransform(16.1002,21.029,0.8853,0.8853);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#08386B").s().p("AgvBLQgEgCALgYQAMgZAUgdQATgfARgUQARgVADADQAEACgLAYQgMAYgUAeQgTAfgRAUQgOATgFAAIgBgBg");
	this.shape_9.setTransform(14.0992,19.3416,0.8853,0.8853);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#08386B").s().p("AgwBMQgEgCAMgZQALgXAUgfQAUggARgUQARgVAEADQAEADgMAXQgMAZgUAeQgTAfgRAVQgPASgFAAIgBAAg");
	this.shape_10.setTransform(12.0503,17.8144,0.8853,0.8853);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#082D57").s().p("AAGBmQg5gcg4grIAriWIBAArQBHA2AkA1Ig3BZQgRgFgdgNg");
	this.shape_11.setTransform(15.9805,19.6293,0.8853,0.8853);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F4").s().p("AApBFQgTgJgWgQQghgYgPgVIAAgCIgYgXIACgBIAfgpIACgBIABABQAKAIAMACIAMABQA3AEARAMQAGARgKAlQgJAmgOARIAAACgAhDgaIAVAVIABACQAPAUAeAXQAVAPAVALQAMgSAJgjQAKgkgFgPQgRgMg1gDIgNgBQgLgDgLgHg");
	this.shape_12.setTransform(56.6732,50.1948,0.8853,0.8853);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#08386B").s().p("Ag4AGIgfgdIAxg+IAJAGQALAIAHABIArAFQAlAFAOAMQAMAWgQA0QgPAzgQAJQhLgkgdgsg");
	this.shape_13.setTransform(56.5691,50.0841,0.8853,0.8853);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#082F5C").s().p("AABAaQgagOgNgOIAeggQAuAkABACQgBARgIANIgDABQgHAAgTgJg");
	this.shape_14.setTransform(63.0588,57.0547,0.8853,0.8853);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#082F5C").s().p("AgcAQIAMgxQAZAPASATQAFAVgJAMQgbgEgYgOg");
	this.shape_15.setTransform(64.6458,53.05,0.8853,0.8853);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#082952").s().p("AgcAJIASgyQAPARAYAfQAAAQgFATg");
	this.shape_16.setTransform(64.8295,49.4423,0.8853,0.8853);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#082952").s().p("AgsgtIAKgGIBPBGQgGAHgJAJQgSAQgMABQgagvgSgyg");
	this.shape_17.setTransform(55.4891,54.6878,0.8853,0.8853);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#08336B").s().p("AgmAZIASg2IAhAOQAhAPgJAIQgLAMgaAHQgLADgJAAQgLAAgHgFg");
	this.shape_18.setTransform(58.8281,57.1473,0.8853,0.8853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armR, new cjs.Rectangle(0,0,67.4,60.2), null);


(lib.armL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51A2CF").s().p("AgqBOQg+gqgHgdQAZgvAugmQAigbAngTQhFAqgnBGQAGAZA2AnQA9AsBCAIIgIAVIgFAAQhHAAhGgvg");
	this.shape.setTransform(48.362,11.7304,0.8853,0.8853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F4").s().p("AgwBSQg+gqgHgdQAcg2A6gqQAogeAlgNQA7AqAKBYQAJBMgaAzIgEAAQhIAAhGgvg");
	this.shape_1.setTransform(48.8752,11.3763,0.8853,0.8853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51A2CF").s().p("AiNDEQAdgDAmghQAYgWAqgwIAngrQAWgWAPgJIgcglIBThYQgLgQgLgVQgQgegFgXIANgJQADAZAVAlQALATALAOIADAFIhTBYIAfApIgIADQgPAIgWAWIgqAtQgrAxgXAUQgmAjgeAGg");
	this.shape_2.setTransform(22.1336,33.3747,0.8853,0.8853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8E8").s().p("AhgDUQghgdgMghQAbgbAWguIAkhSQAag+AqhBQA7hZAugSQAKAYAPAXQgqAegyBQQglA7gVAyIgZA+QgQAjgPAXQgPAXADAaQADAZATATIABAAQgWgLgVgRg");
	this.shape_3.setTransform(21.204,35.5217,0.8853,0.8853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F4").s().p("Ah/DAQgjgbgNghQAYgYAUgpIAfhJQAYg2Amg5QAzhQApgQIAZAvQAlA5A8A4QgEAPgaAjQgkAwgyAnQgnAeg0AnQgoAfgXAeQgPgIgSgOg");
	this.shape_4.setTransform(26.175,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#08386B").s().p("AAhAkQgSgKgVgRQgWgRgOgPQgNgPACgEQADgDASAKQASAKAVARQAXARANAPQAOAPgDAEIgDABQgEAAgOgIg");
	this.shape_5.setTransform(38.9399,25.5617,0.8853,0.8853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08386B").s().p("AAlAoQgTgMgYgTQgZgUgPgQQgPgQADgEQACgDAUALQAUAMAXATQAYASAQARQAPARgCADIgDABQgFAAgPgIg");
	this.shape_6.setTransform(41.0296,23.3579,0.8853,0.8853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#08386B").s().p("AAnApQgUgLgZgVQgagUgQgRQgRgRAEgEQACgDAUAMQAVAMAZAUQAaAUAQARQARARgEAEIgCABQgFAAgQgKg");
	this.shape_7.setTransform(42.6294,21.29,0.8853,0.8853);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#08386B").s().p("AAoAuQgVgOgagYQgagWgRgUQgRgTADgDQADgEAVAPQAVAOAaAYQAbAXARATQARATgEADIgBABQgGAAgRgMg");
	this.shape_8.setTransform(44.3618,19.3865,0.8853,0.8853);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#08386B").s().p("AAnAzQgVgRgYgaQgagZgRgVQgQgVAEgEQADgDAVARQAUAQAZAaQAZAZARAWQAQAVgDADIgCAAQgEAAgSgNg");
	this.shape_9.setTransform(45.9426,17.3227,0.8853,0.8853);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#08386B").s().p("AAnAzQgTgQgbgbQgagagQgVQgRgVAEgEQAIgGA+A/QAaAZARAWQAQAVgEADIgCABQgFAAgRgOg");
	this.shape_10.setTransform(47.6544,15.3844,0.8853,0.8853);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#082D57").s().p("AhoA1QAYg7A7hDQAdgiAZgVIBICJQguA2gyAmQgZAUgQAIg");
	this.shape_11.setTransform(44.7099,17.9036,0.8853,0.8853);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F4").s().p("AgVBLQgRgOgRgiQgSgkADgQIAAgBQAIgKAZgKIAjgLIALgDQAMgGAHgJIACgBIABABIAnAiIACABIgSAbIgBABQgKAYgbAeQgTAWgQAMIgCABgAALg6IgLAFQg1APgOAOQgCAQARAgQAQAiAQAOQASgOARgUQAagcAJgXIABgCIAQgZIglgfQgJAKgKADg");
	this.shape_12.setTransform(9.9906,56.2827,0.8853,0.8853);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#08386B").s().p("AhBApQgagwAHgYQALgPAjgNQATgHAWgGQAGgCAKgKIAIgIIA8AyIgYAkQgUAxhCAyQgRgFgZgvg");
	this.shape_13.setTransform(10.2043,56.172,0.8853,0.8853);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#082F5C").s().p("AgVAmQgKgLgGgRQABgCAmgtIAkAaQgKAQgXASQgSAPgGAAIgCAAg");
	this.shape_14.setTransform(5.6883,64.4087,0.8853,0.8853);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#082F5C").s().p("AgbASIgBgMQAOgYAUgTIAXAuQgVATgaAKQgHgGgCgOg");
	this.shape_15.setTransform(3.6521,60.7093,0.8853,0.8853);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#082952").s().p("AgcALQASgkALgTIAcAuIgtAqQgIgPgEgSg");
	this.shape_16.setTransform(2.5454,57.3008,0.8853,0.8853);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#082952").s().p("AgTAsIgSgNIA/hVIAMAFQgHA0gRA0IgDAAQgLAAgTgLg");
	this.shape_17.setTransform(12.4391,60.0303,0.8853,0.8853);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#08336B").s().p("AADAeQgagBgNgJQgLgIAegVIAegUIAbAxQgIAKgZAAIgEAAg");
	this.shape_18.setTransform(10.1259,63.1255,0.8853,0.8853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armL, new cjs.Rectangle(0,0,59.3,67.8), null);


// stage content:
(lib.EVERYTHING = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun_moon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AkNEOQhvhwAAieQAAidBvhwQBwhvCdAAQCeAABwBvQBvBwAACdQAACehvBwQhwBvieAAQidAAhwhvg");
	this.shape.setTransform(64.75,67.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFB07").s().p("AkEEMQhvhvAAidQAAicBvhvQBwhvCdAAQCdAABmBwQBnBvABCbQgBCchnBvQhmBwidAAQidAAhwhvg");
	this.shape_1.setTransform(86.525,68.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6F60D").s().p("Aj7EKQhuhuAAicQAAibBuhvQBwhuCeAAQCbAABdBwQBeBvABCZQgBCahfBuQhbBwicABQiegBhwhug");
	this.shape_2.setTransform(108.3,70.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F214").s().p("AjyEIQhuhtAAibQAAibBuhtQBwhtCegBQCbABBSBxQBWBtACCXQgCCZhWBtQhTBwiaABQiegBhwhug");
	this.shape_3.setTransform(130.075,71.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDED1B").s().p("AjpEGQhthsgBiaQABiaBthsQBwhtCegBQCaABBJBxQBNBtADCVQgDCXhNBsQhJBxiaABQiegChwhtg");
	this.shape_4.setTransform(151.825,72.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E921").s().p("AjhEFQhshsgBiZQABiZBshrQBxhsCfgBQCYAABAByQBDBsAFCTQgECVhEBsQhABwiYABQifgBhxhsg");
	this.shape_5.setTransform(173.6,73.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4E428").s().p("AjYEDQhrhrgBiYQABiZBshqQBwhrCfgBQCXABA2ByQA7BrAFCRQgECTg8BrQg2BwiXACQifgChxhrg");
	this.shape_6.setTransform(195.375,75.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0E02F").s().p("AjPEBQhrhqgBiXQABiXBrhpQBxhsCfgBQCWABAtBzQAyBqAFCPQgFCRgyBqQgtBxiWACQifgChxhrg");
	this.shape_7.setTransform(217.15,76.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DCDC35").s().p("AjGEAQhqhqgBiWQABiXBqhoQBxhqCfgCQCWACAjBzQApBpAGCNQgGCPgqBqQgjBxiVACQifgChxhqg");
	this.shape_8.setTransform(238.925,77.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D7D73C").s().p("Ai9D+QhphpgCiVQACiWBphnQBxhqCggCQCUACAaBzQAgBpAHCLQgHCNghBqQgZBwiUADQiggDhxhpg");
	this.shape_9.setTransform(260.675,79.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3D343").s().p("Ai0D8QhphogBiUQABiVBphmQBxhpCggCQCTACAQBzQAYBoAHCJQgHCMgYBoQgRBxiSACQiggChxhpg");
	this.shape_10.setTransform(282.475,80.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CECE49").s().p("AirD6QhohngCiTQACiVBohlQBxhnCggDQCTACAGB0QAPBnAICHQgICKgQBnQgGBxiSADQiggDhxhog");
	this.shape_11.setTransform(304.225,81.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CACA50").s().p("AiiD4QhohmgBiSQABiUBohkQBxhnCggDQCSACgDB1IAPDrIgQDvQADBxiRADQiggEhxhng");
	this.shape_12.setTransform(326,82.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C5C556").s().p("AiZD3QhnhmgCiRQACiTBnhjQBxhnChgDQCQACgNB2QgDBlAKCDQgJCGABBmQANBxiPAEQihgEhxhmg");
	this.shape_13.setTransform(347.75,84.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C1C15D").s().p("AiTD1QhmhlgCiQQACiSBnhiQBwhmCigEQCPADgXB1QgLBmAKCAQgKCEALBmQAWBxiOADQihgEhyhlg");
	this.shape_14.setTransform(369.753,85.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BCBC64").s().p("AiPDzQhlhlgDiOQADiSBlhhQBxhlCigDQCOACggB2QgVBkALB/QgKCCATBlQAgBxiNAEQihgEhyhlg");
	this.shape_15.setTransform(392.0693,86.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B86A").s().p("AiMDyQhkhlgDiNQADiRBkhgQBxhkCigEQCNADgpB2QgeBkAMB8QgLCBAcBjQApByiMAEQihgEhyhkg");
	this.shape_16.setTransform(414.4219,88.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B4B471").s().p("AiJDwQhkhjgDiNQADiQBkhfQBxhkCigEQCMADgzB3QgmBjANB6QgNB/AlBjQAzByiLAEQiigFhxhjg");
	this.shape_17.setTransform(436.8059,89.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AFAF78").s().p("AiHDuQhjhigDiMQADiPBkheQBxhjCigFQCLAEg9B3QguBhANB5QgNB9AuBiQA8ByiKAFQiigFhyhjg");
	this.shape_18.setTransform(459.2303,90.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ABAB7E").s().p("AiFDsQhihhgDiLQADiPBjhdQBxhiCjgEQCJADhGB4Qg3BgAOB3QgOB7A2BiQBGBxiIAFQijgFhyhig");
	this.shape_19.setTransform(481.6557,92.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A6A685").s().p("AiDDqQhhhggEiKQAEiOBihcQBxhhCjgFQCJADhQB4QhABgAOB1QgOB5A/BhQBQByiIAFQiigGhzhhg");
	this.shape_20.setTransform(504.113,93.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A2A28C").s().p("AiADoQhhhggEiIQAEiNBhhbQBxhhCkgFQCHAEhZB4QhJBgAPByQgPB4BIBgQBZByiGAFQijgGhyhhg");
	this.shape_21.setTransform(526.5801,94.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9D9D92").s().p("Ah/DnQhghggEiHQAEiMBhhaQBxhhCkgFQCGAEhjB5QhSBeAQBxQgPB1BQBgQBjByiFAGQijgHhzhfg");
	this.shape_22.setTransform(549.0987,95.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ah+DlQhfhfgEiGQAEiLBghaQBxhfCkgFQCGADhtB6QhbBeARBuQgQB0BZBfQBsBxiEAGQijgGhzhfg");
	this.shape_23.setTransform(571.6073,97.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},25).wait(1));

	// house
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.bf(img.house_generated, null, new cjs.Matrix2D(0.125,0,0,0.125,-120,-101.2)).s().p("AyvP0IAAgBIKqAAIAAgBIgEgjIgNhaQgDgFgEAFIgBABQgDAEgEADIABABIAEAGIAAABQABAFgCABQgFADgDAEIABAAQgBAHgEADQgDADgEgDIgBAAIgBAFIgKADIgBAAQgBAFgEABQgMADgGgGQgGgBgDgDIAAABIgCAGQgBAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAQgWAFgRgIIgIgHQgEACgDADQgLABgMgCIgBgBIgEgEIgIAFQgIACgGgEIgBAAIgCgEIgVAEQgZAJgXgLQgDgCgEgBQgDADgIAAQgPAIgUgEQgEgBABgEQgZAMgdgHIgBgBQgGgEgDgFQgbACgggEIgBAAQgEgCAAgFQgPgCgKAHIgHAAIgIAFQgUAFgWgFIAAgBIgCgGQgBADgHgBIgIAFQgfAKgcgLQABgEgCgBQgGgDgDgEIAAgFQAAgIAFgEIgMgDIgBgCQgDgFgCgGIABgDIAEgMQgOAEgSABIgLgHIgBgBQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBABAAAAIAAgVQAEgIAHgGIABAAIACAAIABgBIAAgBIAAgCIAEAAIAAgBIABAAIABgBIABgBIAAgBIAFgCIABAAIACAAQgOgJgCgUIAAgBIAAgBQAJgSAWgCIgBgBQgCgDAAgGIAAgBIAAgBQAEgFAFgFIABAAIAAgBQgGgDgCgHIgBgBIgBAAIAAgGIAAgBIAAgCQAEgCACgDIACgBIAAAAQAUgGAVgDIgBAAQgLgQgEgVIAAgBIAAgCQACgJAFgEIACgBIAAgBIAGAAQAAAAABABQAAAAAAABQABAAAAAAQABAAABAAIAAgBIABAAIALAUIAAABIACAAQAEgXALgXIAAAAIABgBIAEgBIAEAAIAAABQAEACACADIAAABIABABIAAghIAAgBIAAgBQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAAAIAAgCIAAglIAAi5IAAgBIAAgCQgJAMgHAOIAAABIgBABIAAAPIAAABIAAABQADAAAAAGQgBApAAAqIAAABIAAACIACACIAAABIABABIAAABQABAkAKAiIAAAAIgBABQgxAFg1gGIgBAAIAAgBIAGgXIABgBIABAAQABgIACgGIABgBIABAAIAAgDIAAgBIAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgBIAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgBIABAAIAAgSIAAh3IAAgBIAAgCIAHgMIA2hcIABAAIABgBQAAgWgBgUIgBgeIgBh2IgBjQIAAgBIAAgBIAAgBIhUgBIAAAAQgDgCAAgFIAAgBIAAgBIABgJIAAgBIAAgBIAFgMIABgBIABAAIADgTIAAgBIAAAAQAIgcAGgeIAAAAIgBgBIAEgQIAAgBIAAgCIADgFIABAAIABgBQAAgJACgHQALgsALgsIAAgBIAAgBQgDgHADgIQARgwAKg2IAAgBIgBgBQACgCgBgEIAAgBIAAgBQAEgHACgHIAWhXIAAAAIgBgBQABgFAAgGIAAgCIAAgBQAJgUAFgVIAAgBIAAgCQgEACgIgCIAAgBIgBAAIAAguIAAgBIABAAIDdgCIAAgBIAAgBIAAg9IAAgBIABgBIAAAAIAJgCIAAAAIgJgCIgBgBIAAAAQgDgkABglIABgBIABgBIAAAAIAKgCIAAAAIgJgCIgBAAIAAAAIAAhKIAAgBIABAAIAJgDIAAAAIAAgBQgGgDgGABIgBgBIAAgBQgCgkAAgnIABgBIABAAIAAgBIlnAAIAAgBMAlfAAAIAAABI5zAAIAAABIA1AAIg0AAIAAABIAAACQAAAlgBAjIAAABIAAACQgFADgLgCIAAABIAAABQAFAHAFgHIAAAAIAAABQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIABAAIABABIgCBIIAAABIgCAAIgLABIAAABIANACIAAAAIACAAIAABLIgBAAIgBABIAAAAIgNABIAAABIANACIAAAAIAAACQACAcAAAgIAAABIAAABIXYADIAAAAIABABQAAAZAGAUIAAABIABAAQAEAdAKAaIAAABIAAACQAJA7ASA2IABACIAAABQAFAqAOAvIAAABIAAABQAGAJACANIABABIAAABQAGAyAQA2IAAAAIABABQAKA2AOA1IAAABIAAABQAEAFACAHIABABIABAAIAAAHIAAAAIABABIgEAFIgBABIgBABIhuABIAAABIAAABIAAA+IgBD5IAAD4IABD5IAAAAIABABQAVgKAUAKIAAABIADAAIABAJIAAABIAAABIAAABIAAAAIAWABIAEADIAAABIABABQACADgDAFIAAABIgBABQAAABAAAAQABABAAAAQABAAAAgBQABAAAAAAIABgCIAAgBIAGABIAAABQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAAABIABAAIAAADIAAACIAAABIAPAAIABABIABABQAEABgBAGIAAABIAAABIgGAIIAAABIABAAQAMAFADAOIAAAAIABABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAIAAACIAAABQgDABAEABIABAAIACABQANAFAGANIABABIABAAIAAA/IgBgvIgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIgHADIgCADIgGABQAMAFADAOIgBABIgBAGIgHAFIAAABQALAJAAAUIgBAAIgBAFQgHACABACQABADADABIAAABIACAHIgBAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIgGADIAAABIAAAHIgHAFQgFgCgBACIgBAAIgDAFIgJACIAAABIgEAFQgNADgGgGQgGgEgEAEQgBAFgFAAQgLAFgOgEIgDgCIgHgBIgLgIQgKAJgSgEIgBgBQgCgCgCgDQgCADgGgBIgCADQgHABgHgBIAAgBQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQgPgBgMAJQgdADgSgNQgFABgDACIgGAAQgUALgSgKQgHgDgFAGQgQAEgTgBQgDgFgCADIgKgIIAAgCIgCgEQgbAKgfgJQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIAAgBIgCgDQABgGgDAAIgMAGIgFAAQgZAOgigDQgDgCAAgEQgbAGgiADQgDgCgEAAQgLgFgIgJIAAgBIAAgNIABAAQABgDACgCQgHgCgHgDIAAgBIgCgEIg2AAIAAABIAAABQgBAtgEApIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAIgBAAQgBAIACAFIgBAAQABAMgCAKIKkAAIAAABgAyvvyIAtAAIgtAAg");
	this.shape_24.setTransform(130,372.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).to({_off:true},48).wait(1));

	// Armature_3
	this.ikNode_1 = new lib.chest();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(411.05,359.6,0.7288,0.793,0,0,0,30.3,31.8);

	this.ikNode_2 = new lib.head();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(413.85,327.5,0.7288,0.7929,0.0088,0,0,22.9,4.8);

	this.ikNode_4 = new lib.armL();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(386.2,344.2,0.7288,0.7929,-23.8579,0,0,48.7,6.5);

	this.ikNode_6 = new lib.legL();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(394.55,439.65,0.7287,0.7928,-0.4224,0,0,11,77.4);

	this.ikNode_8 = new lib.legR();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(429.1,433.05,0.7288,0.793,0,0,0,19.6,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_8,p:{scaleY:0.793,x:429.1,y:433.05}},{t:this.ikNode_6,p:{scaleY:0.7928,rotation:-0.4224,x:394.55,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7288,rotation:-23.8579,regX:48.7,x:386.2,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7288,scaleY:0.7929,rotation:0.0088,x:413.85}},{t:this.ikNode_1,p:{regX:30.3,scaleY:0.793,y:359.6}}]}).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:-20.8462,regX:48.7,x:386.2,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:-17.8334,regX:48.8,x:386.25,y:344.15,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:-14.8204,regX:48.6,x:386.1,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:-11.8067,regX:48.7,x:386.2,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:-8.7929,regX:48.7,x:386.15,y:344.3,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:-5.7813,regX:48.6,x:386.1,y:344.3,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:-2.7688,regX:48.7,x:386.15,y:344.2,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:0.2393,regX:48.8,x:386.25,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:3.2524,regX:48.7,x:386.15,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:6.2658,regX:48.8,x:386.25,y:344.25,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:9.2787,regX:48.6,x:386.05,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:12.2909,regX:48.6,x:386.05,y:344.2,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:15.3045,regX:48.8,x:386.2,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:18.3167,regX:48.8,x:386.2,y:344.3,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:21.3296,regX:48.7,x:386.15,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:24.3415,regX:48.8,x:386.2,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:27.3551,regX:48.7,x:386.15,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:30.368,regX:48.7,x:386.1,y:344.25,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:33.38,regX:48.7,x:386.1,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:36.394,regX:48.7,x:386.1,y:344.2,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:39.4069,regX:48.8,x:386.15,y:344.3,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:42.4199,regX:48.7,x:386.1,y:344.25,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:45.4327,regX:48.7,x:386.15,y:344.2,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0077,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:48.4453,regX:48.7,x:386.15,y:344.15,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:51.458,regX:48.6,x:386.05,y:344.1,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:54.4716,regX:48.7,x:386.1,y:344.2,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:57.4841,regX:48.7,x:386,y:344.15,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:60.4971,regX:48.7,x:386.05,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:63.5094,regX:48.7,x:386.1,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:66.5215,regX:48.7,x:386.1,y:344.15,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:69.5342,regX:48.7,x:386,y:344.15,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4213,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:72.546,regX:48.7,x:386.1,y:344.15,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:75.5594,regX:48.7,x:386.05,y:344.1,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:78.5737,regX:48.7,x:386.1,y:344.1,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:81.5864,regX:48.7,x:386.05,y:344.15,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:84.5977,regX:48.8,x:386,y:344.2,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:87.6109,regX:48.6,x:386,y:344.05,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:90.6197,regX:48.8,x:386.05,y:344.15,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:93.6324,regX:48.6,x:386.05,y:344,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:96.6452,regX:48.7,x:386.1,y:344.1,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:99.6579,regX:48.8,x:386.05,y:344.2,scaleY:0.7928}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:102.6716,regX:48.6,x:386,y:344,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:105.6834,regX:48.6,x:386.05,y:344,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.4191,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:108.6972,regX:48.7,x:386,y:344.1,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0055,x:413.8}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.418,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:111.7089,regX:48.7,x:386,y:344.1,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0044,x:413.85}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.418,x:394.5,y:439.65}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:114.7224,regX:48.8,x:385.95,y:344.15,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0044,x:413.85}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[{t:this.ikNode_8,p:{scaleY:0.7929,x:429.05,y:433}},{t:this.ikNode_6,p:{scaleY:0.7927,rotation:-0.418,x:394.5,y:439.6}},{t:this.ikNode_4,p:{scaleX:0.7287,rotation:117.7344,regX:48.6,x:386,y:344,scaleY:0.7929}},{t:this.ikNode_2,p:{scaleX:0.7287,scaleY:0.7928,rotation:0.0044,x:413.85}},{t:this.ikNode_1,p:{regX:30.4,scaleY:0.7929,y:359.55}}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.instance = new lib.armR();
	this.instance.setTransform(456.45,363.45,0.729,0.7931,0,0,0,33.7,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},48).wait(1));

	// hills
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.bf(img.cartoonhills, null, new cjs.Matrix2D(1.095,0,0,1.096,-328,-356.4)).s().p("EgyJATUMAAAglhIADAAQAAAJAKAEQAEABAOAAIB8gEQAPAAAFgHIAVgFQAPgBAFgDIABAAIDRgFIATAAIgIAAQETgBEuAIIBeADIACABQAMAEAJAAIALAAIAUAFQFXBoE7AGIACACIAHAAIAIADIACAAIgDAAQAEAFAJADQBAAGArAfIAKgGQAbgNAggFIAHgHIAOAAQAEgGAHgBQAbgEARgPIAIgEIAFgEQA9gIA8gMIABAAQBygKB3gaQCvgnCngaQEwgwEYgEIA6gBIgVAAQEWAAEAAoIgkgHIAFABIA7AKQFUA+E7CKIASAIQACABAAAGIA3ATIAAADQAwAOAuARIBMAeIAzAWIACABIAIAFIAJAFIABAEIAHAAQASAKAMAFIARAEIABADIANAAIASACQAbACAkgBIEGgGQAXgBAOgCIARAAQHiAMH7gKMAAAAgag");
	this.shape_25.setTransform(319.975,356.3875);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).to({_off:true},48).wait(1));

	// sky
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#87CEEB").s().p("EgyJAllMAAAhLJMBkTAAAMAAABLJg");
	this.shape_26.setTransform(319.975,240.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8EC8DE").s().p("EgyJAllMAAAhLJMBkTAAAMAAABLJg");
	this.shape_27.setTransform(320.025,240.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#94C2D1").s().p("EgyJAllMAAAhLJMBkSAAAMAAABLJg");
	this.shape_28.setTransform(320.05,240.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9BBDC4").s().p("EgyIAlkMAAAhLHMBkSAAAMAAABLHg");
	this.shape_29.setTransform(320.1,240.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A2B7B7").s().p("EgyIAlkMAAAhLHMBkRAAAMAAABLHg");
	this.shape_30.setTransform(320.125,240.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A8B1AA").s().p("EgyIAlkMAAAhLHMBkRAAAMAAABLHg");
	this.shape_31.setTransform(320.2,240.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AFAB9D").s().p("EgyIAlkMAAAhLHMBkRAAAMAAABLHg");
	this.shape_32.setTransform(320.225,240.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B6A690").s().p("EgyIAlkMAAAhLGMBkRAAAMAAABLGg");
	this.shape_33.setTransform(320.275,240.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BCA083").s().p("EgyHAljMAAAhLGMBkQAAAMAAABLGg");
	this.shape_34.setTransform(320.3,240.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C39A76").s().p("EgyIAljMAAAhLFMBkQAAAMAAABLFg");
	this.shape_35.setTransform(320.35,240.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CA9468").s().p("EgyIAljMAAAhLFMBkRAAAMAAABLFg");
	this.shape_36.setTransform(320.4,240.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D08E5B").s().p("EgyHAljMAAAhLFMBkPAAAMAAABLFg");
	this.shape_37.setTransform(320.425,240.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D7894E").s().p("EgyHAljMAAAhLEMBkPAAAMAAABLEg");
	this.shape_38.setTransform(320.475,240.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DE8341").s().p("EgyHAliMAAAhLDMBkPAAAMAAABLDg");
	this.shape_39.setTransform(320.5,240.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E47D34").s().p("EgyHAliMAAAhLDMBkPAAAMAAABLDg");
	this.shape_40.setTransform(320.575,239.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB7727").s().p("EgyHAliMAAAhLDMBkOAAAMAAABLDg");
	this.shape_41.setTransform(320.6,239.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2721A").s().p("EgyGAliMAAAhLDMBkOAAAMAAABLDg");
	this.shape_42.setTransform(320.65,239.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F86C0D").s().p("EgyGAlhMAAAhLBMBkNAAAMAAABLBg");
	this.shape_43.setTransform(320.675,239.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("EgyGAlhMAAAhLBMBkNAAAMAAABLBg");
	this.shape_44.setTransform(320.725,239.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC5200").s().p("EgyKAllMAAAhLJMBkVAAAMAAABLJg");
	this.shape_45.setTransform(321.1,240.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#993D00").s().p("EgyOAloMAAAhLPMBkdAAAMAAABLPg");
	this.shape_46.setTransform(321.475,240.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#662900").s().p("EgySAlsMAAAhLXMBklAAAMAAABLXg");
	this.shape_47.setTransform(321.875,241.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#331400").s().p("EgyWAlvMAAAhLdMBksAAAMAAABLdg");
	this.shape_48.setTransform(322.25,241.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("EgyZAlzMAAAhLkMBkzAAAMAAABLkg");
	this.shape_49.setTransform(322.625,241.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,645.3,483.8);
// library properties:
lib.properties = {
	id: 'E99111EE73A887479B29167EAD5BFBE4',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cartoonhills.png", id:"cartoonhills"},
		{src:"images/house_generated.jpg", id:"house_generated"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E99111EE73A887479B29167EAD5BFBE4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			//container.style.width = w * sRatio + 'px';				
			//container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;