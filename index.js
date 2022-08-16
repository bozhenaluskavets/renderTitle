// TASK 1
// const title = document.getElementById('yourTitle');

// const data = {
// 	title: "some title from js"
// }

// title.innerHTML = data.title;


// TASK 2
const data = {
	titles: [
		"some first title from js",
        "some second title",
		"one more",
	]
}

const title = document.getElementById('yourTitle');
const newData = data.titles;

let index = 0;
setInterval(function() {
    title.innerHTML = newData[index++ % newData.length];
}, 3000);