async function loadStandings() {
    try {
        const response = await fetch("http://localhost:8080/api/standings");

        if (!response.ok) {
            throw new Error("Error al obtener datos");
        }

        const data = await response.json();

        const standings = data.result.total;

        renderTables(standings);

    } catch (error) {
        console.error("Error:", error);
    }
}

function renderTables(standings) {

    const container = document.getElementById("tables-container");

    // Agrupar por league_round (Group A / Group B)
    const grouped = {};

    standings.forEach(team => {
        const group = team.league_round;

        if (!grouped[group]) {
            grouped[group] = [];
        }

        grouped[group].push(team);
    });

    // Crear tabla por cada grupo
    Object.keys(grouped).forEach(group => {

        const groupTitle = document.createElement("h2");
        groupTitle.className = "group-title";
        groupTitle.textContent = group;

        container.appendChild(groupTitle);

        const table = document.createElement("table");

        table.innerHTML = `
            <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>L</th>
                    <th>PF</th>
                    <th>PA</th>
                </tr>
            </thead>
            <tbody>
                ${grouped[group].map(team => `
                    <tr>
                        <td class="rank">${team.standing_place}</td>
                        <td>${team.standing_team}</td>
                        <td>${team.standing_P}</td>
                        <td>${team.standing_W}</td>
                        <td>${team.standing_L}</td>
                        <td>${team.standing_F}</td>
                        <td>${team.standing_A}</td>
                    </tr>
                `).join("")}
            </tbody>
        `;

        container.appendChild(table);
    });
}

loadStandings();