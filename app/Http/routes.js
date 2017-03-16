'use strict'

const Route = use('Route')

const Post = use('App/Model/Post')

Route.get('/posts', function * (request, response) {
  //Simple get All Posts
  const posts = yield Post.all()

  response.json(posts)
})

Route.post('/posts', function * (request, response) {

  //create new Post
  let post = new Post({
    title: request.input('title'),
    author: {
      name: request.input('author_name')
    }
  });

  yield post.save();

  yield response.json(post)
})
