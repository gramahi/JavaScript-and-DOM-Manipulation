//From data.js
var tableData = data;

//Obtain References, or HTML Tags, to the table body/<tbody> 
var tbody = d3.select("tbody");

//Populate and Display the UFO-Data from the data.js 
var dataFilter = 0;
ufos = data
console.log(data);


data.forEach((ufoSighting) => 

{
	var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) =>
    
    {
		var cell = tbody.append("td");
        cell.text(value);

    });

});

//Create and Provide Access through enabling a "Filter Buttom"
var submit = d3.select("#filter-btn");

submit.on("click", function () 

{
	//Prevent any Default behaviour, i.e forbid refreshing the page
	d3.event.preventDefault();

	//"Datetime" will be Selected as the "Input"
	var inputElement = d3.select("#datetime");

	//Return |or| Retrieve the "Search Value"
	var inputValue = inputElement.property("value");

	var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
	buildTable(filteredData);

});

//Filter the "Table-Data" upon "datetime" clean it, thereafter format Accordingly
function buildTable(dataFilter) 

{
	tbody.html("");
    dataFilter.forEach((ufoSighting) => 
    
    {
		var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => 
        
        {
			var cell = tbody.append("td");
            cell.text(value);
            
        });
        
    });
    
}