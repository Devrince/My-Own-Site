// =======Blog Page==========

const postList = document.getElementById("post-list");

if (postList && typeof posts !== "undefined") {
    const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

    sorted.forEach(post => {
        const article = document.createElement("article");
        article.className = "post";

        const time = document.createElement("time");
        time.dateTime = post.date;
        time.textContent = new Date(post.date + "T00:00:00").toLocaleDateString("en-GB", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
        });

        const title = document.createElement("h3");
        title.textContent = post.title;

        article.append(time, title);

        post.body.split("\n\n").forEach(text => {
            const p = document.createElement("p");
            p.textcontent = text;
            article.append(p);
        });

        postList.append(article);
    });

}

// ========Admin page========
const form = document.getElementById("post-form");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");

if (form) {
    form.addEventlistener("submit" , event => {
        event.preventDefault();
         const title = document. getElementById("title").valuetrim();
         const day = document.getElementById("date").value;
         const body = document.getElementById("body").valuetrim();

         output.value = 
         " {\n" +
         "    title: " + JSON.stringify(title) + ",\n" +
         "     date: \" "+ date + "\",\n"  +
         "     body:  " + JSON.stringify(body) + "\n" +
         " },";

});

copyBtn.addEventListener("click", async () => {
    if (!output.value) return;

    await navigator.clipboard.writeText(output.value);
    copyBtn.textContent = "Copied";
    setTimeout(() => (copyBtn.textContent = "Copy code"), 1500);
});
}






