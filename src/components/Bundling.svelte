<script>
    export let label_bundling;
    export let img_bundling;
    export let nama_bundling;
    export let hrg_bundling;
</script>

<div class="col-lg-3 col-md-4 col-sm-6 mix women">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg" style="background-image: url({img_bundling});">
            <div class="label new">{label_bundling}</div>
            <ul class="product__hover">
                <li><a href="detailproduk"><span class="icon_bag_alt"></span></a></li>
            </ul>
        </div>
        <div class="product__item__text">
            <h6><a href="detailproduk">{nama_bundling}</a></h6>
            <div class="product__price">{hrg_bundling}</div>
        </div>
    </div>
</div>