<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Wilayah;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //admin
        $roles = [
            [
                'name_role' => 'admin',
            ],
            [
                'name_role' => 'pusinafis',
            ],
            [
                'name_role' => 'polda',
            ],
            [
                'name_role' => 'polres',
            ],
        ];

        // create data roles
        Role::insert($roles);

        // wilayah 

        $wilayah = [
            [
                "nama" => "Kepolisian Daerah Aceh",
                "wilayah_hukum" => "Aceh",
                "markas" => "Banda Aceh",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lambang_Polda_Aceh.png/50px-Lambang_Polda_Aceh.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sumatera Utara",
                "wilayah_hukum" => "Sumatera Utara",
                "markas" => "Medan",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lambang_Polda_Sumut.png/50px-Lambang_Polda_Sumut.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sumatera Barat",
                "wilayah_hukum" => "Sumatera Barat",
                "markas" => "Padang",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Logo_Polda_Sumbar.svg/50px-Logo_Polda_Sumbar.svg.png"
            ],
            [
                "nama" => "Kepolisian Daerah Riau",
                "wilayah_hukum" => "Riau",
                "markas" => "Pekanbaru",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lambang_Polda_Riau.png/50px-Lambang_Polda_Riau.png"
            ],
            [
                "nama" => "Kepolisian Daerah Kepulauan Riau",
                "wilayah_hukum" => "Kepulauan Riau",
                "markas" => "Batam",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lambang_Polda_Kep_Riau.png/50px-Lambang_Polda_Kep_Riau.png"
            ],
            [
                "nama" => "Kepolisian Daerah Jambi",
                "wilayah_hukum" => "Jambi",
                "markas" => "Jambi",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lambang_Polda_Jambi.png/50px-Lambang_Polda_Jambi.png"
            ],
            [
                "nama" => "Kepolisian Daerah Bengkulu",
                "wilayah_hukum" => "Bengkulu",
                "markas" => "Bengkulu",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Lambang_Polda_Bengkulu.png/50px-Lambang_Polda_Bengkulu.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sumatera Selatan",
                "wilayah_hukum" => "Sumatera Selatan",
                "markas" => "Palembang",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Lambang_Polda_Sumsel.png/50px-Lambang_Polda_Sumsel.png"
            ],
            [
                "nama" => "Kepolisian Daerah Kepulauan Bangka Belitung",
                "wilayah_hukum" => "Kepulauan Bangka Belitung",
                "markas" => "Pangkal Pinang",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lambang_Polda_Kep_Babel.png/50px-Lambang_Polda_Kep_Babel.png"
            ],
            [
                "nama" => "Kepolisian Daerah Lampung",
                "wilayah_hukum" => "Lampung",
                "markas" => "Bandar Lampung",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lambang_Polda_Lampung.png/50px-Lambang_Polda_Lampung.png"
            ],
            [
                "nama" => "Kepolisian Daerah Metropolitan Jakarta Raya",
                "wilayah_hukum" => "Jakarta",
                "markas" => "Jakarta",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lambang_Polda_Metro_Jaya.png/50px-Lambang_Polda_Metro_Jaya.png"
            ],
            [
                "nama" => "Kepolisian Daerah Banten",
                "wilayah_hukum" => "Banten",
                "markas" => "Serang",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lambang_Polda_Banten.png/50px-Lambang_Polda_Banten.png"
            ],
            [
                "nama" => "Kepolisian Daerah Jawa Barat",
                "wilayah_hukum" => "Jawa Barat",
                "markas" => "Bandung",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lambang_Polda_Jabar.png/50px-Lambang_Polda_Jabar.png"
            ],
            [
                "nama" => "Kepolisian Daerah Jawa Tengah",
                "wilayah_hukum" => "Jawa Tengah",
                "markas" => "Semarang",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Lambang_Polda_Jateng.png/50px-Lambang_Polda_Jateng.png"
            ],
            [
                "nama" => "Kepolisian Daerah Istimewa Yogyakarta",
                "wilayah_hukum" => "Daerah Istimewa Yogyakarta",
                "markas" => "Sleman, Daerah Istimewa Yogyakarta",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lambang_Polda_DIY.png/50px-Lambang_Polda_DIY.png"
            ],
            [
                "nama" => "Kepolisian Daerah Jawa Timur",
                "wilayah_hukum" => "Jawa Timur",
                "markas" => "Surabaya",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Lambang_Polda_Jawa_Timur.svg/50px-Lambang_Polda_Jawa_Timur.svg.png"
            ],
            [
                "nama" => "Kepolisian Daerah Bali",
                "wilayah_hukum" => "Bali",
                "markas" => "Denpasar",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lambang_Polda_Bali.png/50px-Lambang_Polda_Bali.png"
            ],
            [
                "nama" => "Kepolisian Daerah Nusa Tenggara Barat",
                "wilayah_hukum" => "Nusa Tenggara Barat",
                "markas" => "Mataram",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lambang_Polda_NTB.png/50px-Lambang_Polda_NTB.png"
            ],
            [
                "nama" => "Kepolisian Daerah Nusa Tenggara Timur",
                "wilayah_hukum" => "Nusa Tenggara Timur",
                "markas" => "Kupang",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lambang_Polda_NTT.png/50px-Lambang_Polda_NTT.png"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Barat",
                "wilayah_hukum" => "Kalimantan Barat",
                "markas" => "Pontianak",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Lambang_Polda_Kalbar.png/50px-Lambang_Polda_Kalbar.png"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Tengah",
                "wilayah_hukum" => "Kalimantan Tengah",
                "markas" => "Palangka Raya",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lambang_Polda_Kalteng.png/50px-Lambang_Polda_Kalteng.png"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Selatan",
                "wilayah_hukum" => "Kalimantan Selatan",
                "markas" => "Banjarbaru",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Lambang_Polda_Kalsel.png/50px-Lambang_Polda_Kalsel.png"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Timur",
                "wilayah_hukum" => "Kalimantan Timur",
                "markas" => "Balikpapan",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lambang_Polda_Kaltim.png/50px-Lambang_Polda_Kaltim.png"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Utara",
                "wilayah_hukum" => "Kalimantan Utara",
                "markas" => "Tanjung Selor",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lambang_Polda_Kaltara_logo.png/50px-Lambang_Polda_Kaltara_logo.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Utara",
                "wilayah_hukum" => "Sulawesi Utara",
                "markas" => "Manado",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/New_Logo_Polda_Sulawesi_Utara.png/50px-New_Logo_Polda_Sulawesi_Utara.png"
            ],
            [
                "nama" => "Kepolisian Daerah Gorontalo",
                "wilayah_hukum" => "Gorontalo",
                "markas" => "Gorontalo",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Lambang_Polda_Gorontalo.png/50px-Lambang_Polda_Gorontalo.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Tengah",
                "wilayah_hukum" => "Sulawesi Tengah",
                "markas" => "Palu",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lambang_Polda_Sulteng.png/50px-Lambang_Polda_Sulteng.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Tenggara",
                "wilayah_hukum" => "Sulawesi Tenggara",
                "markas" => "Kendari",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lambang_Polda_Sultra.png/50px-Lambang_Polda_Sultra.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Selatan",
                "wilayah_hukum" => "Sulawesi Selatan",
                "markas" => "Makassar",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Lambang_Polda_Sulsel.png/50px-Lambang_Polda_Sulsel.png"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Barat",
                "wilayah_hukum" => "Sulawesi Barat",
                "markas" => "Mamuju",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lambang_Polda_Sulbar.png/50px-Lambang_Polda_Sulbar.png"
            ],
            [
                "nama" => "Kepolisian Daerah Maluku Utara",
                "wilayah_hukum" => "Maluku Utara",
                "markas" => "Ternate",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lambang_Polda_Maluku_Utara.png/50px-Lambang_Polda_Maluku_Utara.png"
            ],
            [
                "nama" => "Kepolisian Daerah Maluku",
                "wilayah_hukum" => "Maluku",
                "markas" => "Ambon",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lambang_Polda_Maluku.png/50px-Lambang_Polda_Maluku.png"
            ],
            [
                "nama" => "Kepolisian Daerah Papua Barat",
                "wilayah_hukum" => "Papua Barat Daya Papua Barat",
                "markas" => "Manokwari",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lambang_Polda_Papua_Barat.svg/50px-Lambang_Polda_Papua_Barat.svg.png"
            ],
            [
                "nama" => "Kepolisian Daerah Papua",
                "wilayah_hukum" => "Papua Tengah Papua Papua Pegunungan Papua Selatan",
                "markas" => "Jayapura",
                "gambar" => "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Lambang_Polda_Papua.png/50px-Lambang_Polda_Papua.png"
            ],
            [
                "nama" => "Pusinafis",
                "wilayah_hukum" => "Pusinafis",
                "markas" => "Pusinafis",
                "gambar" => "https://akpol.ac.id/wp-content/uploads/2020/10/pusinafis.png"
            ]
        ];


        // create data wilayah
        Wilayah::insert($wilayah);
    }
}
