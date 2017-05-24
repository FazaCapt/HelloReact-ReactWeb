var Greeter = React.createClass({
    render: function(){
        return(
          <div>
            <h1>Hello React JSX component!</h1>
            <p>this is form component</p>
          </div>
            //tidak bisa bila ada 2 div dalam 1 component
           )
        }
});


ReactDOM.render(
        <Greeter/>, 
        document.getElementById('app') 
        );