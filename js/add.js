let form = document.querySelector('form');
let formImg = document.querySelector('.form-img');
let formName = document.querySelector('.form-name');
let formDescription = document.querySelector('.form-description');


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let obj = {};
    let src = formImg.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        obj = {
            image: e.target.result,
            name: formName.value,
            description: formDescription.value
        }
        axios.post(`http://localhost:3000/boxs`, obj)
            .then(res => {
                console.log(res.data);

            })
    }
    reader.readAsDataURL(src);
})