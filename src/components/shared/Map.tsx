import React, { useEffect, useRef } from 'react';
import * as Highcharts from 'highcharts/highmaps';
import indiaData from '../../assets/india.json';

const clientData = [
  { name: 'BROADVIEW CONSTRUCTIONS AND HOLDINGS PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0827, lon: 80.2707, value: 100 },
  { name: 'FABIO BEVERAGES PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0830, lon: 80.2710, value: 120 },
  { name: 'FOREFRONT LOGISTICS PRIVATE LIMITED', city: 'MUMBAI', lat: 19.0760, lon: 72.8777, value: 150 },
  { name: 'GREENOSCALE LOGIX PRIVATE LIMITED', city: 'BANGALORE', lat: 12.9716, lon: 77.5946, value: 130 },
  { name: 'KAUTILYA WAREHOUSING PRIVATE LIMITED', city: 'BANGALORE', lat: 12.9720, lon: 77.5950, value: 140 },
  { name: 'KOSAMBA LOGISTICS PRIVATE LIMITED', city: 'MUMBAI', lat: 19.0765, lon: 72.8780, value: 160 },
  { name: 'NANDAV WAREHOUSING PRIVATE LIMITED', city: 'MUMBAI', lat: 19.0768, lon: 72.8783, value: 170 },
  { name: 'NASDA INFRA PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0835, lon: 80.2715, value: 110 },
  { name: 'NDR BHADRA ESTATES PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0840, lon: 80.2720, value: 115 },
  { name: 'NDR DISTRIBUTION CENTERS PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0845, lon: 80.2725, value: 125 },
  { name: 'NDR FACTOR PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0850, lon: 80.2730, value: 100 },
  { name: 'NDR GOASPACE PRIVATE LIMITED', city: 'GOA', lat: 15.2993, lon: 74.1240, value: 150 },
  { name: 'NDR INVIT MANAGERS PRIVATE LIMITED', city: 'MUMBAI', lat: 19.0770, lon: 72.8790, value: 200 },
  { name: 'NDR INVIT TRUST', city: 'MUMBAI', lat: 19.0775, lon: 72.8795, value: 180 },
  { name: 'NDR PLANTATIONS PRIVATE LIMITED', city: 'BANGALORE', lat: 12.9725, lon: 77.5955, value: 120 },
  { name: 'NDR SAFESTORE PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0855, lon: 80.2735, value: 105 },
  { name: 'NDR STORE HOUSE PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0860, lon: 80.2740, value: 110 },
  { name: 'NDR TRADEHOUSE PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0865, lon: 80.2745, value: 115 },
  { name: 'NDR VANSHIL WAREHOUSE PRIVATE LIMITED', city: 'KOLKATTA', lat: 22.5726, lon: 88.3639, value: 140 },
  { name: 'NDR WAREHOUSING SOLUTIONS PRIVATE LIMITED', city: 'DELHI', lat: 28.7041, lon: 77.1025, value: 150 },
  { name: 'NDRAVG BUSINESS PARK LIMITED', city: 'CHENNAI', lat: 13.0870, lon: 80.2750, value: 130 },
  { name: 'SEAHORSE DISTRIBUTIONS AND FREIGHT SERVICES PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0875, lon: 80.2755, value: 125 },
  { name: 'SGP UNIVERSAL LLP', city: 'AHMEDABAD', lat: 23.0225, lon: 72.5714, value: 135 },
  { name: 'SRI AMRUTHALINGESWARA WAREHOUSING PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0880, lon: 80.2760, value: 110 },
  { name: 'SVAHGRAHA CONSTRUCTIONS AND HOLDINGS PRIVATE LIMITED', city: 'CHENNAI', lat: 13.0885, lon: 80.2765, value: 115 },
  { name: 'VALIANT AMRUT INDIA PRIVATE LIMITED', city: 'BANGALORE', lat: 12.9730, lon: 77.5960, value: 125 },
  { name: 'VARAMA SIR INDIA LOGISTICS AND INFRASTRUCTURE PRIVATE LIMITED', city: 'GOA', lat: 15.2998, lon: 74.1245, value: 140 },
];

const animateCounter = (id: string, target: number, duration: number) => {
  const element = document.getElementById(id);
  if (!element) return;

  let start = 0;
  const increment = target / (duration / 16); // Approx. 60fps

  const updateCounter = () => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toString();
    } else {
      element.textContent = Math.floor(start).toString();
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
};

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const chart = useRef<Highcharts.Chart | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const getRandomOffset = () => Math.random() * 0.7 - 0.5; // Generates a random value between -0.05 and 0.05

    const clientPoints = clientData.map(client => ({
      name: client.city,
      lat: client.lat + getRandomOffset(), // Add random offset to latitude
      lon: client.lon + getRandomOffset(), // Add random offset to longitude
      value: client.value,
      clientName: client.name,
      city: client.city,
      marker: {
        radius: 1.5, // Reduced the dot size
        fillColor: 'var(--color-button-secondary)', // Changed color to secondary-button
        lineColor: 'var(--color-button-secondary)', // Match the border color to the fill color
        lineWidth: 1,
      },
    }));

    chart.current = Highcharts.mapChart(mapRef.current, {
      chart: {
        map: indiaData,
        backgroundColor: 'transparent',
        height: mapRef.current.offsetHeight,
      },
      title: {
        text: undefined,
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom',
        },
      },
      plotOptions: {
        map: {
          allAreas: true,
          joinBy: ['st_nm', 'name'],
          states: {
            hover: {
              color: '#4B8898',
            },
          },
          borderColor: '#627C82',
          borderWidth: 0.5,
          nullColor: '#203D43',
        },
        mappoint: {
          cursor: 'pointer',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderColor: '#4B8898',
        borderRadius: 8,
        shadow: true,
        useHTML: true,
        headerFormat: '',
      },
      series: [
        {
          type: 'map',
          name: 'States',
          states: {
            hover: {
              color: '#4B8898',
            },
          },
        },
        {
          type: 'mappoint',
          name: 'Client Locations',
          data: clientPoints,
          tooltip: {
            pointFormat: `
              <div class="p-3 min-w-[200px]">
                <h4 class="m-0 mb-2 text-lg font-medium text-[#2c3e50]">
                  {point.city}
                </h4>
                <div class="mb-2">
                  <strong class="text-[#34495e]">Company:</strong><br/>
                  <span class="text-[#4B8898] font-medium">{point.clientName}</span>
                </div>
                <div class="text-sm text-[#627C82]">
                  Activity Score: <strong>{point.value}</strong>
                </div>
              </div>
            `,
          },
        },
      ],
      credits: {
        enabled: false,
      },
    });

    return () => {
      if (chart.current) {
        chart.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.map-section');
      if (section && section.getBoundingClientRect().top < window.innerHeight) {
        animateCounter('client-count', 27, 2000);
        animateCounter('location-count', 15, 2000);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center map-section">
      {/* Map Section */}
      <div className="rounded-xl overflow-hidden h-[700px]">
        <div ref={mapRef} className="w-full bg-transparent h-full" />
      </div>

      {/* Client Stats Section */}
      <div className="space-y-8 text-center lg:text-left">
        <h3 className="text-4xl font-bold" style={{ color: 'var(--color-secondary)' }}>
          Empowering Businesses Nationwide
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-2xl font-semibold" style={{ color: 'var(--color-secondary)' }}>
              Total Clients
            </h4>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>
              <span id="client-count">0</span>+
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold" style={{ color: 'var(--color-secondary)' }}>
              Locations Covered
            </h4>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>
              <span id="location-count">0</span>+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;