export interface PoliceStation {
  station: string;
  location: string;
  number: string;
  sector: string;
}

export interface FireStation {
  station: string;
  location: string;
  numbers: string[];
  sector: string;
}

export interface EmergencyFacility {
  id: string;
  name: string;
  category: 'hospital' | 'police' | 'fire' | 'rescue';
  catLabel: string;
  lat: number;
  lng: number;
  phone: string;
  address: string;
}

// ZCPO 12 Police Stations Data
export const policeStations: PoliceStation[] = [
  { station: 'ZCPS 1', location: 'Vitali', number: '0935-604-4139', sector: 'East Coast' },
  { station: 'ZCPS 2', location: 'Curuan', number: '0935-457-2483', sector: 'East Coast' },
  { station: 'ZCPS 3', location: 'Sangali', number: '0917-146-2240', sector: 'East Coast' },
  { station: 'ZCPS 4', location: 'Culianan', number: '0975-333-8826', sector: 'East Coast' },
  { station: 'ZCPS 5', location: 'Divisoria', number: '0917-677-8907', sector: 'Central' },
  { station: 'ZCPS 6', location: 'Tetuan', number: '0997-746-5666', sector: 'Central' },
  { station: 'ZCPS 7', location: 'Sta. Maria', number: '0917-307-8098', sector: 'Central' },
  { station: 'ZCPS 8', location: 'Sinunuc', number: '0906-853-9806', sector: 'West Coast' },
  { station: 'ZCPS 9', location: 'Ayala', number: '0917-864-8553', sector: 'West Coast' },
  { station: 'ZCPS 10', location: 'Labuan', number: '0917-309-3887', sector: 'West Coast' },
  { station: 'ZCPS 11', location: 'Central (Poblacion)', number: '0917-701-6340', sector: 'Central' },
  { station: 'ZCPS 12', location: 'Talon-Talon', number: '0977-855-8138', sector: 'East Coast' },
];

// Zamboanga City Fire District Stations Data
export const fireStations: FireStation[] = [
  { station: 'ZCFD Central', location: 'City Center (Central Substation)', numbers: ['160', '0955-781-6063'], sector: 'Central' },
  { station: 'Ayala', location: 'Ayala Substation', numbers: ['0965-094-9122'], sector: 'West Coast' },
  { station: 'Boalan', location: 'Boalan Substation', numbers: ['0997-703-1365'], sector: 'East Coast' },
  { station: 'Buenavista', location: 'Buenavista Substation', numbers: ['0967-637-8551', '0992-271-8146'], sector: 'East Coast' },
  { station: 'Cabaluay', location: 'Cabaluay Substation', numbers: ['0975-592-0791'], sector: 'East Coast' },
  { station: 'Upper Calarian', location: 'Upper Calarian Substation', numbers: ['0962-9400-823'], sector: 'West Coast' },
  { station: 'Culianan', location: 'Culianan Substation', numbers: ['0975-295-3599'], sector: 'East Coast' },
  { station: 'Guiwan', location: 'Guiwan Substation', numbers: ['0955-541-1415'], sector: 'Central' },
  { station: 'Labuan', location: 'Labuan Substation', numbers: ['0927-493-5473'], sector: 'West Coast' },
  { station: 'Lunzuran', location: 'Lunzuran Substation', numbers: ['0936-154-5366'], sector: 'Central' },
  { station: 'Manicahan', location: 'Manicahan Substation', numbers: ['0975-031-3372'], sector: 'East Coast' },
  { station: 'Mampang', location: 'Mampang Substation', numbers: ['0953-865-6340'], sector: 'East Coast' },
  { station: 'Mercedes', location: 'Mercedes Substation', numbers: ['0966-130-6100'], sector: 'East Coast' },
  { station: 'Pasonanca', location: 'Pasonanca Substation', numbers: ['0954-998-3555'], sector: 'Central' },
  { station: 'Putik', location: 'Putik Substation', numbers: ['0926-391-8236'], sector: 'East Coast' },
  { station: 'Quiniput', location: 'Quiniput Substation', numbers: ['0962-2934-154'], sector: 'East Coast' },
  { station: 'Recodo', location: 'Recodo Substation', numbers: ['0997-753-4860'], sector: 'West Coast' },
  { station: 'Sangali', location: 'Sangali Substation', numbers: ['0965-400-7329', '0969-464-4423'], sector: 'East Coast' },
  { station: 'San Jose Gusu', location: 'San Jose Gusu Substation', numbers: ['0993-981-7362'], sector: 'Central' },
  { station: 'San Roque', location: 'San Roque Substation', numbers: ['0969-262-3638'], sector: 'Central' },
  { station: 'Sinunuc', location: 'Sinunuc Substation', numbers: ['0917-1701-344'], sector: 'West Coast' },
  { station: 'Sta Catalina', location: 'Sta Catalina Substation', numbers: ['0956-158-0789'], sector: 'Central' },
  { station: 'Sta Maria', location: 'Sta Maria Substation', numbers: ['0935-287-2162'], sector: 'Central' },
  { station: 'Talisayan', location: 'Talisayan Substation', numbers: ['0936-462-2070'], sector: 'West Coast' },
  { station: 'Talon-Talon', location: 'Talon-Talon Substation', numbers: ['0955-4085-457'], sector: 'East Coast' },
  { station: 'Tetuan', location: 'Tetuan Substation', numbers: ['0906-444-7816'], sector: 'Central' },
  { station: 'Tigbalabag', location: 'Tigbalabag Substation', numbers: ['0965-263-1044'], sector: 'East Coast' },
  { station: 'Tumaga', location: 'Tumaga Substation', numbers: ['0953-867-1364'], sector: 'Central' },
  { station: 'Tugbungan', location: 'Tugbungan Substation', numbers: ['0917-670-1977'], sector: 'Central' },
  { station: 'Vitali', location: 'Vitali Substation', numbers: ['0970-290-5419'], sector: 'East Coast' }
];

// Official Zamboanga Emergency Facilities Map Dataset
export const emergencyFacilities: EmergencyFacility[] = [
  // HOSPITALS (11 Facilities)
  { id: 'h1', name: 'Zamboanga City Medical Center (ZCMC)', category: 'hospital', catLabel: 'Hospital', lat: 6.9072509, lng: 122.0784067, phone: '(062) 991-2934', address: 'Evangelista St, Sta Catalina' },
  { id: 'h2', name: 'Ciudad Medical Zamboanga', category: 'hospital', catLabel: 'Hospital', lat: 6.915048, lng: 122.076880, phone: '(062) 992-7330', address: 'Nunez Extension, Zamboanga City' },
  { id: 'h3', name: 'West Metro Medical Center', category: 'hospital', catLabel: 'Hospital', lat: 6.923431, lng: 122.079396, phone: '(062) 991-2506', address: 'Veterans Ave, Zamboanga City' },
  { id: 'h4', name: 'Brent Hospital & Colleges', category: 'hospital', catLabel: 'Hospital', lat: 6.907834, lng: 122.068330, phone: '(062) 991-2031', address: 'R.T. Lim Blvd, Zamboanga City' },
  { id: 'h5', name: "Zamboanga Doctors' Hospital", category: 'hospital', catLabel: 'Hospital', lat: 6.915219, lng: 122.080143, phone: '(062) 991-0381', address: 'Veterans Ave, Zamboanga City' },
  { id: 'h7', name: 'Labuan Public Hospital', category: 'hospital', catLabel: 'Hospital', lat: 7.097474, lng: 121.904098, phone: '0927-493-5473', address: 'Labuan Coastal Road' },
  { id: 'h8', name: 'Mindanao Central Sanitarium', category: 'hospital', catLabel: 'Hospital', lat: 6.9659794, lng: 122.130336, phone: '(062) 991-0810', address: 'Pasobolong, Zamboanga City' },
  { id: 'h9', name: 'Camp Navarro General Hospital (AFP)', category: 'hospital', catLabel: 'Hospital', lat: 6.917730, lng: 122.037793, phone: '(062) 991-2401', address: 'Camp Navarro, Upper Calarian' },
  { id: 'h10', name: 'Edwin Andrews Air Base Hospital (PAF)', category: 'hospital', catLabel: 'Hospital', lat: 6.923385, lng: 122.068878, phone: '(062) 991-1550', address: 'EAAB, Sta. Maria' },
  { id: 'h11', name: 'Cristino M. Paragas Memorial Community Hospital', category: 'hospital', catLabel: 'Hospital', lat: 7.183062, lng: 122.219745, phone: '0962-2934-154', address: 'Quiniput, Zamboanga City' },
  { id: 'h12', name: 'Zamboanga Peninsula Medical Center', category: 'hospital', catLabel: 'Hospital', lat: 6.939881, lng: 122.092020, phone: '(062) 991-5500 / 09177073884', address: 'MCLL Highway, Tetuan' },

  // POLICE PRECINCTS (11 Facilities)
  { id: 'p1', name: 'Vitali Police Station (ZCPS 1)', category: 'police', catLabel: 'Police Precinct', lat: 7.3767384, lng: 122.2870528, phone: '0935-604-4139', address: 'Vitali, East Coast' },
  { id: 'p2', name: 'Curuan Police Station (ZCPS 2)', category: 'police', catLabel: 'Police Precinct', lat: 7.204636, lng: 122.227532, phone: '0935-457-2483', address: 'Curuan, East Coast' },
  { id: 'p3', name: 'Sangali Police Station (ZCPS 3)', category: 'police', catLabel: 'Police Precinct', lat: 7.0714319, lng: 122.204728, phone: '0917-146-2240', address: 'Sangali, East Coast' },
  { id: 'p4', name: 'Culianan Police Station (ZCPS 4)', category: 'police', catLabel: 'Police Precinct', lat: 6.971524, lng: 122.145802, phone: '0975-333-8826', address: 'Culianan, East Coast' },
  { id: 'p5', name: 'Divisoria Police Station (ZCPS 5)', category: 'police', catLabel: 'Police Precinct', lat: 6.943890, lng: 122.099352, phone: '0917-677-8907', address: 'Divisoria, Central' },
  { id: 'p6', name: 'Tetuan Police Station (ZCPS 6)', category: 'police', catLabel: 'Police Precinct', lat: 6.917472, lng: 122.090872, phone: '0997-746-5666', address: 'Tetuan, Central' },
  { id: 'p7', name: 'Sta. Maria Police Station (ZCPS 7)', category: 'police', catLabel: 'Police Precinct', lat: 6.931057, lng: 122.069317, phone: '0917-307-8098', address: 'Sta. Maria, Central' },
  { id: 'p8', name: 'Sinunuc Police Station (ZCPS 8)', category: 'police', catLabel: 'Police Precinct', lat: 6.934087, lng: 122.001005, phone: '0906-853-9806', address: 'Sinunuc, West Coast' },
  { id: 'p9', name: 'Ayala Police Station (ZCPS 9)', category: 'police', catLabel: 'Police Precinct', lat: 6.9634707, lng: 121.9567993, phone: '0917-864-8553', address: 'Ayala, West Coast' },
  { id: 'p10', name: 'Labuan Police Station (ZCPS 10)', category: 'police', catLabel: 'Police Precinct', lat: 7.097829, lng: 121.903255, phone: '0917-309-3887', address: 'Labuan, West Coast' },
  { id: 'p11', name: 'Central Police Station (ZCPS 11)', category: 'police', catLabel: 'Police Precinct', lat: 6.903242, lng: 122.075813, phone: '0917-701-6340', address: 'Poblacion, Central' },
];
