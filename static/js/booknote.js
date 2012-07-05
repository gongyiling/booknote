"use strict";
/** @suppress {duplicate}*/var booknote;
if (typeof(booknote)=="undefined") {booknote = {};}

booknote.ErrorCode= PROTO.Enum("booknote.ErrorCode",{
		ERROR :-1,
		SUCCESS :0});
booknote.Head = PROTO.Message("booknote.Head",{
	cmd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.uint32;},
		id: 1
	},
	ecode: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.uint32;},
		id: 2
	},
	seq: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.uint32;},
		id: 3
	}});
booknote.ReqRegiste = PROTO.Message("booknote.ReqRegiste",{
	head: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return booknote.Head;},
		id: 1
	},
	user: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return PROTO.string;},
		id: 2
	},
	passwd: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return PROTO.string;},
		id: 3
	},
	verify_code: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return PROTO.string;},
		id: 4
	}});
booknote.ReqUserLogin = PROTO.Message("booknote.ReqUserLogin",{
	head: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return booknote.Head;},
		id: 1
	},
	user: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 2
	},
	passwd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 3
	}});
booknote.ResUserLogin = PROTO.Message("booknote.ResUserLogin",{
	head: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return booknote.Head;},
		id: 1
	}});
