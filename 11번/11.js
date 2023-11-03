let today = new Date();
let hours = today.getHours();

if (hours < 10) {
  console.log("good morning");
} else if (hours < 18) {
  console.log("good afternoon");
} else if (18 < hours) {
  console.log("good evening");
}
