var studentsList = [
    { firstName: "John", lastName: "Doe", age: 25, location: "Kenya" },
    { firstName: "Jane", lastName: "Doe", age: 22, location: "Mexico" },
];
document.addEventListener("DOMContentLoaded", function () {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    // Create header row
    var headerRow = document.createElement("tr");
    ["First Name", "Location"].forEach(function (headerText) {
        var header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    thead.appendChild(headerRow);
    // Append students to table body
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    // Assemble table
    table.appendChild(thead);
    table.appendChild(tbody);
    // Append table to body or a specific container
    document.body.appendChild(table); // Or use another container like document.getElementById('container').appendChild(table);
});
