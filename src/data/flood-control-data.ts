import { getDistrictByBarangay } from './zamboanga-barangays';

export interface FloodControlProject {
  id: string;
  district: 'District 1' | 'District 2';
  projectID: string;
  contractID: string;
  description: string;
  typeOfWork: string;
  infraType: string;
  infraYear: number;
  lat: number;
  lng: number;
  contractCost: number;
  abc: number;
  contractor: string;
  barangay: string;
  implementingOffice?: string;
}

export interface FloodControlStats {
  totalProjects: number;
  totalContractCost: number;
  averageProjectCost: number;
  uniqueContractorsCount: number;
  district1Count: number;
  district1Cost: number;
  district2Count: number;
  district2Cost: number;
}

export function extractBarangay(desc: string): string {
  if (!desc) return 'Zamboanga City';
  
  const brgyMatch = desc.match(/(?:Barangay|Brgy\.|Barangay\s+Santa|Barangay\s+Sta\.)\s+([A-Za-z0-9\s.-]+?)(?:,|\s+Zamboanga|\s+Section|$)/i);
  if (brgyMatch && brgyMatch[1]) {
    let name = brgyMatch[1].trim();
    if (name.toLowerCase().startsWith('sta.')) name = 'Sta. Maria';
    return name;
  }

  const locations = [
    'Ayala', 'Recodo', 'Tulungatung', 'San Roque', 'Sta. Maria', 'Santa Maria',
    'Limpapa', 'Latap', 'Sinunuc', 'Labuan', 'Sinubong', 'San Ramon',
    'Talisayan', 'Talon-Talon', 'Tetuan', 'Tumaga', 'Putik', 'Guiwan', 'Lumbangan'
  ];

  for (const loc of locations) {
    const regex = new RegExp(`\\b${loc}\\b`, 'i');
    if (regex.test(desc)) {
      return loc === 'Santa Maria' ? 'Sta. Maria' : loc;
    }
  }

  return 'Zamboanga City';
}

// Raw projects data array with accurate barangay-to-district mapping applied
const rawProjects: Omit<FloodControlProject, 'district'>[] = [
  // District 1
  {
    id: "6f1e5d69-3727-4316-aeeb-dfa6ec1ee070",
    projectID: "P00732473MN",
    contractID: "23JA0039",
    description: "Construction of Flood Control Structure, Barangay Ayala, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.968055556,
    lng: 121.9469444,
    contractCost: 9768821.29,
    abc: 9800000,
    contractor: "MCGABRIEL CONSTRUCTION",
    barangay: "Ayala"
  },
  {
    id: "9ddd8508-9000-4b17-b7c2-f15d945b0734",
    projectID: "P00833572MN",
    contractID: "24JA0023",
    description: "Construction of Flood Mitigation Structure (Drainage), Barangay Ayala, Zamboanga City",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2024,
    lat: 6.957917,
    lng: 121.947864,
    contractCost: 4132146.97,
    abc: 4502295.03,
    contractor: "CITYWEST BUILDERS AND SUPPLY",
    barangay: "Ayala"
  },
  {
    id: "a01bf3c9-9ca9-4ce5-93f3-bb54c873ef60",
    projectID: "P00522042MN",
    contractID: "21J00043",
    description: "Construction of Flood Control Structure at Saaz River along San Ramon Br. 2 along Zamboanga City-Labuan-Limpapa Secondary Road, Talisayan, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2021,
    lat: 7.015891489,
    lng: 121.9506434,
    contractCost: 89083475.33,
    abc: 104347826.1,
    contractor: "ALTOS CONSTRUCTION / GRACE CONSTRUCTION CORPORATION",
    barangay: "Talisayan"
  },
  {
    id: "da029bd6-9564-40b0-95f1-3c072c52bafd",
    projectID: "P00833577MN",
    contractID: "24JA0028",
    description: "Construction of Flood Mitigation Structure (Drainage), Barangay Recodo, Zamboanga City",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2024,
    lat: 6.954348,
    lng: 121.958185,
    contractCost: 4574902.04,
    abc: 4900000,
    contractor: "RME CONSTRUCTION AND ENTERPRISES",
    barangay: "Recodo"
  },
  {
    id: "aa1cba67-f3c2-4625-9b7a-a125c724d3e8",
    projectID: "P00721591MN",
    contractID: "23JA0057",
    description: "Construction of Flood Mitigation Structure, Brgy. Tulungatung, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.975833333,
    lng: 121.9658333,
    contractCost: 26485720.03,
    abc: 29400000,
    contractor: "UNITEC BUILDER, INCORPORATED",
    barangay: "Tulungatung"
  },
  {
    id: "da748328-d6f7-4a74-a1be-6ef817d68c6d",
    projectID: "P00522033MN",
    contractID: "21J00002",
    description: "Construction of Flood Control Structure along Ayala River, Tulungatung Section, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2021,
    lat: 6.980922,
    lng: 121.969664,
    contractCost: 57867414.58,
    abc: 60793971.23,
    contractor: "TEDDIE CONSTRUCTION DEVELOPMENT, INC.",
    barangay: "Tulungatung"
  },
  {
    id: "cb4a161e-682e-4a36-81f4-33652efafa4a",
    projectID: "P00522144MN",
    contractID: "21JA0123",
    description: "Construction of Slope Protection, Sitio Uwak River, San Roque, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2021,
    lat: 6.938333,
    lng: 122.047778,
    contractCost: 4875209.31,
    abc: 4900000,
    contractor: "LL CONSTRUCTION",
    barangay: "San Roque"
  },
  {
    id: "5fa12e46-be05-4afa-9ce8-e7d515cbaac2",
    projectID: "P00732472MN",
    contractID: "23JA0040",
    description: "Construction of Flood Control Structure, Barangay San Jose Gusu, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.927464172,
    lng: 122.0547136,
    contractCost: 4850980.27,
    abc: 4900000,
    contractor: "LONG ISLAND BUILDERS & CONSTRUCTION",
    barangay: "San Jose Gusu"
  },
  {
    id: "c0cec102-3a9e-40ba-9544-af5dd1392828",
    projectID: "P00732470MN",
    contractID: "23JA0037",
    description: "Construction of Drainage System, Barangay Baliwasan, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.914722222,
    lng: 122.0591667,
    contractCost: 4826250.44,
    abc: 4829317.26,
    contractor: "MEGABALTZ CONSTRUCTION",
    barangay: "Baliwasan"
  },
  {
    id: "85f25388-bdcc-4685-8dc6-eabf6997ace9",
    projectID: "P00732471MN",
    contractID: "23JA0041",
    description: "Construction of Flood Control Structure, Villa Sta. Maria, Barangay Sta. Maria, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.938611111,
    lng: 122.0763889,
    contractCost: 10884616.96,
    abc: 10890000,
    contractor: "RME CONSTRUCTION AND ENTERPRISES",
    barangay: "Sta. Maria"
  },
  {
    id: "1f24f046-21bc-41da-934c-6c15beed6275",
    projectID: "P00835858MN",
    contractID: "24JA0071",
    description: "Construction of Flood Mitigation Structure along Tumaga River (Sta. Maria Section), Barangay Santa Maria, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2024,
    lat: 6.936732,
    lng: 122.076523,
    contractCost: 17633690.21,
    abc: 17640000,
    contractor: "RME CONSTRUCTION AND ENTERPRISES",
    barangay: "Sta. Maria"
  },
  {
    id: "334a9b84-77a7-4d7a-9fe7-d68116013c99",
    projectID: "P00223199MN",
    contractID: "18J00009",
    description: "Flood Control for Urban Core and Central District of Zamboanga City to include Pumping Station and RROW, Zamboanga City (Package II)",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2018,
    lat: 6.92144,
    lng: 122.07903,
    contractCost: 198360500.00,
    abc: 202409605.5,
    contractor: "SUNWEST, INC. / BENDIMIL CONSTRUCTION",
    barangay: "Central District"
  },
  {
    id: "56bd991d-bc55-432e-b0cd-50c39840f078",
    projectID: "P00721356MN",
    contractID: "23JA0015",
    description: "Construction of Flood Control Structure at Maasin Creek, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.954923,
    lng: 121.983267,
    contractCost: 39189522.49,
    abc: 39200000,
    contractor: "BENRAM CONSTRUCTION / ALLROCK CONSTRUCTION",
    barangay: "Maasin"
  },
  {
    id: "c58b546c-5b7e-42c1-a6ab-510c3153772a",
    projectID: "P00522141MN",
    contractID: "21JA0017",
    description: "Construction of Shoreline Protection, Limpapa Section, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2021,
    lat: 7.133193,
    lng: 121.903992,
    contractCost: 39544872.43,
    abc: 46060000,
    contractor: "JAMARI CONSTRUCTION",
    barangay: "Limpapa"
  },
  {
    id: "e3c93c8d-2ecb-4182-8c5e-58eabfd310a3",
    projectID: "P00522041MN",
    contractID: "21JA0122",
    description: "Construction of Flood Control Structure at Latap River, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2021,
    lat: 7.123125833,
    lng: 121.904225,
    contractCost: 75410486.70,
    abc: 77200000,
    contractor: "RCDG CONSTRUCTION CORPORATION",
    barangay: "Latap"
  },
  {
    id: "b4ca6364-421d-4ffe-8a30-63cadabe5a8b",
    projectID: "P00721593MN",
    contractID: "23JA0016",
    description: "Construction of Flood Control Structure at Sinunuc Creek, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.943884024,
    lng: 122.0045462,
    contractCost: 19550054.94,
    abc: 19600000,
    contractor: "HENSO CONSTRUCTION INC.",
    barangay: "Sinunuc"
  },
  {
    id: "ae9f4393-b5f8-4ff0-ad68-85ca10c22e1a",
    projectID: "P00734016MN",
    contractID: "23JA0067",
    description: "Construction of Flood Mitigation Structure, Barangay Labuan, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 7.101111111,
    lng: 121.9080556,
    contractCost: 29349867.01,
    abc: 29400000,
    contractor: "MOTHER'S ROLE CONSTRUCTION",
    barangay: "Labuan"
  },
  {
    id: "4a213962-34e0-48a7-82ed-5ff8eabedb90",
    projectID: "P00630565MN",
    contractID: "22JA0021",
    description: "Construction of Slope Protection Structure, Sinunuc, Zamboanga City",
    typeOfWork: "Construction of Slope Protection Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 6.937070834,
    lng: 122.006869,
    contractCost: 19599660.32,
    abc: 19600000,
    contractor: "TEDDIE CONSTRUCTION DEVELOPMENT, INC.",
    barangay: "Sinunuc"
  },
  {
    id: "184405af-03d1-43f2-ab63-7b69970da910",
    projectID: "P00631082MN",
    contractID: "22JA0005",
    description: "Construction of Shore Protection at Busugan Section, Barangay Sinubong, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 7.030719778,
    lng: 121.9129045,
    contractCost: 39549988.07,
    abc: 39195927.69,
    contractor: "LONG ISLAND BUILDERS & CONSTRUCTION",
    barangay: "Sinubong"
  },
  {
    id: "fe09262f-774f-472d-9044-7c99049bd1ce",
    projectID: "P00721358MN",
    contractID: "23JA0017",
    description: "Construction of Flood Control Structure at Tinuba River Sinubong, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 7.028333333,
    lng: 121.9186111,
    contractCost: 41109966.96,
    abc: 41160000,
    contractor: "JM2K CONSTRUCTION",
    barangay: "Sinubong"
  },
  {
    id: "7afcc09a-8048-418b-b5f0-acc98824314a",
    projectID: "P00620110MN",
    contractID: "22JA0011",
    description: "Construction of Zamboanga Economic Zone Seafront, San Ramon Shoreline Protection, San Ramon, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 7.001103333,
    lng: 121.9202567,
    contractCost: 19071820.96,
    abc: 24499642.36,
    contractor: "YN BUILDERS AND SUPPLY",
    barangay: "San Ramon"
  },
  {
    id: "b6a6bc0e-314f-42d3-8f5e-535138ea32c7",
    projectID: "P00721354MN",
    contractID: "23JA0014",
    description: "Construction of Flood Control Structure at Busugan River, Sinubong, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 7.034166667,
    lng: 121.9202778,
    contractCost: 29218092.67,
    abc: 29285877.45,
    contractor: "WENKON CONSTRUCTION SERVICES",
    barangay: "Sinubong"
  },
  {
    id: "ae5037a7-4f6a-41a5-aee1-e24b4ed49c08",
    projectID: "P00732469MN",
    contractID: "23JA0038",
    description: "Construction of Drainage System, Barangay Sinunuc, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.929560917,
    lng: 122.0089538,
    contractCost: 4879296.30,
    abc: 4900000,
    contractor: "RME CONSTRUCTION AND ENTERPRISES",
    barangay: "Sinunuc"
  },
  {
    id: "c5e444a3-91e7-4d2f-9950-28fa4895d70a",
    projectID: "P00620109MN",
    contractID: "22JA0017",
    description: "Construction of Shoreline Protection at Sinunuc Section, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 6.929306,
    lng: 122.009436,
    contractCost: 39253426.63,
    abc: 39581710,
    contractor: "BENRAM CONSTRUCTION",
    barangay: "Sinunuc"
  },
  {
    id: "c5c19e28-41cd-449c-83e1-e3206cffd74f",
    projectID: "P00631081MN",
    contractID: "22JA0004",
    description: "Construction of Flood Control at Saaz River, San Ramon, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 7.003611,
    lng: 121.93556,
    contractCost: 49482639.74,
    abc: 49000000,
    contractor: "JM2K CONSTRUCTION",
    barangay: "San Ramon"
  },
  {
    id: "25457575-d6e5-4cea-b262-0b4293907796",
    projectID: "P00734014MN",
    contractID: "23JA0068",
    description: "Construction of Flood Mitigation Structure, Barangay Talisayan, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.971139907,
    lng: 121.9381347,
    contractCost: 29399535.35,
    abc: 29400000,
    contractor: "DANSBURG MACRO-BUILDERS INC.",
    barangay: "Talisayan"
  },
  {
    id: "b62a5216-20f3-4880-81fe-a9ec56d4ac07",
    projectID: "P00620107MN",
    contractID: "22JA0009",
    description: "Construction of Shoreline Protection at Ayala Section, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 6.962353333,
    lng: 121.9418083,
    contractCost: 33723565.84,
    abc: 39104996.18,
    contractor: "JAYKRIS ENTERPRISES & CONSTRUCTION",
    barangay: "Ayala"
  },
  {
    id: "fac68b82-14b3-4d3a-ab28-82612e7ada93",
    projectID: "P00522142MN",
    contractID: "21JA0047",
    description: "Construction of Shoreline Protection, San Ramon Section, Talisayan, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2021,
    lat: 6.997869,
    lng: 121.921057,
    contractCost: 41992237.57,
    abc: 49000000,
    contractor: "MCGABRIEL CONSTRUCTION / AQUATERRA KONSTRUKT INC.",
    barangay: "Talisayan"
  },

  // District 2
  {
    id: "ecde2f99-7901-43d2-99ca-6619e4b8c5d2",
    projectID: "P00732476MN",
    contractID: "23JA0043",
    description: "Construction of Drainage System, Barangay Talon-Talon, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.909524698,
    lng: 122.1091965,
    contractCost: 9897612.75,
    abc: 9800000,
    contractor: "MI CONSTRUCTION",
    barangay: "Talon-Talon"
  },
  {
    id: "4a27c019-69d7-4807-afd8-1e17605b859c",
    projectID: "P00732474MN",
    contractID: "23JA0044",
    description: "Construction of Drainage System, Barangay Tetuan, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2023,
    lat: 6.9196441,
    lng: 122.0905459,
    contractCost: 9899967.65,
    abc: 9800000,
    contractor: "HMI ENTERPRISES",
    barangay: "Tetuan"
  },
  {
    id: "893e3bfd-2649-4313-88fa-69a8461a1a2b",
    projectID: "P00620260MN",
    contractID: "22JA0023",
    description: "Construction of Flood Control at Tumaga River Basin, Zamboanga City",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 6.92444,
    lng: 122.091667,
    contractCost: 19595510.37,
    abc: 19517852.63,
    contractor: "AEJ HARDWARE CONSTRUCTION & ENTERPRISES",
    barangay: "Tumaga"
  },
  {
    id: "9b5929bd-9e52-46bf-b9a2-11bcb1bda9ff",
    projectID: "P00631079MN",
    contractID: "22JA0040",
    description: "Construction of Drainage System at San Antonio de Padua Village, Barangay Putik, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 6.943272409,
    lng: 122.094069485,
    contractCost: 4948757.89,
    abc: 4736646.36,
    contractor: "SHERKAD CONSTRUCTION",
    barangay: "Putik"
  },
  {
    id: "6328fe1e-e596-4899-9486-6c408e8eb14f",
    projectID: "P00631077MN",
    contractID: "22JA0038",
    description: "Construction of Drainage System at Barangay Guiwan, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Drainage Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 6.931944444,
    lng: 122.094166667,
    contractCost: 4801870.31,
    abc: 4457665.7,
    contractor: "TERRAINSHAPER CONSTRUCTION AND ENTERPRISES",
    barangay: "Guiwan"
  },
  {
    id: "382a3092-96ba-441a-b597-4a1fc43fe8ff",
    projectID: "P00631080MN",
    contractID: "22JA0041",
    description: "Construction of Flood Control (Box Culvert) at Zone III A, Barangay Lumbangan, Zamboanga City, Zamboanga del Sur",
    typeOfWork: "Construction of Flood Mitigation Structure",
    infraType: "Flood Control Structures",
    infraYear: 2022,
    lat: 6.970052685,
    lng: 122.103150904,
    contractCost: 4937068.47,
    abc: 4948347.03,
    contractor: "AYESHIA GENERAL TRADING CONSTRUCTION AND MAINTENANCE",
    barangay: "Lumbangan"
  }
];

// Automatically map each project's district based on official Barangay lookup
export const floodControlProjects: FloodControlProject[] = rawProjects.map(p => ({
  ...p,
  district: getDistrictByBarangay(p.barangay),
  implementingOffice: p.implementingOffice || 'Zamboanga City 2nd District Engineering Office'
}));

export function getFloodControlStats(): FloodControlStats {
  const totalProjects = floodControlProjects.length;
  let totalContractCost = 0;
  const contractorsSet = new Set<string>();

  let district1Count = 0;
  let district1Cost = 0;
  let district2Count = 0;
  let district2Cost = 0;

  for (const p of floodControlProjects) {
    totalContractCost += p.contractCost;
    if (p.contractor) contractorsSet.add(p.contractor.trim().toUpperCase());

    if (p.district === 'District 1') {
      district1Count++;
      district1Cost += p.contractCost;
    } else {
      district2Count++;
      district2Cost += p.contractCost;
    }
  }

  const averageProjectCost = totalProjects > 0 ? totalContractCost / totalProjects : 0;

  return {
    totalProjects,
    totalContractCost,
    averageProjectCost,
    uniqueContractorsCount: contractorsSet.size,
    district1Count,
    district1Cost,
    district2Count,
    district2Cost
  };
}

export function formatPHP(val: number): string {
  if (isNaN(val)) return '₱0.00';
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(val);
}
