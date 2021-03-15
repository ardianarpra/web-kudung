<script>
    export let nama;
    export let hrg;
    export let gmbr;
</script>

<div class="trend__item">
    <div class="trend__item__pic">
        <a href="detailproduk"><img src="{gmbr}" class="img-fluid" width="120" alt=""></a>
    </div>
    <div class="trend__item__text">
        <h6>{nama}</h6>
        <div class="product__price">{hrg}</div>
    </div>
</div>