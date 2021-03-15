<style>
    .tulis{
        padding-left: 90px;
        margin-top: -20%;
        padding-bottom: 9px;
    }
    .teks{
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: left;
    }
    .close{
        margin-top: 30px;
        margin-right: 0%;
    }
</style>

<script>
    export let isActive=false;
</script>

<div class="offcanvas-menu-overlay" class:active={isActive} on:click={()=>isActive=!isActive}></div>
<div class="offcanvas-menu-wrapper" class:active={isActive}>
    <div class="offcanvas__close " class:active={isActive} on:click={()=>isActive=!isActive}>+</div>
    <div class="offcanvas__logo">
        <div class="tulis close"><a href=".#"><h3 class="teks" >KUDHUNG</h3></a></div>
    </div>
    <div id="mobile-menu-wrap"><div class="slicknav_menu"><a href="." aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><nav class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="display: none;">
                    <ul>
                        <li class="active"><a href="./index.html" role="menuitem">Home</a></li>
                        <li><a href="." role="menuitem">Hijab</a></li>
                        <!-- <li><a href="." role="menuitem">Bundling</a></li>
                        <li><a href="." role="menuitem">Keranjang Pesanan</a></li> -->
                        <li><a href="./blog.html" role="menuitem">About</a></li>
                    </ul>
                </nav></div></div>
    <!-- <div class="offcanvas__auth">
        <a href=".">Login</a>
    </div> -->
</div>