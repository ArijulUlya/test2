let namaList = [
	{ id: 1, nama: "John Doe" },
	{ id: 2, nama: "Jane Doe" },
	{ id: 3, nama: "Bob Smith" },
	// add more names here
];

const namaElement = document.getElementById("nama-list");

namaList.forEach((nama) => {
	const listItem = document.createElement("li");
	listItem.textContent = nama.nama;
	namaElement.appendChild(listItem);
});