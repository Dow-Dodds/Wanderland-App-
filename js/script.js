// declare new vairiable pulling a class from html to create a swiper 
let swiper = new Swiper(".mySwiper", {

  grabCursor: true,
  allowTouchMove: false,
  autoHeight: true, 
});

let daysSelected;

//form validation from parsley 
$(function () {
  $('#first-form').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.alert-info').toggleClass('hidden', !ok);
    $('.alert-warning ').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    // prevent the page from refreshing
    event.preventDefault();
    // alert("submitted succesfully");
      swiper.slideTo(1);
  });
});



// accom object arry 
const accomArray = [
  {
    id:0,
    name: "Riverview Tiny House",
    heroImg: "img/blue-riverview.jpeg",
    carouselImgOne: "img/blue-riverview-carousel.jpeg",
    carouselImgTwo: "img/riverside-car-2.png",
    carouselImgThree: "img/riverside-car-3.png",
    carouselImgFour: "img/riverside-car-4.png",
    price: 157,
    location: "south island",
    minNights: 1,
    maxNights: 5,
    minGuests: 1,
    maxGuests: 2, 
    culture: false,
    adventure: true,
    relax: true, 
    googleMaps: "queenstown",
    activityOne: "Big Fig",
    activityOneAddy: "105 Ardmore St",
    activityOneDeets: "Coffee and Breakfast - we recommend the Gozleme $7",
    activityOneImg: "img/bigfig.jpg",
    activityTwo: "Jet Boat Ride",
    activityTwoAddy: "216 Hardy Street",
    activityTwoDeets: "Get the blood pumping in these adrenaline-spiking jet boats with twin V8 engines. Skim past the lakes edge and under bridges at speeds of up to 95kmph!",
    activityTwoImg: "img/jet-boat-QT.jpeg",
    activityThree: "Frankton Arm Walkway",
    activityThreeAddy: "Kelvin Heights, Queenstown 9300",
    activityThreeDeets: " It's a shared path alongside the lakefront suitable for walking, mountain biking, and running.",
    activityThreeImg: "img/frankton.jpeg",
    link:"https://www.ecolodge-lesechasses.com/en/",
    long: "168.68953274295825",
    lat: "-44.98309069011598",
    stars: `4 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`
  },

  {
    id:1,
    name: "Nelson Waterside",
    heroImg: "img/nelson-villa.png",
    carouselImgOne: "img/nelson-villa-carouselone.png",
    carouselImgTwo: "img/nelson-villa-car-2.png",
    carouselImgThree: "img/nelson-villa-car-3.png",
    carouselImgFour: "img/nelson-villa-car-4.png",
    price: 90,
    location: "south island",
    minNights: 3,
    maxNights: 10,
    minGuests: 1,
    maxGuests: 3, 
    culture: false,
    adventure: true,
    relax: true, 
    googleMaps: "nelson",
    activityOne: "Abel Tasman National Park",
    activityOneAddy: "Nelson South Island 7183",
    activityOneDeets: "Endless Adventures and beautifull scenes ",
    activityOneImg: "img/abelTasmanPark.jpeg",
    activityTwo: "Arden Bar & Kitchen",
    activityTwoAddy: "216 Hardy Street",
    activityTwoDeets: "Fancy Dinner: slow cooked pork belly, pickled fennel, crackling $38",
    activityTwoImg: "img/arden.jpg",
    activityThree: "Sublime Coffee",
    activityThreeAddy: "211 Haven Road",
    activityThreeDeets: "Coffee and Pastries",
    activityThreeImg: "img/sublime.jpeg",
    link:"https://www.ecolodge-lesechasses.com/en/",
    long: "173.29360662302918",
    lat: "-41.30481727504294",
    stars: `4 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`


  },
  {
    id:2,
    name: "Naumi",
    heroImg: "img/naumi.jpeg",
    carouselImgOne: "img/naumi4.jpeg",
    carouselImgTwo: "img/naumi2.jpeg",
    carouselImgThree: "img/naumi-3.jpeg",
    carouselImgFour: "img/naumi-one.jpeg",
    price: 240,
    location: "north island",
    minNights: 2,
    maxNights: 15,
    minGuests: 1,
    maxGuests: 4, 
    culture: true,
    adventure: false,
    relax: true, 
    googleMaps: "wellington",
    activityOne: "Customs",
    activityOneAddy: "39 Ghuznee St",
    activityOneDeets: "Coffee & Doughnuts",
    activityOneImg: "img/customs.jpeg",
    activityTwo: "Shepherd",
    activityTwoAddy: "1/5 Eva Street",
    activityTwoDeets: "Fancy Dinner: We recommend the Lamb, beetroot, grape, goats curd, dukkah  $42",
    activityTwoImg: "img/shepherd.jpeg",
    activityThree: "Meow",
    activityThreeAddy: "39 Ghuznee St",
    activityThreeDeets: "Beers & Music",
    activityThreeImg: "img/meow.jpeg",
    link:"https://naumihotels.com/",
    long: "174.7748870953268",
    lat: "-41.29534636618824",
    stars: `5 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`

  },
  {
    id:3,
    name: "Blue Duck Station",
    heroImg: "img/blueduckstation.png",
    carouselImgOne: "img/blue-duck-img-one.jpeg",
    carouselImgTwo: "img/blueduckstationimg2.jpeg",
    carouselImgThree: "img/blue-duck-three.jpeg",
    carouselImgFour: "img/blue-duck-four.jpeg",
    price: 30,
    location: "north island",
    minNights: 1,
    maxNights: 10,
    minGuests: 1,
    maxGuests: 1, 
    culture: false,
    adventure: true,
    relax: false, 
    googleMaps: "whanganui",
    activityOne: "Horse Trekking",
    activityOneAddy: "4265 Oio Road, Retaruke 3990",
    activityOneDeets: "Blue Duck Station has acres of tracked land superb for backcountry horse trekking.",
    activityOneImg: "img/horse-trekking.jpeg",
    activityTwo: "The Chefs Table",
    activityTwoAddy: "4265 Oio Road RD 2, Owhango 3990",
    activityTwoDeets: "Fancy Dinner: We recommend wood eared mushrooms $28",
    activityTwoImg: "img/mushies.jpeg",
    activityThree: "Kayaking",
    activityThreeAddy: "4265 Oio Road RD 2, Owhango 3990",
    activityThreeDeets: "Experience the beauty of the Whanganui river; kayak from Whakahoro into Whanganui National Park and get picked up by jet boat later the same day.",
    activityThreeImg: "img/kayaking-image.jpeg",
    link:"https://blueduckstation.co.nz/accommodation-2/blue-duck-lodge-2/",
    long: "174.68287832317696",
    lat: "-38.870123314246825",
    stars: `4 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`

  },
  {
    id:4,
    name: "Hapuka Tree House",
    heroImg: "img/all.png",
    carouselImgOne: "img/hapukahero.jpeg",
    carouselImgTwo: "img/hapuka-three.jpeg",
    carouselImgThree: "img/hapuku-image-two.jpeg",
    carouselImgFour: "img/hapuku-four.jpeg",
    price: 600,
    location: "south island",
    minNights: 1,
    maxNights: 30,
    minGuests: 1,
    maxGuests: 6, 
    culture: true,
    adventure: true,
    relax: true, 
    googleMaps: "kaikoura",
    activityOne: "Whale Watch",
    activityOneAddy: "Whaleway Station Road, Kaikōura 7340",
    activityOneDeets: "Sperm Whales can be seen year-round and close to Kaikoura's coastline.",
    activityOneImg: "img/whale-watch.jpeg",
    activityTwo: "Surfing",
    activityTwoAddy: "Mangamaunu Surf Break",
    activityTwoDeets: "Mangamaunu is one of the best breaks in the area and well worth a visit. It works best on a southerly or south east swell and a west or north west wind.",
    activityTwoImg: "img/surf.png",
    activityThree: "Hapuku Lodge Restaurant",
    activityThreeAddy: "4265 Oio Road RD 2, Owhango 3990",
    activityThreeDeets: "Fancy Dinner: We recommend fresh Crayfish - market price subject to availability",
    activityThreeImg: "img/crayfish.jpeg",
    link:"https://www.hapukulodge.com/",
    long: "173.6523473596675",
    lat: "-42.394564353260506",
    stars: `5 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`
  },
  {
    id:5,
    name: "The Intrepid",
    heroImg: "img/theintrepid.jpg",
    carouselImgOne: "img/intrepidOne.jpeg",
    carouselImgTwo: "img/intrepidTwo.jpg",
    carouselImgThree: "img/theIntrepidThree.jpg",
    carouselImgFour: "img/Intrepid-gemini-room-four.jpg",
    price: 255,
    location: "north island",
    minNights: 1,
    maxNights: 30,
    minGuests: 1,
    maxGuests: 6, 
    culture: true,
    adventure: false,
    relax: true, 
    googleMaps: "wellington",
    activityOne: "Swimsuit Coffee",
    activityOneAddy: "38 Dixon Street, Te Aro, Wellington 6011",
    activityOneDeets: "Coffee and Scones",
    activityOneImg: "img/swimsuit.jpg",
    activityTwo: "Kisa",
    activityTwoAddy: "195 Cuba Street, Te Aro, Wellington 6011",
    activityTwoDeets: "Fancy Dinner: We Recommend the Shawarma spiced lamb shoulder, sumac cucumber, green tahina, laffa bread. GFA DF $48",
    activityTwoImg: "img/kisa.jpeg",
    activityThree: "Little Beer Quarter",
    activityThreeAddy: "6 Edward Street, Te Aro, Wellington 6011",
    activityThreeDeets: "Beer and Drag",
    activityThreeImg: "img/lbq.jpg",
    link:"https://www.theintrepidhotel.com/",
    long: "174.77535994983634",
    lat: "-41.291230764295875",
    stars: `4 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`
  },
  {
    id:6,
    name: "SkyScape",
    heroImg: "img/skyscapeHero.jpeg",
    carouselImgOne: "img/skyscape2.jpeg",
    carouselImgTwo: "img/skyscapeTwo.jpeg",
    carouselImgThree: "img/skyscapeThree.jpeg",
    carouselImgFour: "img/skyscapeFour.jpeg",
    price: 600,
    location: "south island",
    minNights: 1,
    maxNights: 30,
    minGuests: 1,
    maxGuests: 6, 
    culture: false,
    adventure: true,
    relax: true, 
    googleMaps: "ohau",
    activityOne: "Explore the A20 Cycle Trail",
    activityOneAddy: "Start at Twizel Marketplace",
    activityOneDeets: "Cycle into star country right here from Twizel centre into the Mackenzie Basin's International Dark Sky Reserve",
    activityOneImg: "img/a20.jpeg",
    activityTwo: "Mint Folk & Co",
    activityTwoAddy: "4 Market Place, Twizel, Twizel 7901, New Zealand",
    activityTwoDeets: "Delicious Dinner: We reccommend the Asian Style Pancake $22",
    activityTwoImg: "img/mintfolk.jpg",
    activityThree: "Explore Lake Tekapo and Lake Pukaki",
    activityThreeAddy: "Lake Tekapo 7999 New Zealand",
    activityThreeDeets: "Visit the turquoise colored Lake Tekapo & take in the tranquility of this place. Then take a drive to Lake Pukaki and admire stunning views of Mt. Cook from a distance.",
    activityThreeImg: "img/laketekapo.jpeg",
    link:"https://skyscape.co.nz/book-now/",
    long: "170.0324204915554",
    lat: "-44.24092928796141",
    stars: `5 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`
  },
  {
    id:7,
    name: "The Convent",
    heroImg: "img/theconventhero.jpeg",
    carouselImgOne: "img/theconventOne.jpeg",
    carouselImgTwo: "img/theconventTwo.jpeg",
    carouselImgThree: "img/theconventThree.jpeg",
    carouselImgFour: "img/theconventFour.jpeg",
    price: 300,
    location: "north island",
    minNights: 1,
    maxNights: 30,
    minGuests: 1,
    maxGuests: 6, 
    culture: true,
    adventure: true,
    relax: false, 
    googleMaps: "auckland",
    activityOne: "Postal Service: Kokako Cafe",
    activityOneAddy: "537 Great North Road, Grey Lynn, Auckland 1021",
    activityOneDeets: "Coffee and brunch: We reccommend the Agria Hash with grilled seasonal greens, poached egg/tofu V+,GF+ $22.50",
    activityOneImg: "img/postalservice.jpeg",
    activityTwo: "Lilian",
    activityTwoAddy: "472 Richmond Road, Grey Lynn, Auckland 1021",
    activityTwoDeets: "Fancy Dinner: We reccommend the woodfired eggplant $15 and octopus with braised fennel $29",
    activityTwoImg: "img/lilian.jpeg",
    activityThree: "Explore Pollen Island Marine Reserve",
    activityThreeAddy: "SH 16, Avondale, Auckland 1026",
    activityThreeDeets: "Motu Manawa-Pollen Island Marine Reserve is a 501 hectares protected area in the Waitemata Harbour",
    activityThreeImg: "img/explore.jpeg",
    link:"https://www.theconventhotel.co.nz/rooms-suites",
    long: "174.7401789395949",
    lat: "-36.867229919494406",
    stars: `5 <i class="bi bi-star"></i>`,
    detailStars:`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`
  },
];



const enterBtn = document.getElementById('enter-button');
const navwanderBtn = document.getElementById('bigwander-btn');

const closeBtn = document.getElementById('close-btn');

const overlay = document.getElementById('overlay-container');
const aboutSection = document.getElementById('about-section');

enterBtn.onclick = function() {
  overlay.classList.toggle("active");
  console.log("hellow");
}
navwanderBtn.onclick = function() {
  overlay.classList.toggle("active");

}


closeBtn.onclick = function() {
  swiper.slideTo(0);
  overlay.classList.toggle("active");
}



//jquery isw going to run this whole function once the page is loaded 
$(function() {
  $('input[name="daterange"]').daterangepicker({
    //singleDatePicker: false,
    showDropdowns: true,
    minYear: 2022,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    //var years = moment().diff(start, 'years');
    //alert("You are " + years + " years old!");
  });

  $('input[name="daterange"]').on('apply.daterangepicker',
  function(ev, picker) {
      
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' _ ' + picker.endDate.format('MM/DD/YYYY'));

      let start = picker.startDate.format('MM/DD/YYYY');
      let end = picker.endDate.format('MM/DD/YYYY');
      daysSelected = datediff(parseDate(start), parseDate(end));

      //work out difference between two dates 
      function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
      }

      //this function works out the difference between dates by using the two arguments (start and end date)
      function datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second-first)/(1000*60*60*24));
      }

      //ADD IN OUR OWN VALIDATION 
    
        if (daysSelected > 100) {

        alert("select less than 100 nights")
        // daysValid=false;  
      } else {
        daysValid=true;  
      }

  }
)

});

let daysValid;  

const goBtn = document.getElementById('go-button');
const error = document.getElementById('error');

goBtn.onclick = function(){
  console.log(daysValid);

  
    if (daysValid == true)  {
      $(function () {
        $('#first-form').parsley().on('field:validated', function() {
          var ok = $('.parsley-error').length === 0;
          $('.alert-info').toggleClass('hidden', !ok);
          $('.alert-warning ').toggleClass('hidden', ok);
        })
        .on('form:submit', function() {
          // prevent the page from refreshing
          event.preventDefault();
          // alert("submitted succesfully");
            swiper.slideTo(1);
        });
      });
      // showAllAccomodation()
      error.style.height= "0";
      error.style.visibility= "hidden";

      generateResults();



      // swiper.slideTo(1)
    } else {
      error.innerHTML = `
      <p>Please choose dates for your stay!</p>
      `
      error.style.height= "4rem";
      error.style.visibility= "visible";
      alert("Invalid search!");


    }

  };

// trip type test functions 
const cultureTrip = document.getElementById("type-one");
const cultureImageBox = document.getElementById("culture");
const cultureTextBox = document.getElementById("foodtext");
let culture;
const bigcultureTrip = document.getElementById("bigtype-one");
const bigcultureImageBox = document.getElementById("bigculture");
const bigcultureTextBox = document.getElementById("bigfoodtext");


const adventureTrip = document.getElementById("type-two");
const adventureImageBox = document.getElementById("adventure");
const adventureTextBox = document.getElementById("adventuretext");
let adventure;
const bigadventureTrip = document.getElementById("bigtype-two");
const bigadventureImageBox = document.getElementById("bigadventure");
const bigadventureTextBox = document.getElementById("bigadventuretext");

const relaxTrip = document.getElementById("type-three");
const relaxImageBox = document.getElementById("relax");
const relaxTextBox = document.getElementById("relaxtext");
let relax;
const bigrelaxTrip = document.getElementById("bigtype-three");
const bigrelaxImageBox = document.getElementById("bigrelax");
const bigrelaxTextBox = document.getElementById("bigrelaxtext");

const allTrip = document.getElementById("type-four");
const allImageBox = document.getElementById("all");
const allTextBox = document.getElementById("alltext");
let all;
const bigallTrip = document.getElementById("bigtype-four");
const bigallImageBox = document.getElementById("bigall");
const bigallTextBox = document.getElementById("bigalltext");

function tiptypeFilter(){
 

  cultureTrip.onclick = function(){
    culture = true;
    adventure = false;
    relax = false
    all = false;
    console.log(culture);
    cultureTextBox.style.backgroundColor = "rgba(0,142,90,1)";
    adventureTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    relaxTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    allTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    
    cultureTextBox.style.width = "100%";
    cultureImageBox.style.height= "0";
    cultureImageBox.style.visibility= "hidden";

    //styles for other buttons on click
    relaxImageBox.style.display = "flex";
    relaxImageBox.style.height = "100%";
    relaxImageBox.style.visibility = "visible";
    relaxTextBox.style.width = "30%";
    adventureImageBox.style.display = "flex";
    adventureImageBox.style.height = "100%";
    adventureImageBox.style.visibility = "visible";
    adventureTextBox.style.width = "50%";
    allImageBox.style.display = "flex";
    allImageBox.style.height = "100%";
    allImageBox.style.visibility = "visible";
    allTextBox.style.width = "40%";



  };

  bigcultureTrip.onclick = function(){
    culture = true;
    adventure = false;
    relax = false
    all = false;
    console.log("is it working");
    bigcultureTextBox.style.backgroundColor = "rgba(0,142,90,1)";
    bigadventureTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    bigrelaxTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    bigallTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";

    bigcultureImageBox.style.height = "0";
    bigcultureImageBox.style.visibility= "hidden";
    bigcultureImageBox.style.display = "none";
    bigcultureTextBox.style.width = "100%";
     //styles for other buttons on click
     
     bigrelaxImageBox.style.display = "flex";
     bigrelaxImageBox.style.height = "100%";
     bigrelaxImageBox.style.visibility= "visible";
     bigrelaxTextBox.style.width = "40%";
     bigadventureImageBox.style.display = "flex";
     bigadventureImageBox.style.height = "100%";
     bigadventureImageBox.style.visibility = "visible";
     bigadventureTextBox.style.width = "40%";
     bigallImageBox.style.display = "flex";
     bigallImageBox.style.height = "100%";
     bigallImageBox.style.visibility = "visible";
     bigallTextBox.style.width = "40%";
   
  };

  adventureTrip.onclick = function(){
    adventure = true;
    culture = false;
    relax = false
    all = false;
    console.log(adventure);
    cultureTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    adventureTextBox.style.backgroundColor = "rgba(0,142,90,1)";
    relaxTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    allTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    
    adventureTextBox.style.width = "100%";
    adventureImageBox.style.height = "0";
    adventureImageBox.style.visibility = "hidden";

    //styles for other buttons on click
    relaxImageBox.style.display = "flex";
    relaxImageBox.style.height = "100%";
    relaxImageBox.style.visibility = "visible";
    relaxTextBox.style.width = "30%";
    allImageBox.style.display = "flex";
    allImageBox.style.height = "100%";
    allImageBox.style.visibility = "visible";
    allTextBox.style.width = "40%";
    cultureImageBox.style.display = "flex";
    cultureImageBox.style.height= "100%";
    cultureImageBox.style.visibility = "visible";
    cultureTextBox.style.width = "35%";
  };
  bigadventureTrip.onclick = function(){
    adventure = true;
    culture = false;
    relax = false
    all = false;
    console.log(adventure);
    bigcultureTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    bigadventureTextBox.style.backgroundColor = "rgba(0,142,90,1)";
    bigrelaxTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    bigallTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    // bigadventureImageBox.style.display = "none";
    bigadventureTextBox.style.width = "100%";
    bigadventureImageBox.style.height = "0";
    bigadventureImageBox.style.visibility = "hidden";
    bigadventureImageBox.style.display = "none";


    //styles for other buttons on click
    bigrelaxImageBox.style.display = "flex";
    bigrelaxImageBox.style.height = "100%";
    bigrelaxImageBox.style.visibility = "visible";
    bigrelaxTextBox.style.width = "40%";
    bigallImageBox.style.display = "flex";
    bigallImageBox.style.height = "100%";
    bigallImageBox.style.visibility = "visible";
    bigallTextBox.style.width = "40%";
    bigcultureImageBox.style.display = "flex";
    bigcultureImageBox.style.height = "100%";
    bigcultureImageBox.style.visibility = "visible";
    bigcultureTextBox.style.width = "40%";
  };
 
  relaxTrip.onclick = function(){
    adventure = false;
    culture = false;
    relax = true
    all = false;
    console.log(relax);
    console.log("relax");
    cultureTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    adventureTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    relaxTextBox.style.backgroundColor = "rgba(0,142,90,1)";
    allTextBox.style.backgroundColor = "rgba(251,243,177,.7)";

    relaxTextBox.style.width = "100%";
    relaxImageBox.style.height = "0";
    relaxImageBox.style.visibility = "visible";


    //styles for other buttons on click
    adventureImageBox.style.display = "flex";
    adventureImageBox.style.height = "100%";
    adventureImageBox.style.visibility = "visible";
    adventureTextBox.style.width = "50%";
    allImageBox.style.display = "flex";
    allImageBox.style.height = "100%";
    allImageBox.style.visibility = "visible";
    allTextBox.style.width = "40%";
    cultureImageBox.style.display = "flex";
    cultureImageBox.style.height = "100%";
    cultureImageBox.style.visibility = "visible";
    cultureTextBox.style.width = "35%";
  };
  bigrelaxTrip.onclick = function(){
    adventure = false;
    culture = false;
    relax = true
    all = false;
    console.log(relax);
    console.log("relax");
    bigcultureTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    bigadventureTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    bigrelaxTextBox.style.backgroundColor = "rgba(0,142,90,1)";
    bigallTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";

    bigrelaxImageBox.style.height = "0";
    bigrelaxTextBox.style.width = "100%";
    bigrelaxImageBox.style.visibility = "hidden";
    bigrelaxImageBox.style.display = "none";


    //styles for other buttons on click
    bigadventureImageBox.style.display = "flex";
    bigadventureImageBox.style.height = "100%";
    bigadventureImageBox.style.visibility = "visible";
    bigadventureTextBox.style.width = "40%";
    bigallImageBox.style.display = "flex";
    bigallImageBox.style.height = "100%";
    bigallImageBox.style.visibility = "visible";
    bigallTextBox.style.width = "40%";
    bigcultureImageBox.style.display = "flex";
    bigcultureImageBox.style.height = "100%";
    bigcultureImageBox.style.visibility = "visible";
    bigcultureTextBox.style.width = "40%";
  };

  allTrip.onclick = function(){
    adventure = false;
    culture = false;
    relax = false;
    all = true;
    console.log(relax);
    console.log("relax");
    cultureTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    adventureTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    relaxTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    allTextBox.style.backgroundColor = "rgba(0,142,90,1)";

    allImageBox.style.height = "0";
    allImageBox.style.visibility = "hidden";
    allTextBox.style.width = "100%";

     //styles for other buttons on click
     adventureImageBox.style.display = "flex";
     adventureImageBox.style.height = "100%";
     adventureImageBox.style.visibility = "visible";
     adventureTextBox.style.width = "50%";
     cultureImageBox.style.display = "flex";
     cultureImageBox.style.height = "100%";
     cultureImageBox.style.visibility = "visible";
     cultureTextBox.style.width = "35%";
     relaxImageBox.style.display = "flex";
     relaxImageBox.style.height = "100%";
     relaxImageBox.style.visibility = "visible";
     relaxTextBox.style.width = "30%";
  };
  bigallTrip.onclick = function(){
    adventure = false;
    culture = false;
    relax = false;
    all = true;
    console.log(relax);
    console.log("relax");
    bigcultureTextBox.style.backgroundColor = "rgba(216,167,174, 0.7)";
    bigadventureTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    bigrelaxTextBox.style.backgroundColor = "rgba(251,243,177,.7)";
    bigallTextBox.style.backgroundColor = "rgba(0,142,90,1)";
    bigallImageBox.style.height = "0";
    bigallImageBox.style.visibility = "hidden";
    bigallImageBox.style.display = "none";
    bigallTextBox.style.width = "100%";

     //styles for other buttons on click
     bigadventureImageBox.style.display = "flex";
     bigadventureImageBox.style.height = "100%";
     bigadventureImageBox.style.visibility = "visible";
     bigadventureTextBox.style.width = "40%";
     bigcultureImageBox.style.display = "flex";
     bigcultureImageBox.style.height = "100%";
     bigcultureImageBox.style.visibility = "visible";
     bigcultureTextBox.style.width = "40%";
      bigrelaxImageBox.style.display = "flex";
      bigrelaxImageBox.style.height = "100%";
      bigrelaxImageBox.style.visibility = "visible";
      bigrelaxTextBox.style.width = "40%";
  };

}
tiptypeFilter();


// !-----------generate wander results ---------------!

const result = document.getElementById("wander-results");
const locationSelect = document.getElementById("location-select");
const noGuests = document.getElementById("no-guests");

function flyNorth(){
  map.flyTo({
    center: [175.96719167637463,
    -39.17463362829819,
  ],
  zoom: 5,
  });
}
function flySouth(){
  map.flyTo({
    center: [171.06998621859293,
      -43.66453374799076,
  ],
  zoom: 5,
  });
}

function generateResults(){
  let locationSelected = locationSelect.value.toLowerCase();
  let guestsSelected = noGuests.value;
  console.log(locationSelected);
  console.log(guestsSelected);
  console.log(daysSelected);
  result.innerHTML = "";
  result.innerHTML = `
  <div id="results-heading">
    <h2>RESULTS</h2><i class="bi bi-funnel" id="filter-funnel"></i>
  </div>
  `;
  if (locationSelected == "north island" && culture == true) {
    for (let i = 0; i < accomArray.length; i++) {

      if (accomArray[i].location.includes("north island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].culture == true){
       generateAccom(i);
       console.log("north Island culture filtered");
       console.log(accomArray[i].culture);

      flyNorth();
      } 
 
   } //end of loop statement
  } else if (locationSelected == "north island" && adventure == true){
    for (let i = 0; i < accomArray.length; i++) {

      if (accomArray[i].location.includes("north island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].adventure == true){
       generateAccom(i);
       console.log("north Island culture filtered");
       console.log(accomArray[i].culture);
       flyNorth();
      } 
 
   } //end of loop statement
  } else if (locationSelected == "north island" && relax == true){
    for (let i = 0; i < accomArray.length; i++) {

      if (accomArray[i].location.includes("north island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].relax == true){
       generateAccom(i);
       console.log("north Island culture filtered");
       console.log(accomArray[i].culture);
       flyNorth();
      } 
 
   } //end of loop statement

  }else if(locationSelected == "north island") {
    for (let i = 0; i < accomArray.length; i++) {

     if (accomArray[i].location.includes("north island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests){
      generateAccom(i);
      console.log("yay");
      flyNorth();
     }

  } //end of loop statement
} else if (locationSelected == "north island" && all == true){
  for (let i = 0; i < accomArray.length; i++) {
    if (accomArray[i].location.includes("north island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests){
      generateAccom(i);
    }
  }
}else if (locationSelected == "south island" && culture == true){
  for (let i = 0; i < accomArray.length; i++) {

    if (accomArray[i].location.includes("south island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].culture == true){
     generateAccom(i);
     console.log("south island culture filtered");
     flySouth();
        }
    } //end of loop

}else if (locationSelected == "south island" && adventure == true) {
  for (let i = 0; i < accomArray.length; i++) {

    if (accomArray[i].location.includes("south island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].adventure == true){
     generateAccom(i);
     console.log("south island culture filtered");
     flySouth();
        }
    } //end of loop
} else if (locationSelected == "south island" && relax == true){
  for (let i = 0; i < accomArray.length; i++) {

    if (accomArray[i].location.includes("south island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].relax == true){
     generateAccom(i);
     console.log("south island culture filtered");
     flySouth();
        }
    } //end of loop
}else if (locationSelected == "south island" && all == true){
  for (let i = 0; i < accomArray.length; i++) {
    if (accomArray[i].location.includes("south island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests){
      generateAccom(i);
    }
  }
}else if (locationSelected == "south island") {
  for (let i = 0; i < accomArray.length; i++) {

    if (accomArray[i].location.includes("south island") && daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests){
     generateAccom(i);
     console.log("south island");
     flySouth();
        }
    }
} else if (locationSelected == "anywhere" && culture == true){
  for (let i = 0; i < accomArray.length; i++) {

    if (daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].culture == true){
     generateAccom(i);
     console.log("anywhere culture filtered");

        }
    }//end of loop
} else if (locationSelected == "anywhere" && adventure == true){
  for (let i = 0; i < accomArray.length; i++) {

    if (daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].adventure == true){
     generateAccom(i);
     console.log("anywhere adventure filtered");

        }
    }//end of loop
} else if (locationSelected == "anywhere" && relax == true) {
  for (let i = 0; i < accomArray.length; i++) {

    if (daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests && accomArray[i].relax == true){
     generateAccom(i);
     console.log("anywhere relax filtered");

        }
    }//end of loop
}else if (locationSelected == "anywhere" && all == true){
  for (let i = 0; i < accomArray.length; i++) {
    if (daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests){
      generateAccom(i);
    }
  }
}else if (locationSelected == "anywhere") {
  for (let i = 0; i < accomArray.length; i++) {

    if (daysSelected >= accomArray[i].minNights && daysSelected <= accomArray[i].maxNights && guestsSelected >= accomArray[i].minGuests && guestsSelected <= accomArray[i].maxGuests){
     generateAccom(i);
     console.log("anywhere any type yay");

        }
    }
  
} else {
  showAllAccomodation();
} //end of if statement
var filtermenu = document.createElement("div");
filtermenu.setAttribute('id', 'filter-container');
filtermenu.innerHTML = "";
filtermenu.innerHTML = `
<h6>Filter By:</h6>
<div class="wrapper">
<p><strong>Price</strong></p>
  <div class="price-input">
        <div class="field">
          <span>Min</span>
          <input type="number" class="input-min" value="250">
        </div>
        <div class="separator">-</div>
        <div class="field">
          <span>Max</span>
          <input type="number" class="input-max" value="750">
        </div>
  </div>
  <div class="slider">
    <div class="progress"></div>
  </div>
  <div class="range-input">
        <input type="range" class="range-min" min="0" max="1000" value="250" step="10">
        <input type="range" class="range-max" min="0" max="1000" value="750" step="10">
  </div>
</div>
<hr></hr>
<div class="wrapper">
<p><strong>Amenities</strong></p>
<div class="filter-item">
<input type="checkbox" id="hottub1" name="hottub1" value="HotTub">
<label for="hottub1">HotTub</label>
</div>
<div class="filter-item">
<input type="checkbox" id="pool1" name="pool1" value="Pool">
<label for="pool1">Pool</label>
</div>
<div class="filter-item">
<input type="checkbox" id="kitchen1" name="kitchen1" value="Kitchenette">
<label for="kitchen1">Kitchenette</label>
</div>
<div class="filter-item">
<input type="checkbox" id="outdoor1" name="outdoor1" value="Outdoor Area">
<label for="outdoor1">Outdoor Area</label>
</div>
</div>
`
document.getElementById("results-heading").appendChild(filtermenu);

const filterFunnel = document.getElementById('filter-funnel');
filterFunnel.onclick = function(){
  console.log("hello");
  filtermenu.classList.toggle("active"); 
}

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
} //end of generate results, 


// use if statement to generate results based on inputs 
//generate accom function to be used in filtering loops
function generateAccom(i){

  result.innerHTML += `

  <div id="hotel-hero">
      <h3>${accomArray[i].name} : ${accomArray[i].stars}</h3> 
      <img  src="${accomArray[i].heroImg}" alt="${accomArray[i].name}">    
      <div id="details-bar">
        <p>$${accomArray[i].price}p/n</p>
        <i class="bi bi-circle-fill"></i>
        <a href="#toolbar" class="details-button" id="${accomArray[i].id}">DETAILS</a>
        <i class="bi bi-circle-fill"></i>
        <a onClick="flyMap(${accomArray[i].id})" href="#map" class="flyto-button" id="${accomArray[i].googleMaps}">SHOW ON MAP</a
      </div>
    </div>
  `;
  generateButtons();

}

function flyMap(i){
  map.flyTo({
    center: [`${accomArray[i].long}`,
    `${accomArray[i].lat}`,
  ],
  zoom: 12,
  });
}

function showAllAccomodation(){
  result.innerHTML ="";
  result.innerHTML =`
  <div id="results-heading">
  <h2>ALL THE THINGS</h2><i class="bi bi-funnel"></i>
  </div>
   `  ;


  for(let i = 0; i < accomArray.length; i++){
    result.innerHTML +=`
    <div id="hotel-hero">
      <h3>${accomArray[i].name}</h3>
      <img  src="${accomArray[i].heroImg}" alt="${accomArray[i].name}">    
      <div id="details-bar">
        <p>$${accomArray[i].price}p/n</p>
        <i class="bi bi-circle-fill"></i>
        <a href="#toolbar" class="details-button" id="${accomArray[i].id}">DETAILS</a>
        <i class="bi bi-circle-fill"></i>
        <a href="#map" class="flyto-button" id="${accomArray[i].googleMaps}">SHOW ON MAP</a
      </div>
    </div>
    
    
    `;
  }
  generateButtons();
  
}
// back to wander planner butto function 
const backBtn = document.getElementById("back-btn");

backBtn.onclick = function(){
  swiper.slideTo(0);
  console.log("go back");
}


// function to generate and open details button 
const detailsButtonArray = document.getElementsByClassName("details-button");

const hotelDetails = document.getElementById("hotel-details");


function generateButtons(){
  for (let i=0; i < detailsButtonArray.length; i++) {
    detailsButtonArray[i].onclick = function() { 
      console.log("you clicked me");
      let currentDetailButtonId = this.id;
      console.log(currentDetailButtonId);
      swiper.slideTo(2);
      openResults(currentDetailButtonId);
    }
  }

};


function openResults(id){
  console.log(accomArray[id].id);
  let total = (accomArray[id].price * daysSelected);
  hotelDetails.innerHTML = "";
  hotelDetails.innerHTML += `
  <h3>${accomArray[id].name} :</h3>
  <p id="section-stars">${accomArray[id].detailStars}</p>
  <div id="hotel-gallery" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="hotel-images d-block w-100" src="${accomArray[id].carouselImgOne}" alt="${accomArray[id].name}">    
      </div>
      <div class="carousel-item">
        <img class="hotel-images d-block w-100" src="${accomArray[id].carouselImgTwo}" alt="${accomArray[id].name}">    
      </div>
      <div class="carousel-item">
        <img class="hotel-images d-block w-100" src="${accomArray[id].carouselImgThree}" alt="${accomArray[id].name}">    
      </div>
      <div class="carousel-item">
        <img class="hotel-images d-block w-100" src="${accomArray[id].carouselImgFour}" alt="${accomArray[id].name}">    
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hotel-gallery" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hotel-gallery" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  <div id="detailsdata-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <div id="details-card" class="d-flex w-80" >
            <h3>DETAILS</h3>
            <p id="cost-calc">$${accomArray[id].price}p/n x ${daysSelected} Nights </p>
            <p id="total-cost"><strong>Total: $${total}</strong></p>
            <hr>
            <p>Max ${accomArray[id].maxGuests} Guests</p>
            <p>Mix ${accomArray[id].minNights} nights - Max ${accomArray[id].maxNights} nights</p>
            <div id="amenities">
              <div class="img-wrapper"><img src="img/laundry.png" alt="laundry"></div>
              <div class="img-wrapper"><img src="img/wifiwifi.png" alt="wifi"></div>
              <div class="img-wrapper"><img src="img/accessaccess.png" alt="wheelchair access"></div>
              <div class="img-wrapper"><img src="img/restaurantrestaurant.png" alt="restaurant"></div>
              <div class="img-wrapper"><img src="img/pool.png" alt="pool"></div>
            </div>

            <a id="book-button" class="button" href="${accomArray[id].link}">BOOK NOW<img src="img/Portal.png"> </a> 

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="10000" >
      <div id="activities-card">
          <div id="activity-heading">
            <h3>ACTIVITIES</h3>
          </div>
          <div id="activityOne-Wrapper">
              <div class="text-wrapper">
                  <h6><i class="bi bi-circle-fill"></i>${accomArray[id].activityOne}</h6> 
                  <p><i class="bi bi-geo-alt"></i><strong>${accomArray[id].activityOneAddy}</strong></p>
                  <p>${accomArray[id].activityOneDeets}</p>             
              </div>
              <div id="img-wrapper">
                <img src="${accomArray[id].activityOneImg}" alt="${accomArray[id].name}">
              </div>
            </div>
          

          <div id="activityTwo-Wrapper">
              <div id="img-wrapper">
                <img src="${accomArray[id].activityTwoImg}" alt="${accomArray[id].name}">
              </div>
              <div class="text-wrapper">
                  <h6><i class="bi bi-circle-fill"></i>${accomArray[id].activityTwo}</h6>
                  <p><i class="bi bi-geo-alt"></i><strong>${accomArray[id].activityTwoAddy}</strong></p>
                  <p>${accomArray[id].activityTwoDeets}</p>
                
              </div>
            </div>
          

          <div id="activityThree-Wrapper">
            <div class="text-wrapper">
                <h6><i class="bi bi-circle-fill"></i>${accomArray[id].activityThree}</h6>
                <p><i class="bi bi-geo-alt"></i><strong>${accomArray[id].activityThreeAddy}</strong></p>
                <p>${accomArray[id].activityThreeDeets}</p>
             
            </div>
            <div id="img-wrapper">
              <img src="${accomArray[id].activityThreeImg}" alt="${accomArray[id].name}">
            </div>
          </div>
         
          
      </div>
    </div>
    
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#detailsdata-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#detailsdata-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<a id="back-to-results" class="button" href="#toolbar">BACK<i class="bi bi-arrow-90deg-left"></i></a> 

  `;


  // back to results button 
const backresultsBtn = document.getElementById("back-to-results");

backresultsBtn.onclick = function(){
  swiper.slideTo(1);
  console.log("back to results");
}
}

// !-----MAPBOX!----!
mapboxgl.accessToken = 'pk.eyJ1IjoiZG93ZG9kZHMiLCJhIjoiY2wzcndvZXg4MDJvZTNjbzkyb2w2OXFjdSJ9.vdO_YUiSySRSmTTAjUn-vA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dowdodds/cl47oaucy000014ruxt6rpttz',
  center: [174.08304111930164,-41.54866902555208],
  zoom: 4
});

map.addControl(new mapboxgl.FullscreenControl());

const customMarkers = {
  type: 'FeatureCollection',

  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.7748870953268,-41.29534636618824]
      },
      properties: {
        title: `<img class="popup-image" src="img/naumi-map-img.png" alt="Naumi">
        <h1>Naumi Wellington</h1>`,
        
       
        description: `
        <p>Premium Studio Accomodation</p> 
        <p><strong>address:</strong> 213-223 Cuba Street, Te Aro, Wellington 6011</p>
        <a id="book-button" class="button" href="https://naumihotels.com/">BOOK NOW<img src="img/Portal.png"> </a> 
        `,
        
        customID: "naumi"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [168.68953274295825,-44.98309069011598]
      },
      properties: {
        title: `
        <img class="popup-image" src="img/riverview-logo.jpeg" alt="Boneface">
        <h1>Blue Riverview Tiny Houses</h1>`,
       
        description: `<p>Blue Riverview Tiny Houses</p>
        <p><strong>address:</strong> 30 Brunswick Street, Queenstown 9300 New Zealand</p>
        <a id="book-button" class="button" href="https://www.ecolodge-lesechasses.com/en/">BOOK NOW<img src="img/Portal.png"> </a> 

        `,
        customID: "riverview"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [173.29360662302918,-41.30481727504294]
      },
      properties: {
        title: `
        <img class="popup-image" src="img/nelson-waterside.png" alt="nelson">
        <h1>Nelson Waterside</h1>`,
       
        description: `<p>Nelson Waterside</p>
        <p><strong>address:</strong> 31 Fifeshire Crescent, Stepneyville, Nelson 7010</p>
        <a id="book-button" class="button" href="https://www.ecolodge-lesechasses.com/en/">BOOK NOW<img src="img/Portal.png"> </a> 

        `,
        customID: "waterside"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.68287832317696,-38.870123314246825]
      },
      properties: {
        title: `
        <img class="popup-image" src="img/blueduckstation.jpeg" alt="Blue Duck Station">
        <h1>Blue Duck Station</h1>`,
       
        description: `<p>Blue Duck Station is an outdoor enthusiast’s playground</p>
        <p><strong>address:</strong> 4265 Oio Road, Retaruke 3990</p>
        <a id="book-button" class="button" href="https://blueduckstation.co.nz/accommodation-2/blue-duck-lodge-2/">BOOK NOW<img src="img/Portal.png"> </a> 

        `,
        customID: "blueduck"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [173.6523473596675,-42.394564353260506]
      },
      properties: {
        title: `
        <img class="popup-image" src="img/hapukulogo.jpeg" alt="Hapuku Lodge">
        <h1>Hapuka Tree House</h1>`,
       
        description: `<p>Hapuka Lodge treehouses the perfrct escape for relaxation and adventure.</p>
        <p><strong>address:</strong> State Highway 1, Kaikōura 7371</p>
        <a id="book-button" class="button" href="https://www.hapukulodge.com/">BOOK NOW<img src="img/Portal.png"> </a> 

        `,
        customID: "kaikoura"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.77535994983634,-41.291230764295875]
      },
      properties: {
        title: `
        <img class="popup-image" src="img/intrepidlogo.png" alt="Intrepid Hotel">
        <h1>The Intrepid</h1>`,
       
        description: `<p>A boutique luxury hotel nestled in the heart of Wellington's Te Aro neighbourhood on vibrant Ghuznee Street.</p>
        <p><strong>address:</strong> 38 Dixon Street, Te Aro, Wellington 6011</p>
        <a id="book-button" class="button" href="https://www.theintrepidhotel.com/">BOOK NOW<img src="img/Portal.png"> </a> 

        `,
        customID: "intrepid"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [170.0324204915554,-44.24092928796141]
      },
      properties: {
        title: `
        <img class="popup-image" src="img/skyscapelogo.png" alt="Skyscape">
        <h1>SkyScape</h1>`,
       
        description: `<p>Your adventure starts as soon as enter. Hike, bike, stroll among the flocks of sheep or simply relax and take in the spectacular scenery.</p>
        <p><strong>address:</strong> 47 Ben Ohau Road, Ben Ohau 7999, New Zealand</p>
        <a id="book-button" class="button" href="https://skyscape.co.nz/book-now/">BOOK NOW<img src="img/Portal.png"> </a> 

        `,
        customID: "twizel"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.7401789395949,-36.867229919494406]
      },
      properties: {
        title: `
        <img class="popup-image" src="img/theconventlogo.png" alt="The Convent">
        <h1>The Convent</h1>`,
       
        description: `<p>The Convent, once a community for nuns, has reopened its historical doors to the public as a uniquely crafted boutique hotel. Stay with us in one of our 22 cosy, character filled rooms that have everything you need... and nothing you don’t.</p>
        <p><strong>address:</strong> 47 Ben Ohau Road, Ben Ohau 7999, New Zealand</p>
        <a id="book-button" class="button" href="https://www.theconventhotel.co.nz/rooms-suites">BOOK NOW<img src="img/Portal.png"> </a> 
        `,
        customID: "auckland"
      }
    },

  ]
}
//render custome markers 
function renderMarkers(currentMarker){ 
  
  let newMarkerElement = document.createElement('div');
  newMarkerElement.className = 'marker';
  console.log(currentMarker);
  

  if (currentMarker.properties.customId == "naumi") {
    newMarkerElement.setAttribute("id", "special-marker");
    newMarkerElement.style.backgroundSize = "100%, 100%";
    newMarkerElement.style.backgroundImage = "url(`img/naumi.jpeg`)";
    newMarkerElement.style.border = "none";
    newMarkerElement.style.backgroundRepeat = "no-repeat";
    newMarkerElement.style.backgroundPosition = "55%,47%";
    newMarkerElement.style.width = "75px";
    newMarkerElement.style.height = "75px";
  }

  new mapboxgl.Marker(newMarkerElement)
  .setLngLat(currentMarker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({
    offset: 25
    })
    .setHTML('<h3>' + currentMarker.properties.title + '</h3><p>' + currentMarker.properties.description + '</p>'))
    .addTo(map);
}

//renders all markers 
customMarkers.features.forEach(renderMarkers);



const geojson = {
  // Json uses singlequotes
    'type': 'FeatureCollection',
    'features': []
};



// this is copied over verbatim from the mapbox doumentation

map.on('load', () => {
  console.log("loaded!");

  // add our source of data for the map to access

  map.addSource('geojson', {
      'type': 'geojson',
      'data': geojson
  });


  // Add styles to the map
  map.addLayer({
      id: 'measure-points',
      type: 'circle',
      source: 'geojson',
      paint: {
        // try changing these
          'circle-radius': 10,
          'circle-color': '#FF69B4'
      },
      filter: ['in', '$type', 'Point']
  });
  map.addLayer({
      id: 'measure-lines',
      type: 'line',
      source: 'geojson',
      layout: {
          'line-cap': 'round',
          'line-join': 'round'
      },
      paint: {
          'line-color': '#4D4DFF',
          'line-width': 4
      },
      filter: ['in', '$type', 'LineString']
  });

 

  // check if mouse is moving - if so change the cursor
  map.on('mousemove', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
          layers: ['measure-points']
      });
      // Change the cursor to a pointer when hovering over a point on the map.
      // Otherwise cursor is a crosshair.

      // Uses a ternary operator - a shorthand if else statement,
      // checks if a feature is being hovered over
      // https://www.w3schools.com/js/js_comparisons.asp
      map.getCanvas().style.cursor = features.length ? 'pointer' : 'crosshair';

      // mouse cursors: https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor
      // try cell
  });

});
