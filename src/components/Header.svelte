<style>
    /* .imag{
        width: 80px;
        height: 80px;
        margin-left: 0%;
        margin-top: -7%;
        padding-left: 0px;
    } */
    /* .tulis{
        padding-left: 0px;
        margin-top: -20%;
        padding-bottom: 9px;
    } */
    .teks{
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .hamburger{
        margin-top: -3%;
    }
    .mar{
        margin-left: 20%;
    }
</style>

<script>
import Popupsidebar from "./popupsidebar.svelte";
let isActive=false;
</script>
<Popupsidebar bind:isActive={isActive}></Popupsidebar>
<header class="header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-3 col-lg-2">
                <div class="header__logo ">
                    <!-- <a href=".#" class="imag"><img src="img/logo.jpeg"  alt=""></a> -->
                    <div class=""><a href=".#"><h3 class="teks" >KUDHUNG</h3></a></div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-7 mar">
                <nav class="header__menu">
                    <ul>
                        <li class="active"><a href=".#">Home</a></li>
                        <li><a href="hijab">Hijab</a>
                            <ul class="dropdown">
                                <li><a href="hijab/pashmina">Pashmina</a></li>
                                <li><a href="hijab/square">Square</a></li>
                                <li><a href="hijab/pasqu">Pashmina Square</a></li>
                            </ul>
                        </li>
                        <!-- <li><a href="bundling">Bundling</a>
                            <ul class="dropdown">
                                <li><a href="bundling/paket">Paket Hemat</a></li>
                                <li><a href="bundling/hampers">Hampers</a></li>
                                <li><a href="bundling/bucket">Bucket</a></li>
                            </ul>
                        </li>
                        <li><a href=".">Informasi Pesanan</a>
                            <ul class="dropdown">
                                <li><a href="Informasi/keranjang-belanja">Keranjang Belanja</a></li>
                                <li><a href="./shop-cart.html">Pembayaran</a></li>
                                <li><a href="./checkout.html">Pengemasan</a></li>
                                <li><a href="./blog-details.html">Pengiriman</a></li>
                                <li><a href="./blog-details.html">Pesanan Selesai</a></li>
                            </ul>
                        </li> -->
                        <li><a href="about">About</a></li>
                    </ul>
                </nav>
            </div>
            <!-- <div class="col-lg-3">
                <div class="header__right">
                    <div class="header__right__auth">
                        <a href="login">Login</a>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="canvas__open hamburger" on:click={()=>isActive=!isActive}>
            <i class="fa fa-bars"></i>
        </div>
    </div>
</header>