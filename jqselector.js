/**
* JqSelector
*
* jQuery chooser plugin
*
* author: xuyong
* mail: steve.xu@126.com
*
**/
(function($){
	var JqSelector = function(showerEl, posterEl){
		this.showerEl = $(showerEl);
		this.posterEl = $(posterEl);
		this.items = [];
	}
	
	JqSelector.prototype = {
		add: function(item){
			if(!this.hasItem(item)){
				var me = this;
				this.items.push(item);
				
				var content = '<div>'+ item +'<span><a href="javascript:void(0)" style="color:red; margin-left:2px;">x</a></span></div>';
				this.showerEl.append(content);
				
				this.posterEl.val(this.items.join());
				
				$("a", this.showerEl).each(function(idx, el){
					$(this).unbind('click');
					$(this).bind('click', function(){
						var text = $(this).parent().parent().text();
						text = text.substring(0, text.length - 1); // remove x
						
						$(this).parent().parent().remove();
						me.removeItem(text);
					})
				})
			}
		},
		
		hasItem: function(item){
			for(var i = 0; i < this.items.length; i++){
				if(this.items[i] == item){
					return true;
				}
			}
			return false;
		},
		
		removeItem: function(item){
			if(this.hasItem(item)){
				var index = 0;
				for(var i = 0; i < this.items.length; i++){
					if(this.items[i] == item){
						index = i;
						break;
					}
				}
				this.items.splice(index, 1);
			}
			
			// remove from posterEl
			this.posterEl.val(this.items.join());
		}
		
	}
	
	$.fn.JqSelector = function(param){
		return this.each(function() {
			var $this = $(this), data = $this.data('JqSelector')
			if(!data)
				$this.data('JqSelector', (new JqSelector(this, param.posterEl)))
			
			if(!!param && param.op === "add"){
				// add a record
				data.add(param.item);
			} 
		});
	}
	
	$.fn.JqSelector.Constructor = JqSelector;
})(jQuery);