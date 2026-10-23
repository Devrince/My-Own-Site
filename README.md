# My-Own-Site
Making ur own Site where u can post about urself, ur projects, and ur contact for the support!

## What this is
This is a simple personal website. U can use it to write blog posts, show ur projects, share ur social links, and tell people about urself. It has no backend and no database. It is just HTML, CSS and a little JavaScript, and it can be hosted for free on GitHub Pages.

## What u need
- A computer
- VS Code (free)
- A GitHub account
- A browser (Chrome, Safari or Firefox)
- Basic HTML and CSS. U don't need to be an expert, just know what a tag is.

## How the files work
Each page is its own file. The style and the logic are in shared files, so u only change things in one place.

| File | What it does |
|---|---|
| `index.html` | The blog page (home page) |
| `socials.html` | Ur social links |
| `projects.html` | Ur projects |
| `about.html` | About urself |
| `admin.html` | A private helper to write new blog posts. Keep it on ur computer only |
| `styles.css` | All the colors, fonts and layout |
| `script.js` | Shows the blog posts and runs the admin helper |
| `posts.js` | Ur blog posts. Edit this to add or change posts |
| `pattern.svg` | The faint background icons |
| `logo.png` | Ur logo, shown at the top and in the browser tab |
| `.gitignore` | Tells Git which files to keep off GitHub |

## Step 1: Make the folder
1. Make a new folder on ur computer and call it `My-Own-Site`.
2. Open it in VS Code (File → Open Folder).
3. Create the files from the table above.

Keep every file name in lowercase, like `about.html` and not `About.html`. GitHub is case-sensitive, so `About.html` and `about.html` are different files there, even though ur Mac treats them as the same.

## Step 2: Build the pages
Start with one page. Copy the header and footer from `index.html` into the other pages so they all look the same. Each page needs:
- The `<head>` with the title, the logo and `styles.css`
- A `<header>` with the logo and the menu
- A `<main>` with the page content
- A `<footer>`

The menu is just links:

```html
<nav>
  <a href="index.html">Blog</a>
  <a href="socials.html">Socials</a>
  <a href="projects.html">Projects</a>
  <a href="about.html">About</a>
</nav>
```

Every `href` must match a real file name exactly, letter for letter.

## Step 3: Style it
All the look is in `styles.css`. The top of the file holds the colors:

```css
:root {
  --bg: #fafafa;
  --ink: #111;
  --yellow: #ffd23f;
}
```

Change those few values and the whole site changes. For a playful look, use bold black borders, rounded corners, a yellow hover color and a small offset shadow on cards. The background is set in the `body` rule with `pattern.svg`, which is a small tile repeated across the page.

## Step 4: Add blog posts
Posts live in `posts.js` as a list. Each post has a title, a date and a body:

```js
const posts = [
  {
    title: "My first post",
    date: "2026-10-05",
    body: "This is the first paragraph.\n\nThis is the second paragraph."
  }
];
```

Rules:
- Dates use the format `YYYY-MM-DD`.
- Leave a blank line between paragraphs. In the code, that's `\n\n`.
- The newest post shows first automatically.

`script.js` reads that list and builds the page for each post. U don't need to touch `script.js` to add posts.

## Step 5: Use the admin helper
`admin.html` makes writing posts easier:
1. Double-click `admin.html` in ur project folder to open it in the browser.
2. Fill in the title, date and post text.
3. Click **Make post**, then **Copy code**.
4. Paste the code into the `posts` list in `posts.js`.
5. Save, then push to GitHub.

Keep this page on ur computer. It is not meant to be published, so it is in `.gitignore` and not uploaded to GitHub. Anyone who knows the address can open a page on a public site, so keeping it off GitHub is the safest choice.

## Step 6: Test it on ur computer
Open `index.html` in the browser. Click every menu item and check that each page loads, the logo shows, and the background pattern appears. If something looks wrong, press **Cmd + Option + I** and check the **Console** tab. It shows the name of any file that didn't load.

## Step 7: Put it on GitHub
1. Create a new repository on GitHub called `My-Own-Site`. Make it public.
2. In the VS Code terminal, run:
   ```
   git init
   git add .
   git commit -m "First version of my site"
   git branch -M main
   git remote add origin https://github.com/ur-username/My-Own-Site.git
   git push -u origin main
   ```
3. Check the file list on GitHub. Every name should be lowercase and match the links in ur pages.

## Step 8: Turn on GitHub Pages
1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Pick **main** and **/ (root)**, then click **Save**.
4. Wait 1 to 2 minutes. Ur site is now at:
   `https://ur-username.github.io/My-Own-Site/`

## Common problems
- **A page shows 404:** the file name in the link and the file name on GitHub don't match. Check capital letters first.
- **The blog is empty:** `index.html` must load `posts.js` and `script.js`, and both names must match the files exactly.
- **No styles:** `styles.css` isn't loading. Check the name in the `<link>` tag.
- **The background doesn't show:** `pattern.svg` is missing from GitHub. Make sure it was committed.
- **The live site doesn't match my computer:** reload with **Cmd + Shift + R**, and make sure you pushed the latest changes.

## Ideas to add next
- Make each blog post open on its own page
- Add a photo to the about page
- Add a dark mode
- Add a custom domain like `yourname.org`
- Add a "last updated" date to the footer

## Made with
HTML, CSS, JavaScript, GitHub and GitHub Pages.
