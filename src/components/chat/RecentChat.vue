<template>
    <div class="card card--size">
        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" 
        class="card__image card__image--size">
        <div class="sub-card sub-card--size">

        </div>
    </div>
</template>

.<style lang="scss" scoped>

.card{
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &__image{
        border-radius: 25px;
        position: relative;
        top: 30px;
        left: 20px;
        
        &--size{
            height: 50px;
            width: 50px;
        }
    }
}

.sub-card{
    border-radius: 10px;
    box-shadow: 0px 5px 10px 5px lighten($color: #E8EAF6, $amount: 1.5%);

    &--size{
        height: 200px;
        width: 120px;
    }
}

</style>