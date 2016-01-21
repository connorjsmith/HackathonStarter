// Define a new mongo collection (basically an SQL table)
// We can access this collection through the following commands
// % meteor mongo
// > db.example.insert({<data>});
Example = new Mongo.Collection("example");
// This file is used to start up the application and delegate requests,
// both on the server and the client
if (Meteor.isClient) {
    Meteor.startup(function() {
        // Replace #render-target div with our app code described in App.jsx
        ReactDOM.render(<App />, document.getElementById("render-target"));
    });
} else if (Meteor.isServer) {
    // server specific code likely to do with the database and API
}

// Define our meteor access methods here
Meteor.methods({
    // we can call this method from the client using
    // Meteor.call("addExample", data);
    addExample(data) {
        // Check if the user is authorized
        if (! Meteor.userId()) {
            // user not authorized
        }

        Example.insert({
            data: data
        });


    }
});
