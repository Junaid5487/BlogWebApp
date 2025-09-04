# TODO: Fix Edit and Delete Functions

## Issues Identified
- [ ] Typo in edit route: `ers` instead of `res` in index.js
- [ ] Delete form action URL mismatch: `/post/` instead of `/posts/` in post.ejs
- [ ] Type mismatch in id comparisons: req.params.id is string, post.id is number
- [ ] After deletion, post ids are not updated, causing index mismatches
- [ ] GET /posts/:id route assumes id is array index, but may not be after deletions

## Fixes Needed
- [ ] Fix typo in app.get("/posts/:id/edit") route
- [ ] Correct delete form action URL in post.ejs
- [ ] Use parseInt for id comparisons in routes
- [ ] Reassign ids after deletion to keep them sequential
- [ ] Update GET /posts/:id to find by id instead of array index
