<script>
    import Hijab from "../../../components/Hijab.svelte";
    import Slide from "../../../components/slide.svelte";
    let datapasqu = [
        {
            label:"New",
            nama:"Pashmina Square Ceruty",
            harga:"Rp. 30.000",
            img:"img/pasqu-ceruty.jpg",
            dekripsi:"Bahan ceruty yang dingin dengan kain yang ringan dan jatuh. Mudah dibentuk dan cocok digunakan untuk aktivitas sehari hari"
        },
        {
            label:"New",
            nama:"Pashmina Square Hycont",
            harga:"Rp. 37.000",
            img:"img/pasqu-hyc.jpg",
            deskripsi:"bahan katun yang lembut dan tidak terawang, terasa dingin saat digunakan dan tidak kusut"
        },
        {
            label:"New",
            nama:"Pashmina Square B",
            harga:"Rp. 38.000",
            img:"img/pasqu-b.jpg",
            dekripsi:"Bahan ceruty jenis Babydoll yang dingin dengan kain yang ringan dan jatuh. Mudah dibentuk dan cocok digunakan untuk aktivitas sehari hari"
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
                        <span><i ></i> Pashmina Square</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="shop spad ">
        <div class="container">
            <h6 class="font">PASHMINA SQUARE COLLECTION</h6>
            <div class="row mar">
                <div class="col-lg-9 col-md-9 ">
                    <div class="row pos">
                        {#each datapasqu as item}
                            <Hijab {...item}/>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <Slide/>
    </section>