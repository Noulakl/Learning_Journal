import data from './data.js'
const blogCont = document.getElementById('blog-cont')
const blogContRecent = document.getElementById('blog-cont-Post')
const year = new Date().getFullYear()

function DataHTML(){
    const windowWidth = window.innerWidth 
    return  data.map((blogs)=>{
        const{blog, date, description, picture, altText, isRecent} = blogs
        if(windowWidth < 1024){
            if(isRecent){
                return`
                <section class="blog">
                    <img src="${picture}" 
                        alt="${altText}">
                    <h5> ${date} </h5> 
                    <h1>${blog}</h1>
                    <p>
                        ${description} 
                    </p>
                </section>` 
            }
        } else {
            return`
            <section class="blog">
                <img src="${picture}" 
                    alt="${altText}">
                <h5> ${date} </h5> 
                <h1>${blog}</h1>
                <p>
                    ${description} 
                </p>
            </section>` 
        }
    }, 0).join("")
}
document.getElementById('year').innerText = year
blogCont.innerHTML += DataHTML()