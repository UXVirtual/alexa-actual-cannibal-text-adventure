var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"ExamineBushesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "examine bushes" )
	},
	"GoNorthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go north" )
	},
	"GoWestIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go west" )
	},
	"GoEastIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go east" )
	},
	"GoSouthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go south" )
	},
	"UseKnifeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "use knife" )
	},
	"EnterTruckIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "enter truck" )
	},
	"OpenGloveBoxIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open glove box" )
	},
	"TakeKnifeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "take knife" )
	},
	"RunIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "run" )
	},
	"StandGroundIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "stand ground" )
	},
}