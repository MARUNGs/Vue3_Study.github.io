<template>
    <div class="todoSummary">
        <h4>My Todo</h4>
        <input placeholder="🔍 검색" @input="search($event)"/>
        <div class="CardDiv">
            <div class="card">
            <div class="cBody">
                <h5 class="cTitle">title</h5>
                <p class="cText">Some quick</p>
            </div>
            </div>
        </div>

        <h4>미리알림</h4>
    </div>
</template>

<script setup lang="ts">

function search(e :Event) :void {

}
</script>

<style scoped>
.CardDiv {
    margin: 15px 0px;
}
.card {
    background-color: rgb(38, 38, 38);
    width: 10rem;
    height: 7rem;
}
.card-body {

}
</style>