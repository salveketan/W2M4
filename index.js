async function fetchText() {
    let response = await fetch('https://jsonmock.hackerrank.com/api/articles?page=1');
    let data = await response.json();

    let daata = data.data;
    daata.sort(function (a, b) {
        return b.num_comments - a.num_comments
    })
    showData(daata)
}

async function latestComments() {
    let response = await fetch('https://jsonmock.hackerrank.com/api/articles?page=1');
    let data = await response.json();


    let daata = data.data;
    daata.sort(function (a, b) {
        return b.created_at - a.created_at
    })
    showData(daata)
}


let A = document.getElementById("container")

function showData(e) {
    e.map(function (element) {

        let d = document.createElement("div")
        d.style = "display:flex"

        let h = document.createElement("h2")
        h.textContent = element.author;

        let title = document.createElement("h3");

        let comments = document.createElement("p");
        comments.textContent = "comments" + " " + element.num_comments;
        if (element.title == null) {
            title.textContent = "title not available";
        }
        else {
            title.textContent = element.title;

        }

        title.style = "color:green"
        let nxtlink = document.createElement("h4");
        nxtlink.textContent = "Go to Article"

        nxtlink.addEventListener("click", function () {
            singlepage(element);
        })

        let image = document.createElement("img")
        image.src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png";
        image.style = "height:100px"

        let f = document.createElement("div")
        let g = document.createElement("div")
        g.style = "display:flex"

        g.append(comments, nxtlink)
        g.id = "third"
        f.append(title)
        d.append(image, h);
        d.id = "first"
        let maind = document.createElement("div")

        maind.append(d, f, g)
        A.append(maind)
    });
}




function singlepage(e) {
    console.log(e)
    let a = document.getElementById("container");
    a.innerHTML = "";
    let d = document.createElement("div")

    let title = document.createElement("h3")
    title.textContent = e.title

    let image = document.createElement("img")
    image.src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"

    let auth = document.createElement("h3")
    auth.textContent = e.author


    d.append(title, image, auth)

    a.append(d)

}