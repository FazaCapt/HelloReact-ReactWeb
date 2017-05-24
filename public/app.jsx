var Greeter = React.createClass({

        //ini dibuat untuk default bila namenyan tidak ditulis di reactDOm
        getDefaultProps: function(){
                return{
                        name: 'React',
                        message: 'This is default message'
                }
        },
    render: function(){
            var name = this.props.name;
            var message = this.props.message;
        return(
          <div>
            <h1>Hello {name}</h1>
            <p>{message + '!!'}</p>
          </div>
            //tidak bisa bila ada 2 div dalam 1 component
           )
        }
});
var firstName = 'Faza'

ReactDOM.render(
        // <Greeter name= {firstName} message='message is from props'/>, 
        <Greeter name= {firstName}/>,
        document.getElementById('app') 
        );