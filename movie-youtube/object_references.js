// Object awal
var newLocal = {
    name: "sigit wasis subekti",
    umur: 23,
    keinginan: 'pejuang kode',
};

// kita rubah dengan mengcopy dari object newLocal
var obj2 = newLocal;
obj2.umur = 19;

console.log(newLocal);

/* Keterangan =
    Jadi object references adalah kita dapat merubah object awal dengan 
    mencopy kedalam object baru, dimna jika data kita rubah maka akan 
    berganti sesuai data yang terdapat pada object yang baru.

    Contoh:
        Didalam object newLocal terdapat variabel umur dengan nilai 23
        Setelah kita rubah di dalam obj2 maka nilainya akan menjadi 19

    Output:
        { name: 'sigit wasis subekti', umur: 19, keinginan: 'pejuang kode' }
*/
