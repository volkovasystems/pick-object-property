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

				/*
					If we have property list, otherwise get all.

					This will actually do a shallow clone but this is
						not intended for that.

					This measure is done so that we are prepared if the developer
						forgot to add the property list.
				*/
				if( parameters.length > 1 ){
					propertyList = parameters.slice( 1 );	
				}else{
					propertyList = Object.keys( object );
				}

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
					if( property in object ){
						pickedPropertySet[ property ] = object[ property ];	
					}
				}

				return pickedPropertySet;
			};

			base.pickObjectProperty = pickObjectProperty;
		} );
} )( base );