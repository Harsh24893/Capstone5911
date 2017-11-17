var QuadraticCalculator = React.createClass({
  loadRecommendationInfo: function(e){
		console.log('harsh');
    	$.ajax({
			url: 'api.php',
			type: 'POST',
			crossDomain: true,
			headers: {
				'content-type': 'application/json',
				'authorization': 'Bearer dSvR98YJPxUvGNvmVWaXcFIIBYmIA1ieSrDLde6qgpvUfV1uxq4/pT5EnfuTse1zwK1VHoOb4xg6gVVGmyFQsw=='
			},
			data: {
						'USER': this.state.a,   
						'PARENT_SKU': this.state.b,   
						'RATING': this.state.c,   
			},
			success: function(result) {
				this.setState({data: result});
				console.log(result);
				var obj = JSON.parse(result);
				//console.log(obj["Item 2"]);
			}.bind(this)
		});
		console.log('completed');
	},
  getInitialState: function() {
    return {
      a: 'user1',
      b: 1,
      c: 1
    };
  },

  /**
   * This function will be re-bound in render multiple times. Each .bind() will
   * create a new function that calls this with the appropriate key as well as
   * the event. The key is the key in the state object that the value should be
   * mapped from.
   */
  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = parseFloat(event.target.value);
    this.setState(partialState);
  },
  
  handleInputChangeString: function(key, event) {
    //var partialState = {};
    //partialState[key] = parse(event.target.value);
    //this.setState(partialState);
	this.setState({value: event.target.value});
  },

  render: function() {
    var source = this.state.a;
    var destination = this.state.b;
    var num = this.state.c;
    var root = Math.sqrt(Math.pow(destination, 2) - 4 * source * num);
    var denominator = 2 * source;
    var x1 = (-destination + root) / denominator;
    var x2 = (-destination - root) / denominator;
    return (
      <div>
	  
        <h4>Enter details for <em>recommendation</em>:</h4>
        <p>
          <label>
            USER: <input type="text" value={source} onChange={this.handleInputChangeString.bind(null, 'a')} />
          </label>
          <br />
          <label>
            PARENT_SKU: <input type="number" value={destination} onChange={this.handleInputChange.bind(null, 'b')} />
          </label>
          <br />
          <label>
            RATING: <input type="number" value={num} onChange={this.handleInputChange.bind(null, 'c')} />
          </label>
		  
          <br />
       
        </p>
		<div>
				<h2><button onClick={this.loadRecommendationInfo} > Click me</button></h2>
		  </div>
      </div>
    );
  }
});
 //  x: <strong>{x1}, {x2}</strong>
var RecommendationInfo = React.createClass({
	getInitialState: function() {
		return {data: {}};
	},
	loadRecommendationInfo: function(e){
		console.log('harsh');
    	$.ajax({
			
			url: 'api.php',
			type: 'POST',
			crossDomain: true,
			headers: {
				'content-type': 'application/json',
				'authorization': 'Bearer dSvR98YJPxUvGNvmVWaXcFIIBYmIA1ieSrDLde6qgpvUfV1uxq4/pT5EnfuTse1zwK1VHoOb4xg6gVVGmyFQsw=='
			},
			data: 
					{
						'USER': 'user2',   
						'PARENT_SKU': '1',   
						'RATING': '1',   
			},
			success: function(result) {
				this.setState({data: result});
				//alert(result);
				console.log(result);
				//var obj = JSON.parse(result);
				//console.log(obj["Item 2"]);
				console.log("WOaaaaaaaah");
			}.bind(this)
		});
		console.log('completed');
	},
	render: function() {
		return (
			<div>
				<h2><button onClick={this.loadRecommendationInfo} > Click me</button></h2>
			</div>
		);
	}
});

ReactDOM.render(
  <QuadraticCalculator />,
  document.getElementById('container')
);
