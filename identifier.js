// JavaScript Document

var fs=require('fs')
 	util = require("util");
var path=require('path');
var mime = require("mime");

fs.readdir(__dirname + '/jsfiles',function(err,list)
	{
	if(err)
			{
				return callback(err,list);
			}
			var data=new Array()
			for(i=0;i<list.length;i++)
			{
				if(path.extname(list[i])==('.js'))
				{data.push(path.basename(list[i]))
				console.log(list[i])}
			}	
			
	})
	
fs.readdir(__dirname + '/assets',function(err,list)
	{
	if(err)
			{
				return callback(err,list);
			}
			var images=new Array()
			for(i=0;i<list.length;i++)
			{
				if(path.extname(list[i])==('.jpg'))
				{
					var dataUri=base64Image(__dirname + '/assets/'+path.basename(list[i]))
					//images.push(dataUri)
					//console.log(dataUri)
					console.log(list[i]);
					images.push(dataUri);
					fs.writeFile('uris.txt',images,function(err){
					if(err)
						{
							return err
						}
					})
				}
			}	
			
	})	
	
	function base64Image(src) {
    var data = fs.readFileSync(src).toString("base64");
    return util.format("data:%s;base64,%s", mime.lookup(src), data);
}