const modal = document.getElementById('myModal')
const modalImg = document.getElementById("img01")
const captionText = document.getElementById("caption")
const span = document.getElementsByClassName("close")[0]
const imgs = document.querySelectorAll('.open-img')

//Вызываем функцию при нажатии на любое изображение с классом open-img
imgs.forEach((elem,index) =>{
    elem.addEventListener('click',()=>{
        modal.style.display = "block"
        modalImg.src = elem.src
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
        captionText.innerHTML = index+1
    })
})

//Вызов функции при нажатии на крестик
span.onclick = function() {
    modal.style.display = "none"
    document.body.style.position = 'static'
}

//Не уверен нужно ли это. Этот код можно раскомментировать для того, чтобы при изменении(добавлении/удалении),
//обновлялся список элементов и можно было открывать новые фотографии в модальном окне
// const targetNode = document.getElementById('imgs')
//
// const config = { attributes: true, childList: true, subtree: true }
//
// const callback = function(mutationsList, observer) {
//     const imgs = document.querySelectorAll('.open-img')
//     imgs.forEach((elem,index) =>{
//         elem.addEventListener('click',()=>{
//             modal.style.display = "block"
//             modalImg.src = elem.src
//             document.body.style.position = 'fixed'
//             document.body.style.width = '100%'
//             captionText.innerHTML = index+1
//         })
//     })
// };
//
// const observer = new MutationObserver(callback)
//
// observer.observe(targetNode, config)