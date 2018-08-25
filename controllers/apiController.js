const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = function(app) {

    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded( { extended : true} ) );

    app.get( '/api/todos/:uname', function( req, res ) {

        console.log( 'PARAMS = ', req.params );

        Todos.find({ username : req.params.uname },
            function( err, todos ) {
                if( err ) throw err;
                res.send( todos );
            });
    });

    app.get( '/api/todo/:id', function( req, res ) {

        Todos.findById({ _id : req.params.id },
            function( err, todo ) {
                if( err ) throw err;
                res.send( todo );
            });
    });

    app.post( '/api/todo', function( req, res ) {
        
        const data = res.body;

        if( data.id ) {
            Todos.findByIdAndUpdate( data.id, {
                todo             : data.todo,
                isDone           : data.isDone,
                hasAttachment    : data.hasAttachement,
            }, function( err, todo ) {
                if( err ) throw err;
                res.send( 'Success' );
            });
        } else {
            const newTodo = Todos({
                username       : 'test', // hard code for now
                todo           : data.todo,
                isDone         : data.isDone,
                hasAttachement : data.hasAttachement,
            });
            newTodo.save( function( err ) {
                if( err ) throw err;
                res.send('Success');
            });
            
        }
    });


    app.delete( '/api/todo', function( req, res ) {

        Todos.findByIdAndRemove( req.body.id, function( err ) {
            if( err ) throw err;
            res.send( 'Success' );
        });
    });
};
