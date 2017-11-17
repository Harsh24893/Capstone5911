var Website = React.createClass({
  loadRecommendationInfo: function(e){
    	$.ajax({
			url: 'api2.php',
			type: 'POST',
			crossDomain: true,
			headers: {
				'content-type': 'application/json',
				'authorization': 'Bearer 1OsT1beqkufG0y5HK7BMhoOThJSKf9ABGjzfUD/C8/5CmRceSZRQmZ7W4Mrm9tQViOkj79zyLuczQ3q3d4rXPw=='
			},
			data: {
						'USER': this.state.a,   
						'SOURCE': this.state.b,   
						'MEAL': this.state.c,
						'FLIGHT': this.state.d,
			},
			success: function(result) {
				/*console.log(this.state.a);
				console.log(this.state.b);
				console.log(this.state.c);
				console.log(this.state.d);*/
				this.setState({data: result});
				//console.log(result);
				
				var obj = JSON.parse(result);
				var x = document.getElementById("booking");
				var y = document.getElementById("recommendation");
				var h = document.getElementById("Heading");
				if (x.style.display === "none" && y.style.display === "block") {
						x.style.display = "block";
						y.style.display = "none";
						h.style.display = "block";
				} else {
					var table = document.getElementById("recommendationTable");
					
					for(var i = 0; i < obj.output1.length; i = i + 1) {
						var row = table.insertRow(1);
						var cell1 = row.insertCell(0);
						var cell2 = row.insertCell(1);
						cell1.innerHTML = obj.output1[i]["ITEM_SKU"] ;
						cell2.innerHTML = obj.output1[i]["OWNER_FACING_DESCRIPTION"];
					}
					
					x.style.display = "none";
					h.style.display = "none";
					y.style.display = "block";
					
					
				}
							
				//var jsonObj = $.parseJSON('[' + result.toString() + ']');
				//console.log(data[0]);
				//var parsedJSON = JSON.stringify(result.d);
				
				//console.log(obj.output1[0]["ITEM_SKU"]);
				/*ReactDOM.render(
						<Website2 foodList={obj}/>,
						document.getElementById('Harsh')
				);*/
				
				//console.log(obj.output1[0]["ITEM_SKU"]);
				//console.log(obj["Item 2"]);
				//alert(typeof result);
			}.bind(this)
		});
		console.log('completed');
	},
	
  backToBooking: function(e) {
	
	var x = document.getElementById("booking");
	var y = document.getElementById("recommendation");
	var h = document.getElementById("Heading");
	if (x.style.display === "none" && y.style.display === "block") {
		x.style.display = "block";
		y.style.display = "none";
		h.style.display = "block";
	}
  },
  
  getInitialState: function() {
    return {
      a: '100020383',
      b: '',
      c: '2',
	  d: '2'
    };
  },
  
  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = event.target.value;
    this.setState(partialState);
  },
  
  handleInputChangeString: function(key, event) {
    //var partialState = {};
    //partialState[key] = parse(event.target.value);
    //this.setState(partialState);
	this.setState({value: event.target.value});
  },

  render: function() {
    var user = this.state.a;
    var source = this.state.b;
    var meal = this.state.c;
	var flight = this.state.d;
   
	//var userSource = user.concat(source);
	//var userSourceMeal = userSource.concat(meal);
	//var userId = userSourceMeal.concat(flight);
	var divStyle = {
  display: 'none', 
};
	
    return (
		<div>  
							<div id="booking">
							<form>		
									<div className="class1">
										<h3>User Id</h3>
										<select type="text" value={this.state.selected} id="w3_country1" onChange={this.handleInputChange.bind(null, 'a')}>
											<option value="null">Select User Id</option>  
											<option value="100020383">100020383</option>   
											<option value="100020383">100020383</option>   
											<option value="100020383">100020383</option>   						
										</select>

									</div>
									<div className="to">
										<h3>From</h3>
										<input type="text" name="city" className="city2" placeholder="Type Departure City" required="" value={this.state.text} onChange={this.handleInputChange.bind(null, 'b')} />
									</div>
									<div className="clear"></div>
									<div className="class1">
										<h3>Estimated Time Departure</h3>
										<select type="text" id="w3_country1" value={this.state.selected} onChange={this.handleInputChange.bind(null, 'c')}>
											<option value="null">Select Departure Time</option>  
											<option value="12">12 Noon</option>  
											<option value="13">1:00 pm</option>   
											<option value="14">2:00 pm</option> 
											<option value="15">3:00 pm</option>  
											<option value="16">4:00 pm</option>   
											<option value="17">5:00 pm</option> 
											<option value="18">6:00 pm</option>   
											<option value="19">7:00 pm</option> 
											<option value="20">8:00 pm</option>  
											<option value="21">9:00 pm</option>   
											<option value="22">10:00 pm</option> 
											<option value="23">11:00 pm</option>   
											<option value="24">12 Midnight</option> 
											<option value="1">1:00 am</option>   
											<option value="2">2:00 am</option> 
											<option value="3">3:00 am</option>  
											<option value="4">4:00 am</option>   
											<option value="5">5:00 am</option>    
											<option value="6">6:00 am</option>   
											<option value="7">7:00 am</option> 
											<option value="8">8:00 am</option>  
											<option value="9">9:00 am</option>   
											<option value="10">10:00 am</option> 
											<option value="11">11:00 am</option>   
										</select>

									</div>
									<div className="class1">
										<h3>Flight Duration</h3>
										<select type="text" value={this.state.selected} id="w3_country1" onChange={this.handleInputChange.bind(null, 'd')}>
											<option value="null">Select Flight Duration</option>  	
											<option value="Short">Less than 2 hours</option>  
											<option value="Medium"> 2 - 5 hours </option>   
											<option value="Long"> 5 - 8 hours </option> 
											<option value="Very Long"> 8 - 12 hours </option>  
											<option value="Very very long"> 12 - 24 hours </option>     					
										</select>

									</div>
									<div className="clear"></div>
			
							</form>	
							
							<input type="submit" onClick={this.loadRecommendationInfo} value="Get Recommendation" />
							</div>
							<div id="recommendation" style={divStyle}>
								<table className="table-fill" id="recommendationTable">
								<thead>
								<tr>
								<th className="text-left">Food Id</th>
								<th className="text-left">Description</th>
								</tr>
								</thead>
								<tbody className="table-hover">
								</tbody>
								</table>
							<input type="submit" onClick={this.backToBooking} value="Back" />
							</div>
	</div>
						
    );
  }
});

var Website2 = React.createClass({
  loadRecommendationInfo: function(e){
    	$.ajax({
			url: 'api1.php',
			type: 'POST',
			crossDomain: true,
			headers: {
				'content-type': 'application/json',
				'authorization': 'Bearer 1OsT1beqkufG0y5HK7BMhoOThJSKf9ABGjzfUD/C8/5CmRceSZRQmZ7W4Mrm9tQViOkj79zyLuczQ3q3d4rXPw=='
			},
			data: {
						'USER': this.state.a,   
						'SOURCE': this.state.b,   
						'MEAL': this.state.c,
						'FLIGHT': this.state.d,
			},
			success: function(result) {
				this.setState({data: result});
				
				
				//var jsonObj = $.parseJSON('[' + result.toString() + ']');
				//console.log(data[0]);
				//var parsedJSON = JSON.stringify(result.d);
				var obj = JSON.parse(result);
				console.log(obj.output1[0]["ITEM_SKU"]);
				ReactDOM.render(
  <Website />,
  document.getElementById('Harsh')
);
				//console.log(obj["Item 2"]);
				//alert(typeof result);
			}.bind(this)
		});
		console.log('completed');
	},
  getInitialState: function() {
    return {
      a: '100020383',
      b: '',
      c: 'Dinner',
	  d: 'Short'
    };
  },
  
  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = event.target.value;
    this.setState(partialState);
  },
  
  handleInputChangeString: function(key, event) {
    //var partialState = {};
    //partialState[key] = parse(event.target.value);
    //this.setState(partialState);
	this.setState({value: event.target.value});
  },
  
  myFunction: function() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
},

  render: function() {
    var user = this.state.a;
    var source = this.state.b;
    var meal = this.state.c;
	var flight = this.state.d;
    var foodList = this.props.foodList.output1;
	window.onload = function(){
  // your code here
  var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
};
	//var res = '<div class="table-title"><h3>Data Table</h3></div><table class="table-fill"><thead><tr><th class="text-left">Month</th><th class="text-left">Sales</th></tr></thead><tbody class="table-hover"><tr><td class="text-left">January</td><td class="text-left">$ 50,000.00</td></tr><tr><td class="text-left">February</td><td class="text-left">$ 10,000.00</td></tr></tbody></table>';
	
	return (
	
		<div>
		
						<table id="myTable">
						  <tr>
							<td>Row1 cell1</td>
							<td>Row1 cell2</td>
						  </tr>
						  <tr>
							<td>Row2 cell1</td>
							<td>Row2 cell2</td>
						  </tr>
						  <tr>
							<td>Row3 cell1</td>
							<td>Row3 cell2</td>
						  </tr>
						</table>
						{this.myFunction}
		<br/>	<input type="submit" onClick={this.myFunction} value="Get Recommendation" />
		</div>
						
    );
  }
});
 //  x: <strong>{x1}, {x2}</strong>
 

 

ReactDOM.render(
  <Website />,
  document.getElementById('Harsh')
);
