const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let posts=[];

app.get('/', (req, res) => {
  res.render("index", {posts});
})

app.get('/new', (req, res) => {
  res.render("new");
})
app.post('/posts', (req, res) => {
  const {title,content} = req.body;
  const id = posts.length;
  posts.push({id, title, content});
  res.redirect("/");
})
app.get("/posts/:id/edit", (req,res) =>{  
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  res.render("edit", { post });
})
app.post("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/posts/" + req.params.id);
});
app.get("/posts/:id",(req,res) =>{
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if(post){
    res.render("post",{post});

  }
  else{
    res.status(404).send("Post not found");
  }
})
app.post("/posts/:id/delete", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== id);
  // Reassign ids to keep them sequential
  posts.forEach((post, index) => {
    post.id = index;
  });
  res.redirect("/");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
