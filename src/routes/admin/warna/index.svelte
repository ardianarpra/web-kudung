<script>
    import { onMount } from "svelte";
    async function index() {
        try {
            const response = await fetch("api/warna?mode=all");
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

    let model = { warna: " " };
    let warna_id = null;
    let loading = false;
    async function insert() {
        loading = true;
        try {
            const response = await fetch("api/warna?mode=all", {
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
                loading = false;
                model.warna = "";
                console.log(model)
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }

    async function remove(warna_id) {
        if (confirm("Apakah anda yakin hapus?")) {
            loading = true;
            try {
                const response = await fetch("api/warna?id="+warna_id, {
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
                    model.warna = "";
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
        if(warna_id === null) return;
        loading = true;
        try {
            const response = await fetch("api/warna?id="+warna_id, {
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
                model.warna = "";
                warna_id = null;
                console.log(model);
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }
</script>

<svelte:head>
    <title>Page Warna</title>
</svelte:head>
<div class="container">
    <div class="py-4">
        <div class="">
            <div class="col-md-10 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="nama">Input Warna</label>
                            <input
                                class="form-control"
                                type="text"
                                bind:value={model.warna}
                                id="warna"
                                placeholder="Enter Warna"
                            />
                        </div>
                        {#if warna_id != null}
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
                        <hr />
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Warna</th>
                                    <th scope="col">Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each data as item, i}
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.warna}</td>
                                        <td>
                                            <a class="text-success" href on:click|preventDefault={()=> {
                                                warna_id = item.warna_id;
                                                model.warna = item.warna;
                                            }}
                                                ><i class="fa fa-pencil-square-o fa-2" aria-hidden="true"></i></a
                                            >
                                            <a class="text-danger" href on:click|preventDefault={()=>remove(item.warna_id)}
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
