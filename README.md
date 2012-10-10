JqSelector
==========

jQuery Chooser plugin

Example:
js code:
==========
$("#added11").JqSelector({posterEl:'#fromtest11'});
				
$("#btn11").click(function(){
	var value = $("#input11").val();
	if(value.length > 0){
		$("#added11").JqSelector({op:"add", item:value, posterEl:'#fromtest11'});
	}
});

html code
==========
<form action="#", method="post">
			<label>selector:</label>
			<select id="from-select">
				<option >11</option>
				<option >22</option>
			</select>
			<div>
				<a href="javascript:void(0)">[add11]</a>
			</div>
			<div style="display:block">
				<label>11l</label>
				<input type="text" id="input11" />
				<input type="button" value="add" id="btn11"/>
			</div>
			<div id="added11">
				
			</div>
			<div>
				<a href="javascript:void(0)">[add22]</a>
			</div>
			<div id="input11container" style="display:none">
				<label>22l</label>
				<input type="text" id="input22" />
				<input type="button" value="add" id="btn22" />
			</div>
		</form>
		<form action="#", method="post">
			<input type="hidden" name="formtest[i11]" id="fromtest11" />
			<input type="hidden" name="formtest[i22]" id="fromtest22" />
			<input type="submit" value="submit"/>
		</form>