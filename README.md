  the cms is a web page where you can so far choose between three page types you want to create. 
  After you choose your type you get a new form for that type that you fill in, when you are done filling it in you add page. Then you can choose a different type and add another page. When you are done you can 'create website', which just converts your state object into a JSON file that the cms-website uses to build its pages. Right now it just can do titles and background color, but it will build the pages and you can go through them. However, more interesting perhaps is if you run cms and look at the console you can see how the state object is being built, basically it holds everything in current page and then adds the page to an array when click 'add page'. 

  Once I flesh out the three pages available on the cms-website side, add page wont force the order of the website, instead you will be able to drag possible pages into whatever order you would like. 
