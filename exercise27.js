function myBandList(bands) {
  //defines a function, name it and it takes one parameter <bands>, which is expected to be an array of band names
  const ul = document.getElementById("band-list"); //this finds the <ul>element in the html file that has the id band-list

  bands.forEach((band) => {
    //this loops through each item in the bands array, for each band, it runs the code inside the {}
    const li = document.createElement("li"); // Create a new <li>element (a list item for the band name)
    li.textContent = band; // Set the text inside the list item to the current band name
    ul.appendChild(li); // Add the new <li> to the <ul>so it shows up in the page
  });
}

// Example usage:
myBandList(["Dire Straits", "Kansas", "Steely Dan"]); //calls the function with the band names i want in the list
