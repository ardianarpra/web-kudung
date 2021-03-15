<script>
    export let label;
    export let nama;
    export let harga;
    export let img;
</script>

<div class="col-lg-3 col-md-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/shop/shop-1.jpg" style="background-image: url({img});">
            <div class="label new">{label}</div>
            <ul class="product__hover">
                <li><a href="detailproduk"><span class="icon_bag_alt"></span></a></li>
            </ul>
        </div>
        <div class="product__item__text">
            <h6><a href="detailproduk">{nama}</a></h6>
            <div class="product__price">{harga}</div>
        </div>
    </div>
</div>