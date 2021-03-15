
<script>
import Hijab from "../../../components/Hijab.svelte";
import Slide from "../../../components/slide.svelte";
let datasquare = [
    {
        label:"New",
        nama:"Errow Square",
        harga:"Rp. 35.000",
        img:"img/squ-ero.jpg",
        deskripsi:"Kain Errow dengan perpaduan katun, tidak mudah kusut dan mudah digunakan"
    },
    {
        label:"New",
        nama:"Hycont Square",
        harga:"Rp. 30.000",
        img:"img/squ-hyc.jpg",
        deskripsi:"Kain yang tidak mudah kusut, dingin dan tidak terawang saat digunakan"
    },
    {
        label:"New",
        nama:"Milky Square",
        harga:"Rp. 48.000",
        img:"img/squ-milk.jpeg",
        deskripsi:"perpaduan kain wolvis yang elegan dan cocok digunakan untuk acara formal"
    }
]
</script>

<style>
    .font{
        font-size: 35px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bold;
        text-align: center;
        margin-left: -5%;
        margin-top: -3%;
        padding-bottom: 2%;
    }
    .mar{
        margin-left: 30%;
    }
    .pos{
        margin-right: -50%;
        margin-left: -40%;
    }
</style>

<div class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__links">
                    <a href=".#"><i class="fa fa-home"></i> Home</a>
                    <a href="hijab"><i ></i> Hijab</a>
                    <span><i ></i> Square</span>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="shop spad ">
    <div class="container">
        <h6 class="font">SQUARE COLLECTION</h6>
        <div class="row mar">
            <div class="col-lg-9 col-md-9 ">
                <div class="row pos" >
                    {#each datasquare as item}
                        <Hijab {...item}/>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <Slide/>
</section>