<template>
    <div class="chat-section">
        <nav class="chat-section__navbar 
            chat-section__navbar--size 
            chat-section__navbar--theme">
            <div class="navbar__left">
                <img src="" alt="">
                <div class="user">
                   <h4 class="user__name">Charley</h4>
                   <span class="user__email">charley@gmail.com</span>
                </div>
            </div>
            <div class="navbar__right">
                <button class="button button--size button--theme"></button>
                <button class="button button--size button--theme"></button>                
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

.chat-section{
    display: flex;
    flex-direction: column;

    &__navbar{
        display: flex;
        align-items: center;

        &--size{
            height: 70px;
            width: 100%;
        }

        &--theme{
            background-color: #E8EAF6;
        }
    }
}

.navbar{

    &__left{
        
    }

    &__right{
        display: flex;
    }
}

.user{

    &__name{

    }

    &__email{
        font-size: 12px;
    }
}

.button{
    border: none;
    cursor: pointer;
    margin-right: 10px;
    
    &--size{
        height: 40px;
        width: 40px;
    }

    &--theme{
        background-color: #6895ED;
    }
}

</style>