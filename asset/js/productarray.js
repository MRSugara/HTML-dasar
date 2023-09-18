let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let products= [
    {
        nama:"Asus 249QGR",
        gambar:"../asset/img/asus249qgr.jpeg",
},{
        nama:"AOC 24EG2E5",
        gambar:"../asset/img/aoc24eg2e5.jpeg",
},{
        nama:"Koorui 24e4",
        gambar:"../asset/img/koorui.jpeg",
},{
        nama:"MSI G241VC",
        gambar:"../asset/img/msig241vc.jpeg",
},{
        nama:"Samsung CR24F390",
        gambar:"../asset/img/samsungcr24f390.jpeg",
},{
        nama:"Samsung SR35",
        gambar:"../asset/img/samsungsr35.jpeg",
}
]

function render() {
    document.getElementById("satuan").innerHTML= ""
    products.forEach(function (product) {
        let element = document.createElement('div')
        element.className="border"
        let img = document.createElement('img')
        img.src=product.gambar
        img.className="img"
        element.appendChild(img)

        let desc = document.createElement('div')
        desc.className="desc1"
        desc.innerHTML=product.nama
        element.appendChild(desc)

        let outpute = document.getElementById('satuan');
        outpute.appendChild(element);
    })
}

render()

