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
                "markas" => "Banda Aceh"
            ],
            [
                "nama" => "Kepolisian Daerah Sumatera Utara",
                "wilayah_hukum" => "Sumatera Utara",
                "markas" => "Medan"
            ],
            [
                "nama" => "Kepolisian Daerah Sumatera Barat",
                "wilayah_hukum" => "Sumatera Barat",
                "markas" => "Padang"
            ],
            [
                "nama" => "Kepolisian Daerah Riau",
                "wilayah_hukum" => "Riau",
                "markas" => "Pekanbaru"
            ],
            [
                "nama" => "Kepolisian Daerah Kepulauan Riau",
                "wilayah_hukum" => "Kepulauan Riau",
                "markas" => "Batam"
            ],
            [
                "nama" => "Kepolisian Daerah Jambi",
                "wilayah_hukum" => "Jambi",
                "markas" => "Jambi"
            ],
            [
                "nama" => "Kepolisian Daerah Bengkulu",
                "wilayah_hukum" => "Bengkulu",
                "markas" => "Bengkulu"
            ],
            [
                "nama" => "Kepolisian Daerah Sumatera Selatan",
                "wilayah_hukum" => "Sumatera Selatan",
                "markas" => "Palembang"
            ],
            [
                "nama" => "Kepolisian Daerah Kepulauan Bangka Belitung",
                "wilayah_hukum" => "Kepulauan Bangka Belitung",
                "markas" => "Pangkal Pinang"
            ],
            [
                "nama" => "Kepolisian Daerah Lampung",
                "wilayah_hukum" => "Lampung",
                "markas" => "Bandar Lampung"
            ],
            [
                "nama" => "Kepolisian Daerah Metropolitan Jakarta Raya",
                "wilayah_hukum" => "Jakarta",
                "markas" => "Jakarta"
            ],
            [
                "nama" => "Kepolisian Daerah Banten",
                "wilayah_hukum" => "Banten",
                "markas" => "Serang"
            ],
            [
                "nama" => "Kepolisian Daerah Jawa Barat",
                "wilayah_hukum" => "Jawa Barat",
                "markas" => "Bandung"
            ],
            [
                "nama" => "Kepolisian Daerah Jawa Tengah",
                "wilayah_hukum" => "Jawa Tengah",
                "markas" => "Semarang"
            ],
            [
                "nama" => "Kepolisian Daerah Istimewa Yogyakarta",
                "wilayah_hukum" => "Daerah Istimewa Yogyakarta",
                "markas" => "Sleman, Daerah Istimewa Yogyakarta"
            ],
            [
                "nama" => "Kepolisian Daerah Jawa Timur",
                "wilayah_hukum" => "Jawa Timur",
                "markas" => "Surabaya"
            ],
            [
                "nama" => "Kepolisian Daerah Bali",
                "wilayah_hukum" => "Bali",
                "markas" => "Denpasar"
            ],
            [
                "nama" => "Kepolisian Daerah Nusa Tenggara Barat",
                "wilayah_hukum" => "Nusa Tenggara Barat",
                "markas" => "Mataram"
            ],
            [
                "nama" => "Kepolisian Daerah Nusa Tenggara Timur",
                "wilayah_hukum" => "Nusa Tenggara Timur",
                "markas" => "Kupang"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Barat",
                "wilayah_hukum" => "Kalimantan Barat",
                "markas" => "Pontianak"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Tengah",
                "wilayah_hukum" => "Kalimantan Tengah",
                "markas" => "Palangka Raya"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Selatan",
                "wilayah_hukum" => "Kalimantan Selatan",
                "markas" => "Banjarbaru"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Timur",
                "wilayah_hukum" => "Kalimantan Timur",
                "markas" => "Balikpapan"
            ],
            [
                "nama" => "Kepolisian Daerah Kalimantan Utara",
                "wilayah_hukum" => "Kalimantan Utara",
                "markas" => "Tanjung Selor"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Utara",
                "wilayah_hukum" => "Sulawesi Utara",
                "markas" => "Manado"
            ],
            [
                "nama" => "Kepolisian Daerah Gorontalo",
                "wilayah_hukum" => "Gorontalo",
                "markas" => "Gorontalo"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Tengah",
                "wilayah_hukum" => "Sulawesi Tengah",
                "markas" => "Palu"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Tenggara",
                "wilayah_hukum" => "Sulawesi Tenggara",
                "markas" => "Kendari"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Selatan",
                "wilayah_hukum" => "Sulawesi Selatan",
                "markas" => "Makassar"
            ],
            [
                "nama" => "Kepolisian Daerah Sulawesi Barat",
                "wilayah_hukum" => "Sulawesi Barat",
                "markas" => "Mamuju"
            ],
            [
                "nama" => "Kepolisian Daerah Maluku Utara",
                "wilayah_hukum" => "Maluku Utara",
                "markas" => "Ternate"
            ],
            [
                "nama" => "Kepolisian Daerah Maluku",
                "wilayah_hukum" => "Maluku",
                "markas" => "Ambon"
            ],
            [
                "nama" => "Kepolisian Daerah Papua Barat",
                "wilayah_hukum" => "Papua Barat Daya Papua Barat",
                "markas" => "Manokwari"
            ],
            [
                "nama" => "Kepolisian Daerah Papua",
                "wilayah_hukum" => "Papua Tengah Papua Papua Pegunungan Papua Selatan",
                "markas" => "Jayapura"
            ],
            [
                "nama" => "Pusinafis",
                "wilayah_hukum" => "Pusinafis",
                "markas" => "Pusinafis"
            ]
        ];

        // create data wilayah
        Wilayah::insert($wilayah);
    }
}
