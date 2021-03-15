<script>
import Grid from "../components/Grid.svelte";

    let pro_pash=[
        {
            nama:"Pashmina Ero",
            hrg:"Rp. 45.000",
            gmbr:"img/pash-ero.jpg"
        },
        {
            nama:"Pashmina Hycont",
            hrg:"Rp. 38.000",
            gmbr:"img/pash-hyc.jpeg"
        },
        {
            nama:"Pashmina B",
            hrg:"Rp. 35.000",
            gmbr:"img/pas-ceruty.jpg"
        },
    ]
    let pro_squ=[
        {
            nama:"Hycont Square",
            hrg:"Rp. 30.000",
            gmbr:"img/squ-hyc.jpg"
        },
        {
            nama:"Errow Square",
            hrg:"Rp. 35.000",
            gmbr:"img/squ-ero.jpg"
        },
        {
            nama:"Milky Square",
            hrg:"Rp. 48.000",
            gmbr:"img/squ-milk.jpeg"
        },
    ]
    let pash_squ=[
        {
            nama:"Pashmina Square Ceruty",
            hrg:"Rp. 30.000",
            gmbr:"img/pasqu-ceruty.jpg"
        },
        {
            nama:"Pashmina Square Hycont",
            hrg:"Rp. 37.000",
            gmbr:"img/pasqu-hyc.jpg"
        },
        {
            nama:"Pashmina Square B",
            hrg:"Rp. 38.000",
            gmbr:"img/pasqu-b.jpg"
        },
    ]
</script>
<style>
    .pash{
        margin-top: 60%;
    }
    .blok{
        margin-top: 40%;
    }
    /* .teks-banner{
        font-size: 30px;
        font-weight: bolder;
    } */
    .fonts{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 60px;
    }
    .bg-banner{
        width: 100%;
        height:70%;
    }
</style>
<section class="categories">
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-6 p-0">
				<div class="categories__item categories__large__item set-bg" data-setbg="img/categories/category-1.jpg" style="background-image: url(img/pash.jpeg);">
                    <div class="categories__text pash ">
                        <h4>PASHMINA</h4>
                        <hr/>
                        <a href="hijab/square">Shop now</a>
                    </div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 p-0">
					<div class="categories__item set-bg" data-setbg="img/categories/category-2.jpg" style="background-image: url(img/squ.jpeg);">
						<div class="categories__text blok">
							<h4>SQUARE</h4>
                            <hr/>
							<a href="hijab/square">Shop now</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 p-0">
					<div class="categories__item set-bg" data-setbg="img/categories/category-3.jpg" style="background-image: url(img/paket.jpg);">
						<div class="categories__text blok">
							<h4>PAKET</h4>
                            <hr/>
							<a href="bundling/paket">Shop now</a>
						</div>
					</div>
				</div>
				    <div class="col-lg-6 col-md-6 col-sm-6 p-0">
					<div class="categories__item set-bg" data-setbg="img/categories/category-4.jpg" style="background-image: url(img/hampers.jpg);">
						<div class="categories__text blok">
							<h4>HAMPERS</h4>
                            <hr/>
							<a href="bundling/hampers">Shop now</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 p-0">
					<div class="categories__item set-bg" data-setbg="img/categories/category-5.jpg" style="background-image: url(img/bucket.jpg);">
						<div class="categories__text blok">
							<h4>PASHMINA SQUARE</h4>
                            <hr/>
							<a href="bundling/bucket">Shop now</a>
						</div>
					</div>
				</div>                          
			</div>
		</div>
	</div>
</div>
</section>

<section class="banner set-bg bg-banner" data-setbg="img/banner.jpg" style="background-image: url(img/banner.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-7 col-lg-8 m-auto">
                <div class="banner__slider owl-carousel owl-loaded owl-drag">
                <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-2070px, 0px, 0px); transition: all 1.2s ease 0s; width: 4830px;"><div class="owl-item cloned" style="width: 690px;"><div class="banner__item">
                    </div></div><div class="owl-item cloned" style="width: 690px;"><div class="banner__item">
                    </div></div><div class="owl-item" style="width: 690px;"><div class="banner__item">
                    </div></div><div class="owl-item cloned" style="width: 690px;"><div class="banner__item">
                        <div class="banner__text">
                            <span>Coming Soon Collection</span>
                            <h1 class="fonts">HIJAB 2 IN 1</h1>
                            <!-- <h5 class="teks-banner">20 April 2021</h5> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>


<section class="trend spad">
    <div class="container">
        <div class="row mar">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                        <h4>Pashmina</h4>
                    </div>
                    {#each pro_pash as item}
                    <Grid {...item}/>
                    {/each}
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                        <h4>Square</h4>
                    </div>
                </div>
                {#each pro_squ as item}
                <Grid {...item}/>
                {/each}
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                        <h4>Pashmina Square</h4>
                    </div>
                </div>
                {#each pash_squ as item}
                <Grid {...item}/>
                {/each}
            </div>
        </div>
    </div>
</section>