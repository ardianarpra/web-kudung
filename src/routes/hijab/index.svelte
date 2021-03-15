<script>
import Grid from "../../components/Grid.svelte";
    let datapashmina = [
    {
        nama:"Pashmina Ero",
        hrg:"Rp. 45.000",
        gmbr:"img/pash-ero.jpg",
        deskripsi:"kain ero memiliki serat katun yang terasa dingin saat digunakan. Kain yang mudah dibentuk dan tidak mudah kusut dengan perawatan yang tepat"
    },
    {
        nama:"Pashmina B",
        hrg:"Rp. 35.000",
        gmbr:"img/pas-ceruty.jpg",
        deskripsi:"kain ceruti jenis Babydoll yang memiliki karakteristik kain yang ringan, jatuh dan mudah dibentuk dan digunakan"
    },
    {
        nama:"Pashmina Hycont",
        hrg:"Rp. 38.000",
        gmbr:"img/pash-hyc.jpeg",
        deskripsi:"bahan hycon dengan kain yang lembut, ringan dan tidak terawang ketika digunakan. Sangat cocok untuk aktivitas sehari-hari"
    },
    ]

    let datasquare = [
    {
        nama:"Errow Square",
        hrg:"Rp. 35.000",
        gmbr:"img/squ-ero.jpg",
        deskripsi:"Kain Errow dengan perpaduan katun, tidak mudah kusut dan mudah digunakan"
    },
    {
        nama:"Hycont Square",
        hrg:"Rp. 38.000",
        gmbr:"img/squ-hyc.jpg",
        deskripsi:"Kain yang tidak mudah kusut, dingin dan tidak terawang saat digunakan"
    },
    {
        nama:"Milky Square",
        hrg:"Rp. 48.000",
        gmbr:"img/squ-milk.jpeg",
        deskripsi:"perpaduan kain wolvis yang elegan dan cocok digunakan untuk acara formal"
    }
    ]
    let datapasqu = [
    {
        nama:"Pashmina Square Ceruty",
        hrg:"Rp. 30.000",
        gmbr:"img/pasqu-ceruty.jpg",
        dekripsi:"Bahan ceruty yang dingin dengan kain yang ringan dan jatuh. Mudah dibentuk dan cocok digunakan untuk aktivitas sehari hari"
    },
    {
        nama:"Pashmina Square Hycont",
        hrg:"Rp. 37.000",
        gmbr:"img/pasqu-hyc.jpg",
        deskripsi:"bahan katun yang lembut dan tidak terawang, terasa dingin saat digunakan dan tidak kusut"
    },
    {
        nama:"Pashmina Square B",
        hrg:"Rp. 38.000",
        gmbr:"img/pasqu-b.jpg",
        dekripsi:"Bahan ceruty jenis Babydoll yang dingin dengan kain yang ringan dan jatuh. Mudah dibentuk dan cocok digunakan untuk aktivitas sehari hari"
    }
    ]
</script>

<style>
    .mar{
        margin-left: 0%;
    }
    .next{
        font-size: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: left;
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
<section class="trend spad">
    <div class="container">
        <div class="row mar">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                       <h4>Pashmina</h4>
                        <hr/>
                        <a href="hijab/pashmina" class="next"><h6 >Selengkapnya .... </h6></a>
                    </div>
                    {#each datapashmina as item}
                    <Grid {...item}/>
                    {/each}
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                      <h4>Square</h4>
                       <hr/>
                       <a href="hijab/square" class="next"><h6 >Selengkapnya .... </h6></a>
                    </div>
                </div>
                {#each datasquare as item}
                <Grid {...item}/>
                {/each}
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                      <h4>Pashmina Square</h4>
                       <hr/>
                       <a href="hijab/pasqu" class="next"><h6 >Selengkapnya .... </h6></a>
                    </div>
                </div>
                {#each datapasqu as item}
                <Grid {...item}/>
                {/each}
            </div>
        </div>
    </div>
</section>