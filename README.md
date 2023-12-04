## How to switch remote 
1. Cek remote saat ini dengan perintah:
- git remote -v

2. ubah remote ke repo baru dengan perintah :
- git remote set-url origin https://github.com/username/repository-baru.git

3. cek lagi :
- git remote -v

## Update repository
1. Tambahkan perubahan ke staging area dengan perintah:
- git add .

2. Commit perubahan dengan pesan yang jelas:
- git commit -m "Deskripsi perubahan"

3. Dorong perubahan ke repository baru dengan perintah:
- git push origin master
    (Gantikan master dengan nama branch yang relevan jika Anda menggunakan branch lain.)

