<script context="module">
    export async function preload({},{auth}){
        if (!auth) {
            return this.redirect(301, 'login')
        }
    }
</script>
<slot><!-- optional fallback --></slot>


