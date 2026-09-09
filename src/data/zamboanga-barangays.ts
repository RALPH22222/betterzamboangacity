export interface BarangayDistrictMap {
  district1: string[];
  district2: string[];
}

// Official 98 Barangays of Zamboanga City categorized by Legislative District
export const district1Barangays: string[] = [
  "Ayala",
  "Baliwasan",
  "Baluno",
  "Cabatangan",
  "Calarian",
  "Camino Nuevo",
  "Campo Islam",
  "Canelar",
  "Capisan",
  "Cawit",
  "Labuan",
  "La Paz",
  "Limpapa",
  "Maasin",
  "Malagutay",
  "Mariki",
  "Pamucutan",
  "Pasonanca",
  "Patalon",
  "Recodo",
  "Rio Hondo",
  "San Jose – Cawa Cawa",
  "San Jose – Gusu",
  "San Roque",
  "San Ramon",
  "Sinubong",
  "Sinunuc",
  "Sta. Barbara",
  "Sta. Maria",
  "Sto. Niño",
  "Talisayan",
  "Tulungatung",
  "Zone I",
  "Zone II",
  "Zone III",
  "Zone IV"
];

export const district2Barangays: string[] = [
  "Arena Blanco",
  "Boalan",
  "Bolong",
  "Buenavista",
  "Bunguiao",
  "Busay",
  "Cabaluay",
  "Cacao",
  "Calabasa",
  "Culianan",
  "Curuan",
  "Dita",
  "Divisoria",
  "Dulian – Bunguiao",
  "Guisao",
  "Guiwan",
  "Kasanyangan",
  "Lamisahan",
  "Landang Gua",
  "Landang Laum",
  "Lanzones",
  "Lapakan",
  "Latuan",
  "Licomo",
  "Limaong",
  "Lubigan",
  "Lumayang",
  "Lumbangan",
  "Lunzuran",
  "Mampang",
  "Manalipa",
  "Mangusu",
  "Manicahan",
  "Mercedes",
  "Muti",
  "Pangapuyan",
  "Panubigan",
  "Pasilmanta",
  "Pasobolong",
  "Putik",
  "Quiniput",
  "Salaan",
  "Sangali",
  "Sta. Catalina",
  "Sibulao",
  "Tagasilay",
  "Taguiti",
  "Talabaan",
  "Talon-Talon",
  "Taluksangay",
  "Tetuan",
  "Tictapul",
  "Tigbalabag",
  "Tigtabon",
  "Tolosa",
  "Tugbungan",
  "Tumaga",
  "Tumalutab",
  "Tumitus",
  "Victoria",
  "Vitali",
  "Zambowood"
];

// Helper to determine accurate district from barangay name
export function getDistrictByBarangay(barangayName: string): 'District 1' | 'District 2' {
  if (!barangayName) return 'District 1';

  const nameLower = barangayName.toLowerCase().trim();

  // Check District 2 first
  for (const b of district2Barangays) {
    if (nameLower.includes(b.toLowerCase()) || b.toLowerCase().includes(nameLower)) {
      return 'District 2';
    }
  }

  // Check District 1
  for (const b of district1Barangays) {
    if (nameLower.includes(b.toLowerCase()) || b.toLowerCase().includes(nameLower)) {
      return 'District 1';
    }
  }

  return 'District 1';
}
