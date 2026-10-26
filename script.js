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
            p.textContent = text;
            article.append(p);
        });

        if (post.link) {
            const link = document.createElement("a");
            link.href = post.link.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = post.link.label;
            article.append(link);
        }

        postList.append(article);
    });
}

const form = document.getElementById("post-form");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");
const formStatus = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        const title = document.getElementById("title").value.trim();
        const date = document.getElementById("date").value;
        const body = document.getElementById("body").value.trim();

        output.value = [
            "  {",
            `    title: ${JSON.stringify(title)},`,
            `    date: ${JSON.stringify(date)},`,
            `    body: ${JSON.stringify(body)}`,
            "  },"
        ].join("\n");
        formStatus.textContent = "Post entry ready. Copy it into posts.js to publish.";
    });

    copyBtn.addEventListener("click", async () => {
        if (!output.value) {
            formStatus.textContent = "Create a post entry before copying.";
            return;
        }

        try {
            await navigator.clipboard.writeText(output.value);
            formStatus.textContent = "Copied. Paste the entry into posts.js.";
        } catch {
            formStatus.textContent = "Clipboard access is unavailable. Select the code and copy it manually.";
        }
    });
}





