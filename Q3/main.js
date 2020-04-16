// JavaScript Document
let url ='https://arshgosal.github.io/test1/cats.json';
		//using fetch to get the data from a web server
		//getting url and then calling a function which sets the type of response to json and then calling the function strangeProducts to show the data
		fetch(url).then(function (response)
		{
	  		response.json().then(function(jsonObj)
	  		{
				let cats = jsonObj.cats;
                let button = document.getElementById('btn')
                button.addEventListener('click', function(e){
            	let cats = jsonObj.cats;
				for (let i = 0; i < cats.length; i++) 
				{
					//creating HTML elements
					let section = document.createElement('section');
                    let names = document.createElement('h2');
                    let p1 = document.createElement('p');
					let p2 = document.createElement('p');
					let age = document.createElement('p');
					let img = document.createElement('img');
					//store a reference to the div element in var div
					let div = document.getElementById('cat');
					//setting the text of the H2 to name of product
					names.textContent = cats[i].name;
					//species the text content to price of products
					p1.textContent = 'It belongs to species: ' + cats[i].species;
					//setting the text content to the details of the products
                    p2.innerHTML = 'Fav food: ' + cats[i].favFoods['0'] + ', ' + cats[i].favFoods['1'] + ' and ' + cats[i].favFoods['2'];
                    //setting the src attribute of image
					img.setAttribute('src', cats[i].photo);
					//setting the alt attribute of image
					img.setAttribute('alt', cats[i].name);
					//previewing all the elements to html page by appending the elements to a section element and then section element to a div
					section.appendChild(names);
					section.appendChild(p1);
					section.appendChild(p2);
					section.appendChild(img);
					div.appendChild(section);
				}
				});
            });
        });