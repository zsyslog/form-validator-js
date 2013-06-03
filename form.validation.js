function vfrm() {

	var regexp = {
		email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		number: /[\s\d\+]{4,18}/i,
		price: /\d{4,18}/i
	}
	
	var error = {
		required: " es obligatorio",
		tooshort: " debe ser un texto mas largo",
		notprice: " debe ser un precio válido",
		emailformat: " debe ser una dirección de e-mail válida",
		invalidnum: " debe ser un número válido" 
		
		
	}
	
	var rt = {
		
		msg: new Array(),
		status:true
		
	}
	
	var conds = {
		
		"#text_elem"	: { v: function(e) {
							
							if( e.val() === "0" ) {
								var n = e.attr('name');
								rt.status = false;
								rt.msg.push(n + error.required);
								e.addClass("error_elem");
							}
						}
		},
		"#title"		: { v: function(e) {
							if( e.val() == "" ) {
								var n = e.attr('name');
								rt.status = false;
								rt.msg.push(n + error.required);
								e.addClass("error_elem");
								}
						},
		},
		"#textarea"		: { v: function(e) {
							if( e.val().length < 10 ) {
								var n = e.attr('name');
								rt.status = false;
								rt.msg.push(n + error.tooshort);
								e.addClass("error_elem");
								}
						},
		},
		"#price"		: { v: function(e) {
							if( !regexp.price.test(e.val()) ) {
								var n = e.attr('name');
								rt.status = false;
								rt.msg.push(n + error.notprice);
								e.addClass("error_elem");
								}
						},
		},
		"#first_name"		: { v: function(e) {
							if( e.val().length < 4 ) {
								var n = e.attr('name');
								rt.status = false;
								rt.msg.push(n + error.tooshort);
								e.addClass("error_elem");
								}
						},
		},
		"#email"		: { v: function(e) {
							
							if( !regexp.email.test(e.val()) ) {
								var n = e.attr('name');
								rt.status = false;
								rt.msg.push(n + error.emailformat);
								e.addClass("error_elem");
								}
						},
		},
		"#phone_number"		: { v: function(e) {
							if( !regexp.number.test(e.val()) ) {
								var n = e.attr('name');
								rt.status = false;
								rt.msg.push(n + error.invalidnum);
								e.addClass("error_elem");
								}
						},
		}
		
	}
	
	$.each(conds,function(k,f){
		var e = $(k);
		this.v(e);
	});

	$('#detected_errors').empty();
	if(rt.msg.length > 0)
		$.each(rt.msg,function(k,li){
			$('#detected_errors').append("<li>"+li+"<li>");
		});	
	
	return rt.status;
}

