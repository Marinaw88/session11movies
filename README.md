----------------------React----------------------------

---API Movies Project: Make your own Netflix with React---

Goals:
1. Learn how to use public APIs in your own program  <done>
2. Commit changes to Github  <done>
3. Refactor into seaparate files when appropriate <done>


-Troubleshot:-
1. Problem: How to grab image from API to display
   
   Solution: Add(+) this.state.poster_path to the base image link key.
   
2. Problem: Display movies in a row
   
   Solution: Missing a larger <div> above <div> holding movies. Add display: flex styling there.
   
3. Problem: Seems more difficult than should be to add events 
   
   Solution: Create a new MovieContainer class that lives in another file
  
  
Bonus to-do:
1. Add onMouseOver event to display more information and trigger styling
2. Add onClick event to specific movie page
3. More overall styling
