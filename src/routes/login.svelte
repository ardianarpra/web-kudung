<script>
    let model = {username:"", password : ""};
    let loading = false;
    async function login(){
        loading = true;
        try {
            const response = await fetch("api/user?mode=login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ model }),
            });
            if (response.ok) {
                const dt = await response.json();
                loading = false;
                if (dt.isAdmin) {
                    location.reload();
                }
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }
</script>
<style>
    .textp{
        text-align: center;
    } 
</style>
<section class="checkout spad textp">
    <div class="container ">
        <form on:submit|preventDefault={login} class="checkout__form">
            <div class="row">
                <div class="col-lg-8">
                    <h5 class="textp">LOGIN</h5>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="checkout__form__input">
                                <p>Username</p>
                                <input type="text" bind:value={model.username}>
                            </div>
                            <!-- <div class="checkout__form__input">
                                <p>Email <span>*</span></p>
                                <input type="text">
                            </div> -->
                            <div class="checkout__form__input">
                                <p>Password <span>*</span></p>
                                <input type="password" bind:value={model.password}>
                            </div>
                            <div class="checkout__form__input">
                                <input type="submit" value={loading ? "Please wait.." : "LOGIN"}>
                            </div>
                        </div>
                </div>
            </form>
        </div>
    </section>