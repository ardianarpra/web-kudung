<script>
    import { onMount } from "svelte";
    async function index() {
        try {
            const response = await fetch("api/product?mode=all");
            if (response.ok) {
                const dt = await response.json();
                return dt;
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }
    let data = [];
    onMount(async () => {
        data = await index();
    });

    let model = { nama: "", harga:"", deskripsi:"",id_warna:"", img:"", id_jenis:"" };
    let id = null;
    let loading = false;

    async function insert() {
        console.log(model);
        loading=true;
        try {
            const response = await fetch("api/product", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ model }),
            });
            if (response.ok) {
                await response.json();
                data = await index();
                loading=false;
                model.nama = "";
                model.harga = "";
                model.deskripsi = "";
                model.id_warna = "";
                model.img = "";
                model.id_jenis = "";
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }

    async function remove(idp) {
        if (confirm("Apakah anda yakin hapus?")) {
            loading = true;
            try {
                const response = await fetch("api/product?id="+idp, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    }
                });
                if (response.ok) {
                    await response.json();
                    data = await index();
                    loading = false;
                    model.nama = "";
                    model.harga = "";
                    model.deskripsi = "";
                    model.warna = "";
                    model.img = "";
                    model.jenis = "";
                }
            } catch (error) {
                console.log(error);
                return;
            }
        }else{
            return;
        }
    }

    async function update() {
        if(id === null) return;
        loading = true;
        try {
            const response = await fetch("api/product?id="+id, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ model }),
            });
            if (response.ok) {
                await response.json();
                data = await index();
                loading = false;
                model.nama = "";
                model.harga = "";
                model.deskripsi = "";
                model.id_warna = "";
                model.img = "";
                model.id_jenis = "";
                id = null;
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }
</script>

<svelte:head>
    <title>Admin Dashboard</title>
</svelte:head>
<div class="container">
    <div class="py-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="">Nama Produk</label>
                            <input
                            class="form-control"
                                type="text"
                                bind:value={model.nama}
                                id="nama"
                                placeholder="Produk Name"
                            />
                        </div>
                        <div class="form-group">
                            <label for="">Harga</label><input
                            class="form-control" 
                            type="text" 
                            bind:value={model.harga}
                            id="harga"
                            placeholder="Price" />
                        </div>
                        <div class="form-group">
                            <label for="">Deskripsi</label><input
                            class="form-control"
                                type="text"
                                bind:value={model.deskripsi}
                                id="deskripsi"
                                placeholder="Description"
                            />
                        </div>
                        <div class="form-group">
                            <label for="">ID Warna</label><input
                            class="form-control"
                                type="text"
                                bind:value={model.id_warna}
                                id="id_warna"
                                placeholder="Color"
                            />
                        </div>
                        <div class="form-group">
                            <label for="">IMg</label><input
                            class="form-control" 
                            type="text" 
                                bind:value={model.img}
                            id="img"
                            placeholder="Pictures" 
                            />
                        </div>
                        <div class="form-group">
                            <label for="">Jenis</label><input
                            class="form-control" 
                            type="text"  
                            bind:value={model.id_jenis}
                            id="id_jenis"
                            placeholder="Jenis" 
                            />
                        </div>
                        <!-- <button
                            class="btn btn-primary btn-sm btn-block"
                            type="button"
                            on:click={insert}
                        >simpan</button> -->
                        {#if id != null}
                        <button
                            class="btn btn-success btn-sm btn-block"
                            type="button"
                            on:click={update}
                        >
                            {loading ? "Tunggu sebentar..." : "Update data"}
                        </button>
                        {:else}
                        <button
                            class="btn btn-primary btn-sm btn-block"
                            type="button"
                            on:click={insert}
                        >
                            {loading ? "Tunggu sebentar" : "Simpan"}
                        </button>
                        {/if}
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Deskripsi</th>
                                    <th scope="col">Warna</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Jenis</th>
                                    <th scope="col">Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each data as item, i}
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.nama}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.deskripsi}</td>
                                        <td>{item.warna}</td>
                                        <td>{item.img}</td>
                                        <td>{item.nama_jenis}</td>
                                        <td>
                                            <a class="text-success" href on:click|preventDefault={()=> {
                                                id = item.id;
                                                model.nama = item.nama;
                                                model.harga = item.harga;
                                                model.deskripsi = item.deskripsi;
                                                model.id_warna = item.id_warna;
                                                model.img = item.img;
                                                model.id_jenis = item.id_jenis;
                                            }}
                                                ><i class="fa fa-pencil-square-o fa-2" aria-hidden="true"></i></a
                                            >
                                            <a class="text-danger" href on:click|preventDefault={()=>remove(item.id)}
                                                ><i class="fa fa-trash fa-2" aria-hidden="true"></i></a
                                            >
                                        </td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
             </div>
        </div>
    </div>
</div>
