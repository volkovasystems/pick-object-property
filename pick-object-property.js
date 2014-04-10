try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "pickObjectProperty",
		[
			"argumentsToArray"
		],
		function construct( ){
			/*
				This will pick the given properties from the object.

				You can specify the object then provide the properties as
					succeeding parameters.

					pickObjectProperty( myObject, "propertyA", "propertyB", "propertyC" );
			*/
			var pickObjectProperty = function pickObjectProperty( object, propertyList ){
				var parameters = argumentsToArray( arguments );

				propertyList = parameters.slice( 1 );
				var propertyListLength = propertyList.length;

				var property;
				for( var index = 0; index < propertyListLength; index++ ){
					property = propertyList[ index ];
					if( typeof property != "string" ){
						throw new Error( "invalid property" );
					}
				}

				var pickedPropertySet = { };
				for( var index = 0; index < propertyListLength; index++ ){
					property = propertyList[ index ];
					pickedPropertySet[ property ] = object[ property ];
				}

				return pickedPropertySet;
			};

			base.pickObjectProperty = pickObjectProperty;
		} );
} )( base );