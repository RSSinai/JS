const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

// Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.

const orderedList = document.createElement("ol");
users.forEach((ele)=>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `${ele.firstName} ${ele.lastName}`;
    orderedList.appendChild(listItem);
// data-id
listItem.setAttribute("data-id", ele.id);
})
console.log(orderedList)

// remove bullets 
orderedList.style.listStyle = "none";

