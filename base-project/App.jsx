App = React.createClass({
    // Required so that getMeteorData works properly
    mixins: [ReactMeteorData],

    // use methods like these to retrieve database data from the server
    getMeteorData() {
        return {
            data: "This is some data from the server"
        };
    },
    render() {
        // the {..}'s evaluate an expression before rendering it
        return (
            // "this.getMeteorData() returns some JSON
            // we are doing to render the "data" element in it
            <div>
                <p> Hello from Reactjs + Meteor! </p>
                <p> {this.getMeteorData()["data"]} </p>
            </div>
        );
    }
});
