document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {
                id: 1, name:'Acara Ulang Tahun', img:'1.jpg', price:20000
            },
            {
                id: 1, name:'Acara Pernikahan', img:'2.jpg', price:25000
            },
            {
                id: 1, name:'Acara Syukuran Keluarga', img:'about.jpg', price:30000
            },
            {
                id: 1, name:'Acara Yasinan Keluarga', img:'33.jpg', price:45000
            },
            {
                id: 1, name:'Acara sunatan anak', img:'1.jpg', price:50000
            },
        ]
        }));
        Alpine.store('cart',
        {
            items: [],
            total: 0,
            quantity: 0,
            add(newItem){
                // cek apakah ada barang yang sama dicart
                const cartItem = this.items.find((item) => item.id === newItem.id);
                // jika belum ada / masih kosong
                if(!cartItem){
                    this.items.push({...newItem, quantity: 1, total: newItem.price});
                    this.quantity++;
                    this.total += newItem.price;
                } else {
                    // jika barang sudah ada cek apakah barang beda / sama
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id){
                        return item;
                    } else {
                        // jika barang sudah ada tambah jumlah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
                }
                // end
            },
            remove(id) {
                // ambil item yang mau diremove berdasarkan id
                const cartItem = this.items.find((item) => item.id === id);
                // jika barang item lebih dari satu
                if(cartItem.quantity > 1) {
                    // telusuri satu satu
                    this.items = this.items.map((item) => {
                        // jika bukan barang yang diklik
                        if(item.id !== id) {
                            return item;
                        } else {
                            item.quantity--;
                            item.total = item.price * item.quantity;
                            this.quantity--;
                            this.total -= item.price;
                            return item;
                        }
                    })
                } else if (cartItem.quantity === 1) {
                    // jika barangnya sisa 1
                    this.items = this.items.filter((item) => item.id !== id);
                    this.quantity--;
                    this.total -= cartItem.price;
                }
            },
                });
});

// konversi ke rupiah 
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',
    {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
    };