MealsHub by Team 13
IF3152 - Software Engineering

**MEALSHUB**


> Source Code ini dibuat untuk memenuhi Tugas Besar Rekayasa Perangkat Lunak yaitu mengimplementasikan
sebuah website bernama 
"MealsHub" sesuai dengan spesifikasi yang diminta


**DAFTAR ISI**

- Author
- Deskripsi Singkat
- Sistematika File
- Requirements
- Cara Menjalankan Program
- Daftar Perubahan 
- Project Status

**AUTHOR**
| NIM | Nama|
| ------ | ------ |
| 18221066 |  Oncar Awwalu Rozaqy |
| 18221098 | Priscilla Auleader Napitupulu |
|18221096 | Fikri Naufal Hamdi |
|18221112| Imanuel Raditya |

**DESKRIPSI SINGKAT**

MealsHub adalah platform berbasis website yang menghadirkan solusi pemesanan dan pembayaran menu di food court secara terpusat. Aplikasi ini dirancang untuk memudahkan pelanggan food court, tenant makanan dan minuman, serta kasir sentral dalam mengatasi kendala perhitungan dan pembayaran yang rumit, menggantikan cara konvensional dengan nota fisik. MealsHub memungkinkan pembayaran terpusat pada kasir sentral dan pemberian notifikasi kepada tenant, menjadikan proses pesan-memesan lebih efisien. Selain itu, aplikasi ini memberikan akses mudah kepada pelanggan untuk melihat semua menu yang tersedia di berbagai tenant food court dalam satu platform.

**CARA MENJALANKAN PROGRAM**

> Berikut adalah langkah-langkah untuk menjalankan website MealsHub:

1. Clone repository melalui terminal dengan perintah:
   ```
   $ git clone https://gitlab.informatika.org/K02_G13/mealshub.git
   ```

2. Install dependencies dengan perintah:
   ```
   $ npm i
   ```

3. Pindahkan direktori ke bagian backend dengan perintah:
   ```
   $ cd backend
   ```

4. Jalankan program backend dengan perintah:
   ```
   $ npm run watch
   ```

5. Kembali ke direktori utama dengan perintah:
   ```
   $ cd ..
   ```

6. Pindahkan direktori ke bagian frontend dengan perintah:
   ```
   $ cd frontend
   ```

7. Jalankan program frontend dengan perintah:
   ```
   $ npm run dev
   ```

8. Program dapat diakses melalui link local host yang diberikan oleh terminal.





**TABEL BASIS DATA**


- Tabel Order_Product

| Atribut | Tipe Data |
| ------ | ------ |
| id_order | integer |
| id_product | integer |
| num_product | integer  |
| createdAt  | time stamptz |
| updatedAt  | time stamptz  |

- Tabel Orders

| Atribut | Tipe Data |
| ------ | ------ |
| id | integer |
| status | varchar |
| time | time stamptz   |
| id_table  | integer|
| id_tenant  | integer |
| createdAt  | time stamptz |
| updatedAt  | time stamptz  |

- Tabel Payments

| Atribut | Tipe Data |
| ------ | ------ |
| id | integer |
| id_order | integer |
| status |varchar  |
| createdAt  | time stamptz |
| updatedAt  | time stamptz  |

- Tabel Products

| Atribut | Tipe Data |
| ------ | ------ |
| id | integer |
| description | varchar |
| id_tenant  | integer |
| image | varchar |
| name | varchar |
| price   | float |
| stock  | integer |
| createdAt  | time stamptz |
| updatedAt  | time stamptz  |

- Tabel Tables

| Atribut | Tipe Data |
| ------ | ------ |
| id | integer |
| num_seat | integer |
| status | varchar   |
| createdAt  | time stamptz |
| updatedAt  | time stamptz  |

- Tabel Tenant

| Atribut | Tipe Data |
| ------ | ------ |
| id | integer |
| name | varchar |
| close_hour | varchar  |
| open_hour | varchar|
| description  | varchar|
| rating  | float  |
| createdAt  | time stamptz  |
| updatedAt  | time stamptz  |
| image  | text |

- Tabel User

| Atribut | Tipe Data |
| ------ | ------ |
| id | integer |
| username | varchar |
| fullname  | varchar |
| email   | varchar |
| password  | varchar |
| role | varchar |
| createdAt  | time stamptz  |
| updatedAt  | time stamptz  |


**PROJECT STATUS**

Status : Completed

| Kebutuhan Fungsional | Status | 
| ------ | ------ |
| UC01 (Login)| Completed  |
| UC02 (Sign-Up)| Completed|
| UC03 (View Menu)|  Completed |
| UC04 (Place Order) | Completed |
| UC05 (Make Payment)  | Completed |
| UC06 (View Order Status)  | Completed |
| UC07 (Manage Menu) | Completed  |
| UC08 (Manage Order)  | Completed |
| UC09 (View Payment History )  | Completed |
| UC10 (Confirm Payment ) | Completed |
| UC10 (Confirm Payment ) | Completed |
