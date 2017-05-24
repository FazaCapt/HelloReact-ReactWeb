var Greeter = React.createClass({
        getDefaultProps: function(){
                return{
                        name: 'React',
                        message: 'This is default message'
                }
        },
        getInitialState:function(){
                return {
                        name: this.props.name
                };
        },
        onButtonClick: function(e){
                e.preventDefault();

                var nameRef = this.refs.name;

                // var name = this.refs.name.value;
                var name = nameRef.value;

                // this.state.name = name;
                // ini bila ingin mengosongkan form input
                // this.refs.name.value = '';
                nameRef.name.value = '';

                this.setState({
                        name:name
                })


                // alert(name);
        },
    render: function(){
            var name = this.state.name;
            var message = this.props.message;
        return(
          <div>
            <h1>Hello {name}</h1>
            <p>{message + '!!'}</p>

            <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
            </form>
            
          </div>
           )
        }
});
var firstName = 'Faza'

ReactDOM.render(
        <Greeter name= {firstName}/>,
        document.getElementById('app') 
        );