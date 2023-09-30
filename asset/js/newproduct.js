
// let products= [
//     {
//         nama:"Asus 249QGR",
//         gambar:"../asset/img/asus249qgr.jpeg",
// },{
//         nama:"AOC 24EG2E5",
//         gambar:"../asset/img/aoc24eg2e5.jpeg",
// },{
//         nama:"Koorui 24e4",
//         gambar:"../asset/img/koorui.jpeg",
// },{
//         nama:"MSI G241VC",
//         gambar:"../asset/img/msig241vc.jpeg",
// },{
//         nama:"Samsung CR24F390",
//         gambar:"../asset/img/samsungcr24f390.jpeg",
// },{
//         nama:"Samsung SR35",
//         gambar:"../asset/img/samsungsr35.jpeg",
// }
// ]

const productApi ='https://fakestoreapi.com/products'

fetch(productApi)
.then(response=>response.json())
.then(data=>{

  let element =document.getElementById("card")
  html = ""
    data.forEach(product=>{
      html +=`
        <div class="card col-2 m-2" id="card">
          <img src=${product.image} class="card-img-top"/> 
          <div class="card-body justify-content-center d-flex">
            <div class="card-text">
              ${product.title}
            </div>
          </div>
          </div>
        `;


    })
    element.innerHTML=html
  }
)

