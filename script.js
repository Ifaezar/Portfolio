const aboutMe = () => {
    let show = ''
    show = `
    <div class= 'container>'
    <div class="bg-light text-center " >
        <h1 class="text-dark text-center">ABOUT ME</h1>
        <hr width="25%" style="border: 1px solid">
        <div class= "row">
            <div class = "col-md-6 text-right">
                <p>Hi! Saya Ilham</p>
            </div>
            <div class = "col-md-6 text-left">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt necessitatibus enim architecto quas eos explicabo beatae commodi minima, consectetur, iusto facere, labore doloribus itaque veniam laudantium maiores quis impedit!</p>
            </div>
        </div>
    </div>
</div>

    `
    document.getElementById('allmenu').innerHTML += show
}

const info = () => {
    let show=''
    show =`
        <div class="row mt-4 ">
            <div class= "col-md-4 text-center">
                <p class="far fa-5x fa-user-circle"></p>
                <p>Nama saya Ilham Faezar Noor Kiranda</p>
            </div>
            <div class= "col-md-4 text-center">
                <p class="fas fa-5x fa-graduation-cap"></p>
                <p>Saya pernah sekolah</p>
            </div>
            <div class= "col-md-4 text-center">
                <p class="fas fa-5x fa-laptop-code"></p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt necessitatibus enim architecto quas eos explicabo beatae commodi minima, consectetur, iusto facere, labore doloribus itaque veniam laudantium maiores quis impedit!</p>
            </div>
        </div>

    `
    document.getElementById('allmenu').innerHTML += show
}


const portfolio = () => {
    let show =''
    show = `
    <div class="bg-secondary container text-center">
        <h1 class="text-white" ">PORTFOLIO</h1>
        <div class= "row ">
            <div class= "col-md-6">
                <img src="https://vignette.wikia.nocookie.net/onepiece/images/7/79/Going_Merry_Original.png/revision/latest?cb=20121208225800" class="img m-4"
                style=" height: 250px;">
            </div>
            <div class = "col-md-6">
                <img src="https://vignette.wikia.nocookie.net/onepiece/images/b/b1/Thousand_Sunny_Infobox.png/revision/latest?cb=20190319133243&path-prefix=id" class="img m-4"
                style=" height: 250px;">
            </div>
        </div>
    </div>
    `
    document.getElementById('allmenu').innerHTML += show
}



const contact = () => {
    let show= ''
    show = `
    <div class= "container" style="width=50%;">
    <div class="text-center bg-light" id="contactMe" >
    <h1 class="m-5 text-dark">CONTACT</h1>
    <div class="mt-2 row text-center">
        <div class="col-md-3">
            <abbr title="Gmail">
                <a href="https://mail.google.com" class="fas fa-5x fa-envelope justify-content-between btn"></a>
            </abbr>
        </div>
        <div class="col-md-3">
            <abbr title="Twitter">
                <a href="https://twitter.com" class="fab fa-5x fa-twitter justify-content-between btn"> </a>
            </abbr>
        </div>
        <div class="col-md-3">
            <abbr title="Instagram">
                <a href="https://www.instagram.com/" class="fab fa-5x fa-instagram justify-content-between btn"> </a>
            </abbr>
        </div>
        <div class="col-md-3">
            <abbr title="Github">
                <a href="https://github.com/" class="fab fa-5x fa-github justify-content-between btn"> </a>
            </abbr>
        </div>
    </div>
</div>
</div>
    `
    document.getElementById('allmenu').innerHTML += show
}
const tampilan = () => {
    let show = "SEE EVERYTHING"
    document.getElementById("menu").innerHTML = show
}

const awal = () => {
    document.getElementById("menu").innerHTML = ''
}

const allMenu = () =>{
    aboutMe()
    info()
    portfolio()
    contact()
}