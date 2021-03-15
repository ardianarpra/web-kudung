<script>
    import Hijab from "../../../components/Hijab.svelte";
    import Slide from "../../../components/slide.svelte";
    let datapashmina = [
        {
            label:"New",
            nama:"Pashmina Ero",
            harga:"Rp. 45.000",
            img:"img/pash-ero.jpg",
            deskripsi:"kain ero memiliki serat katun yang terasa dingin saat digunakan. Kain yang mudah dibentuk dan tidak mudah kusut dengan perawatan yang tepat"
        },
        {
            label:"New",
            nama:"Pashmina Hycont",
            harga:"Rp. 38.000",
            img:"img/pash-hyc.jpeg",
            deskripsi:"bahan hycon dengan kain yang lembut, ringan dan tidak terawang ketika digunakan. Sangat cocok untuk aktivitas sehari-hari"
        },
        {
            label:"New",
            nama:"Pashmina B",
            harga:"Rp. 35.000",
            img:"img/pas-ceruty.jpg",
            deskripsi:"kain ceruti jenis Babydoll yang memiliki karakteristik kain yang ringan, jatuh dan mudah dibentuk dan digunakan"
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
                        <span><i ></i> Pashmina</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="shop spad ">
        <div class="container">
            <h6 class="font">PASHMINA COLLECTION</h6>
            <div class="row mar">
                <div class="col-lg-9 col-md-9 ">
                    <div class="row pos" >
                        {#each datapashmina as item}
                            <Hijab {...item}/>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <Slide/>
    </section>