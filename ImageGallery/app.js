let imageContainer = document.getElementById('img-container')
let viewImageContainer = document.getElementById('view-image')
// let bgImageContainer = document.getElementById('bg-img-container')
// let btnClose = document.getElementById('btn-close')

const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
]

viewImageContainer.src = images[4]

// btnClose.onclick = (e) => {
//     e.stopPropagation()
//     btnClose.style.display = 'none'
//     bgImageContainer.style.backgroundColor = 'transparent'

// }

images.forEach((image) => {
    let newImage = document.createElement('img')
    newImage.src = image
    newImage.alt = image
    newImage.style.width = '500px'
    newImage.style.height = '500px'
    newImage.style.margin = '4px'

    newImage.onclick = (e) => {
        e.stopPropagation()
        // viewImageContainer.style.display = 'block'
        // bgImageContainer.style.backgroundColor = 'rgba(27, 27, 27, 0.31)'
        // btnClose.style.display = 'block'

        viewImageContainer.src = image
        console.log(viewImageContainer)
    }
    imageContainer.appendChild(newImage)

})
