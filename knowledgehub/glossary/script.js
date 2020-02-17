window.addEventListener("DOMContentLoaded", function() {
  makeclouds();

});

function makeclouds() {
  for (var i = 1; i <= 64; i++) {
    var canvas = document.createElement("CANVAS"); // Create a <button> element
    canvas.setAttribute("id", "cloud" + i);
    canvas.setAttribute("height", 200);
    canvas.setAttribute("width", 578);
    document.getElementById("clouds").appendChild(canvas);
  }
  makecloud("Biodiversity", "Number and types of species in the wild", 1);
  makecloud("Biodiversity Hotspots", "A habitat with a high number of different species", 2);
  makecloud("Bioindicators", "Species used as a measure of an ecosystem's health", 3);
  makecloud("Blue Carbon Sinks", "Coastal ecosystems which store more carbon than land forests", 4);
  makecloud("Camouflage", "Hiding by disguising", 5);
  makecloud("Climate Change", "Human caused long term changes to global climates", 6);
  makecloud("Conservation", "Restore, protect and preserve ecosystems", 7);
  makecloud("Coral Reefs", "An ecosystem of reef building corals", 8);
  makecloud("Denning", "A habitat or retreat of an animal", 9);
  makecloud("Ecosystem", " A combination of Non living things and Living things interacting ", 10);
  makecloud("Ecosystem Services", "How humans benefit from a healthy ecosystem", 11);
  makecloud("Endemic Species", "A native species not found anywhere else", 12);
  makecloud("Environmental Impact", "Impact on the environment as a result of something", 13);
  makecloud("Extinction", "What happens to a species when all of its members die out", 14);
  makecloud("Fauna", "All life present in a particular region, habitat or time", 15);
  makecloud("Flagship Species", "A symbolic species of a habitat", 16);
  makecloud("Flora", "All plants in a region, habitat or time", 17);
  makecloud("Greenhouse Gases", "Gases that trap heat and contribute to climate change", 18);
  makecloud("Habitat", "The natural environment of a species", 19);
  makecloud("Habitat Loss", "When a habitat is no longer able to sustain species", 20);
  makecloud("Habitat Degradation", "A decline in the quality of a natural habitat", 21);
  makecloud("Habitat Fragmentation", "A habitat that splits into several small patches", 22);
  makecloud("Indicator Species", "A species whose status reflects the habitat's", 23);
  makecloud("Indigenous Species", "Native species", 24);
  makecloud("Intertidal Zone", "Land exposed to air at low tide and water at high tide", 25);
  makecloud("Invasive Species", "A foreign species that can have a negative impact", 26);
  makecloud("IUCN Red List", "A list of threatened species", 27);
  makecloud("Keystone Species", "A species crucial to the ecosystem", 28);
  makecloud("Mangroves", "Salt tolerant trees of coastal areas", 29);
  makecloud("Marine Debris", "Problematic litter in the oceans", 30);
  makecloud("Marshes", "Soft land with grass covered with water", 31);
  makecloud("Migrating", "Moving from a place to another", 32);
  makecloud("Migratory Species", "A species which migrates predictably", 33);
  makecloud("Mitigation", "Actions minimizing impact on ecosystems", 34);
  makecloud("Mudflat", "Flat wetlands with no vegetation", 35);
  makecloud("Natural resources", "Elements of nature which can be used by humans", 36);
  makecloud("Nocturnal", "Being active during the night and not during day", 37);
  makecloud("Overharvesting", "Harvesting a resource unsustainably", 38);
  makecloud("Pollution", "Harmful contamination of the ecosystem", 39);
  makecloud("Predator", "An organism that lives by eating other organisms", 40);
  makecloud("Protected Areas", "An area for the protection of habitats and species", 41);
  makecloud("Relocation", "To move organisms", 42);
  makecloud("Renewable Energy", "Energy that is replenished fast", 43);
  makecloud("Reptile", "Cold-blooded, air-breathing, egg-laying vertebrates", 44);
  makecloud("Reserves", "Fossil fuels and minerals available for extraction", 45);
  makecloud("Sabkha", "Flat coastal plain with a salt crust", 46);
  makecloud("Saltmarsh", "Intertidal areas with vegetation", 47);
  makecloud("Sandy Coastline", "Sediment beaches of carbonate sand", 48);
  makecloud("Scrub Area", "Area with low trees of low qualiy", 49);
  makecloud("Seagrass", "Subtidal areas with more than 10% cover of seagrass species.", 50);
  makecloud("Species", "A unit of biological classification", 51);
  makecloud("Swamp", "Spongy land filled with water; marsh-like", 52);
  makecloud("Terrestrial", "Relating to Earth or land", 53);
  makecloud("Threatened", "A species vulnerable to endangerment", 54);
  makecloud("Threats", "Something that causes harm", 55);
  makecloud("Vegetation", "All plants in a region", 56);
  makecloud("Wadi", "A stony, dry valley which floods when it rains", 57);
  makecloud("Webbed", "Toes united with a membrane", 58);
  makecloud("Wetland", "Where the land is covered with water", 59);
}

function makecloud(word, meaning, id) {
  // draw cloud
  var canvasid = "cloud" + id;
  var canvas = document.getElementById(canvasid);
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(170, 80);
  context.bezierCurveTo(130, 100, 130, 150, 230, 150);
  context.bezierCurveTo(250, 180, 320, 180, 340, 150);
  context.bezierCurveTo(420, 150, 420, 120, 390, 100);
  context.bezierCurveTo(430, 40, 370, 30, 340, 50);
  context.bezierCurveTo(320, 5, 250, 20, 250, 50);
  context.bezierCurveTo(200, 5, 150, 20, 170, 80);
  context.closePath();
  context.lineWidth = 5;
  context.fillStyle = 'lightblue';
  context.fill();
  context.strokeStyle = 'lightblue';
  context.stroke();
  context.font = "1.3em arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(word, canvas.width / 2, canvas.height / 2.5);
  canvas.onclick = function() {
    context.font = "0.8em arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(meaning, canvas.width / 2, canvas.height / 1.7);
    canvas.onclick = function() {}
  }

}