<template>
    <tr>
        <td>{{ schoolData.school }}</td>
        <td class="text-center">{{ schoolData.division }}</td>
        <td>{{ schoolData.conference }}</td>
        <td class="text-center">{{ schoolData.ranking }}</td>
        <td class="text-center">{{ schoolData.gpa.min.toFixed(2) }}</td>
        <td class="text-center">{{ schoolData.gpa['25%'].toFixed(2) }}</td>
        <td :class="getHex(schoolData.gpa['50%'])" class="text-center">{{ schoolData.gpa['50%'].toFixed(2) }}</td>
        <td class="text-center">{{ schoolData.gpa['75%'].toFixed(2) }}</td>
        <td class="text-center">{{ schoolData.gpa.max.toFixed(2) }}</td>
        <td class="text-center">{{ schoolData.sat.reading.min === 'N/A' ? 'Not Reported' : schoolData.sat.reading.min + '-'
            +
            schoolData.sat.reading.max }}</td>
        <td class="text-center">{{ schoolData.sat.math.min === 'N/A' ? 'Not Reported' : schoolData.sat.math.min + '-' +
            schoolData.sat.math.max }}
        </td>
        <td class="text-center">{{ schoolData.act.min === 'N/A' ? 'Not Reported' : schoolData.act.min + '-' +
            schoolData.act.max }}</td>
    </tr>
</template>

<script>
export default {
    name: "InsightTableRow",
    props: ['schoolData', 'athleteData'],
    methods: {
        getHex(gpa) {
            const diff = gpa - this.athleteData.gpa;
            console.log(diff);
            if (diff > .1) {
                return "bg-gpa-more-than-10-above";
            } else if (diff > 0 && diff <= .1) {
                return "bg-gpa-less-than-10-above";
            } else if (diff == 0) {
                return "bg-gpa-equal";
            } else if (diff < 0 && diff >= -.1) {
                return "bg-gpa-less-than-10-below";
            } else if (diff < -.1) {
                return "bg-gpa-more-than-10-below"
            }
        }
    }
}
</script>

<style scoped>
td {
    font-size: 12px;
    padding: 5px;
}
</style>