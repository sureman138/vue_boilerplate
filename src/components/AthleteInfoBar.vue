<script setup>
import InsightTableRow from './InsightTableRow.vue';
</script>

<template>
    <div id="container">
        <div id="athlete-info-bar">
            <hr id="top-bar" class="border-theme-blue border-4 fixed top-0 w-3/4">
            <div id="profile-pic-section">
                <img id="profile-pic" src="../assets/profile-pic.webp" height="100" width="100">
            </div>
            <div id="athlete-name">
                <h2 class="text-2xl font-bold text-theme-blue">{{ athlete.name }}</h2>
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
                <table class="table-auto mt-6 whitespace-nowrap">
                    <thead class="bg-header-black text-white leading-5">
                        <tr class="h-0">
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Ranking*</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>School Name</th>
                            <th>Athletic Div</th>
                            <th>Conference</th>
                            <th>
                                <span class="text-xs">(D1 NCAA)</span>
                            </th>
                            <th colspan="5">GPA**</th>
                            <th>
                                <span>SAT Reading***</span>
                            </th>
                            <th>
                                <span>SAT Math***</span>
                            </th>
                            <th>
                                <span>ACT Composite***</span>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <span class="text-xs">(DII & DIII Hero Sports)</span>
                            </th>
                            <th>Min</th>
                            <th>25%</th>
                            <th>50%</th>
                            <th>75%</th>
                            <th>Max</th>
                            <th>
                                <span>25%-75%</span>
                            </th>
                            <th>
                                <span>25%-75%</span>
                            </th>
                            <th>
                                <span>25%-75%</span>
                            </th>
                        </tr>
                    </thead>
                    <InsightTableRow v-for="(row, index) in rowData" :key="index"
                        :class="index % 2 !== 0 ? 'bg-table-row' : 'bg-white'" :schoolData="row" :athleteData="athlete" />
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
    },
    data() {
        return {
            rowData: this.athlete.report
        };
    },
    
    components: { InsightTableRow }
};
</script>
<style scoped>
label {
    font-weight: bold;
}

#athlete-info-bar {
    display: grid;
    grid-template-areas:
        'top-bar top-bar top-bar top-bar top-bar top-bar .'
        '. profile-pic-section name name . logo .'
        '. profile-pic-section info-1 info-2 . logo .'
        '. profile-pic-section info-1 info-2 . report-title .'
        '. profile-pic-section info-1 info-2 . . .'
        '. table table table table table .';
    margin-top: 50px;
    grid-template-columns: .1fr .25fr .5fr 1fr .25fr 1fr .25fr;
}

#top-bar {
    grid-area: top-bar;
    line-height: 50px;
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

#table {
    grid-area: table;
}

th {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    line-height: 12px;
}
</style>