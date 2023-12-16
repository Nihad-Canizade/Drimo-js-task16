let id = new URLSearchParams(window.location.search).get("id");
let sec2Boxs = document.querySelector('.sec2-boxs');

function UpdateFunc() {
    fetch(`http://localhost:3000/boxs/${id}`)
        .then(res => res.json())
        .then(data => {
            sec2Boxs.innerHTML += `
        <div class="sec2-box">
        <img src="${data.image}" alt="Image">
        <div class="sec2-box-p1"><input type = "text" value = "${data.name}" class = "sec2-input1"></div>
        <div class="sec2-box-p2"><input type = "text" value = "${data.description}" class = "sec2-input2"></div>
        <button class = "sec2-udbox-btn">Save</button>
     </div>
    `

            let saveButton = document.querySelector(".sec2-udbox-btn");

            saveButton.addEventListener('click', () => {

                const nameinput = document.querySelector('.sec2-input1');
                const descriptioninput = document.querySelector('.sec2-input2');

                fetch('http://localhost:3000/boxs/' + id,
                    {
                        method: "PATCH",

                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ name: nameinput.value, description: descriptioninput.value }),
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
            })
        })
}

UpdateFunc();