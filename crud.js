const data = [
    { "name": "Ervin Behxheti", "age": 20, "WPM": 91, "Accuracy": 93 },
    { "name": "Olti Jusufi", "age": 14, "WPM": 44, "Accuracy": 78 },
    { "name": "Edonart Ademi", "age": 16, "WPM": 25, "Accuracy": 98 },
    { "name": "Enes Abdurrahmani", "age": 13, "WPM": 54, "Accuracy": 89 },
    { "name": "Atik Kadriu", "age": 13, "WPM": 70, "Accuracy": 81 },
    { "name": "Edison Ahmeti", "age": 17, "WPM": 66, "Accuracy": 90 },
    { "name": "Erduan Fejza", "age": 17, "WPM": 29, "Accuracy": 87 },
    { "name": "Dasara Beqiri", "age": 13, "WPM": 44, "Accuracy": 96 },
    { "name": "Tuana Beqiri", "age": 13, "WPM": 24, "Accuracy": 91 },
    { "name": "Olsa Bislimi", "age": 13, "WPM": 45, "Accuracy": 89 },
    { "name": "Eris Peci", "age": 19, "WPM": 53, "Accuracy": 95 },
    { "name": "Eren Nuka", "age": 13, "WPM": 104, "Accuracy": 99 },
    { "name": "Sahit Pllana", "age": 13, "WPM": 54, "Accuracy": 92 },
    { "name": "Ari Fazliu", "age": 13, "WPM": 71, "Accuracy": 92 },
    { "name": "Ermal Qela", "age": 13, "WPM": 29, "Accuracy": 89 },
    { "name": "Gentrit Sylejmani", "age": 13, "WPM": 34, "Accuracy": 97 }
];

data.sort((a, b) => b.WPM - a.WPM);

const tbody = document.querySelector("#tbody");
const sortSelect = document.querySelector("#sortSelect");

function sortData(order) {
    if (order === 'az') {
        data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'za') {
        data.sort((a, b) => b.name.localeCompare(a.name));
    }
}

function renderTable() {
    tbody.innerHTML = data.map((obj, i) => `
        <tr>
            <td data-label="Name">${obj.name}</td>
            <td data-label="Age">${obj.age}</td>
            <td data-label="WPM">${obj.WPM}</td>
            <td data-label="Accuracy">${obj.Accuracy}</td>
            <td>
                <button class="editBtn" data-index="${i}">Edit</button>
                <button class="deleteBtn" data-index="${i}">Delete</button>

            </td>
        </tr>
    `).join("");

    document.querySelectorAll(".deleteBtn").forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.currentTarget.dataset.index;
            data.splice(index, 1);
            renderTable();
        });
    });

    // Attach edit handlers
    document.querySelectorAll(".editBtn").forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.currentTarget.dataset.index;
            const person = data[index];

            const newName = prompt("Edit name:", person.name);
            const newAge = prompt("Edit age:", person.age);
            const newWPM = prompt("Edit WPM:", person.WPM);
            const newAccuracy = prompt("Edit Accuracy:", person.Accuracy);

            if (newName && newAge && newWPM && newAccuracy) {
                data[index] = {
                    name: newName,
                    age: parseInt(newAge),
                    WPM: parseInt(newWPM),
                    Accuracy: parseInt(newAccuracy)
                };
                data.sort((a, b) => b.WPM - a.WPM)
                renderTable();
            }
        });
    });
}

renderTable();

