import axios from 'axios';
import * as M from 'materialize-css';
import Vue from 'vue';

// tslint:disable-next-line no-unused-expression
new Vue({
    computed: {
        hasInventories(): boolean {
            return this.isLoading === false && this.inventories.length > 0;
        },
        noInventories(): boolean {
            return this.isLoading === false && this.inventories.length ===0;
        }
    },

    data(){
        return{
            brand:  '',
            color:  '',
            inventories:  [],
            isLoading:  true,
            model:  '',
            selectedInventory:  '',
            selectedInventoryId:  0,
            year:  ''
        };
    },

    el: "#app",
    methods:{
        addInventory(){
            const inventory = {
                brand: this.brand,
                color: this.color,
                model: this.model,
                year: this.year,
            };
             
            // tslint:disable-next-line:no-console
            console.log('inventory: ', inventory);
            
            axios
                .post('/api/inventories/add', inventory)
                .then(()=>{
                    this.$refs.year.focus();
                    this.brand = '';
                    this.color = '';
                    this.model = '';
                    this.year = '';
                    this.loadInventories();
                })
                .catch(( error: any ) => {
                    // tslint:disable-next-line:no-console
                    console.log( error );
                });
        },

        confirmDeleteInventory( id: string ){
            const inventory = this.inventories.find((item) => item.id === id);
            this.selectedInventory = `${ inventory.year } ${ inventory.brand } ${ inventory.model }`;
            this.selectedInventoryId = inventory.id;

            const dc = this.$refs.deleteConfirm;
            const modal = M.Modal.init( dc );
            modal.open();
        },

        deleteInventory( id : string ){
            axios
                .delete( `/api/inventories/remove/${ id }` )
                .then( this.loadInventories() )
                .catch((error: any)=>{
                    // tslint:disable-next-line:no-console
                    console.log( error );
                });
        },

        loadInventories(){
            axios
                .get( '/api/inventories/all' )
                .then( (res:any) => {
                    this.isLoading = false;
                    this.inventories = res.data;
                } )
                .catch((error: any)=>{
                    // tslint:disable-next-line:no-console
                    console.log( error );
                }); 
        }

    },
    mounted() {
        return this.loadInventories();
    }
});