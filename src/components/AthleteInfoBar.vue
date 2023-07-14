<template>
    <div id="container">
        <div id="athlete-info-bar">
            <div id="profile-pic-section">
                <img id="profile-pic" src="../assets/profile-pic.webp" height="100" width="100">
            </div>
            <div id="athlete-name">
                <h2 class="text-3xl">{{ athlete.name }}</h2>
            </div>

            <div id="athlete-info-1">
                <div>
                    <label>Sport:</label>
                    {{ athlete.sport }}
                </div>
                <div>
                    <label>Class:</label>
                    {{ athlete.grad_year }}
                </div>
                <div>
                    <label>Club:</label>
                    {{ athlete.club.name }}
                </div>
            </div>
            <div id="athlete-info-2">
                <div>
                    <label>High school:</label>
                    {{ athlete.high_school.name }}
                </div>
                <div>
                    <label>GPA:</label>
                    {{ athlete.gpa }}
                </div>
                <div>
                    <label>Desired Major:</label>
                    {{ athlete.major }}
                </div>
            </div>
            <div id="logo">
                <img src="../assets/sr.jpg" height="100" width="100">
            </div>
            <div id="report-title">
                <h3>Academic Fit Report</h3>
            </div>
            <div id="table">
                <table class="table-auto">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td>Griffin</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Lois</td>
                        <td>Griffin</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>Joe</td>
                        <td>Swanson</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Cleveland</td>
                        <td>Brown</td>
                        <td>$250</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AthleteInfoBar",
    props: {
        athlete: {
            type: Object,
            required: false
        }
    }
};
</script>
<style scoped>
#athlete-info-bar {
    display: grid;
    grid-template-areas:
        'profile-pic-section name name . logo .'
        'profile-pic-section info-1 info-2 . logo .'
        'profile-pic-section info-1 info-2 . report-title .'
        'profile-pic-section info-1 info-2 . . .'
        '. . . . . .'
        'table table table table table .';
    margin-top: 50px;
    grid-template-columns: .5fr .5fr 1fr .25fr 1fr .75fr;
}


#profile-pic-section {
    grid-area: profile-pic-section;
    justify-self: center;
    align-self: center;
}

#profile-pic {
    border-radius: 50%;
}

#athlete-name {
    grid-area: name;
}

ul {
    list-style-type: none;
}


#athlete-info-1 {
    grid-area: info-1;
}

#athlete-info-2 {
    grid-area: info-2;
}

#logo {
    grid-area: logo;
    justify-self: end;
}

#report-title {
    grid-area: report-title;
    justify-self: end;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

#table {
    grid-area: table;
}
</style>